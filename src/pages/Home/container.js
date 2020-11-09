import React from 'react';

import AutoCompleteComponent from '../../components/AutoCompleteComponent';
import { Radio, Divider, Layout, Button, Typography, Row, Col, Result, message } from 'antd';
import LoaderComponent from '../../components/LoaderComponent';
import { radioButtonStyle, contentBoxStyle, selectPlanetRowStyle, findFalconRowStyle } from './styles';

const { Content } = Layout;
const { Title } = Typography;


export class HomePage extends React.Component{
    state = {
        armies: {},
        selectedPlanets: [],
        vehiclesMapping: {}
    }

    componentDidMount() {
        this.props.fetchPlanets()
        this.props.fetchVehicles().then((response) => {
            this.setState({vehiclesMapping: response.reduce((obj, item) => (obj[item.name] = item.total_no, obj) ,{})})
        })
        this.props.generateToken()
    }

    onSelectPlanet = (armyNumber, value) => {
        const armies = this.state.armies;
        armies[armyNumber] = { planet: this.props.planetsMapping[value] }
        this.setState({
            armies,
            selectedPlanets: [...this.state.selectedPlanets, value]
        });
    }

    onDeselectPlanet = (armyNumber) => {
        const armies = this.state.armies;
        const vehiclesMapping = this.state.vehiclesMapping;

        const selectedPlanet = armies[armyNumber].planet.name;
        
        if(armies[armyNumber].vehicle){
            vehiclesMapping[armies[armyNumber].vehicle.name] += 1;
        }

        delete armies[armyNumber];

        const selectedPlanets = this.state.selectedPlanets;
        selectedPlanets.splice(selectedPlanets.indexOf(selectedPlanet), 1);

        this.setState({
            armies,
            selectedPlanets,
            vehiclesMapping,
        });
    }

    onSelectVehicle = (e, armyNumber) => {
        const armies = this.state.armies;
        const vehiclesMapping = this.state.vehiclesMapping;

        if(armies[armyNumber].vehicle){
            vehiclesMapping[armies[armyNumber].vehicle.name] += 1;
            vehiclesMapping[e.target.value.name] -= 1;
        } else {
            vehiclesMapping[e.target.value.name] -= 1;
        }

        armies[armyNumber]['vehicle'] = e.target.value;
        armies[armyNumber]['totalTime'] = armies[armyNumber].planet.distance / e.target.value.speed;

        this.setState({
            armies,
            vehiclesMapping
        });
    };

    findFalcon = () => {
        const armies = this.state.armies;
        const isAllVehiclesSelected = Object.values(this.state.armies).reduce((agg, item) => agg + (item.vehicle ? 1 : 0) ,0);

        if(Object.keys(armies).length === this.props.totalArmies.length && isAllVehiclesSelected === this.props.totalArmies.length){
            const data = {planet_names: [], vehicle_names: []};
            let totalTimeTaken = 0;

            Object.keys(this.state.armies).forEach(key => {
                data.planet_names.push(armies[key].planet.name);
                data.vehicle_names.push(armies[key].vehicle.name);
                totalTimeTaken += armies[key].totalTime;
            });

            this.props.findFalcon(data);
            this.props.history.push({pathname: '/result', state: { fromHome: true, totalTimeTaken: totalTimeTaken }})
        } else {
            message.error('Please select all planets and vehicles');
        }
    }

    resetComponent = () => {
        this.setState({
            armies: {},
            selectedPlanets: []
        });
    }

    render(){        
        const { planets, planetsIsLoading, planetsError, vehiclesIsLoading, vehicles, totalArmies } = this.props;
        const { armies, selectedPlanets, vehiclesMapping } = this.state;

        return(
            <Layout className="layout">            
                {planetsIsLoading && (
                    <LoaderComponent />
                )}

                {!planetsIsLoading && (
                    <>
                    {planetsError && (
                        <Result
                            status="500"
                            title="500"
                            subTitle="Sorry, something went wrong."
                            extra={<Button type="danger" onClick={() => { this.restartGame() }}>
                                Try Again!
                            </Button>}
                        />
                    )}

                    {!planetsError && (
                        <Content style={contentBoxStyle}>
                            <Row justify={'center'}>
                                <Title id="enzymeTest" level={4}>Select planets you want to search in:</Title>
                            </Row>

                            <Row style={selectPlanetRowStyle}> 
                                {totalArmies.map((armyNumber, i) => 
                                    <Col span={6} xs={24} sm={6} key={armyNumber}> 
                                        <Row justify={'center'}> 
                                            <AutoCompleteComponent 
                                                data={planets.filter((item) => {
                                                    return !selectedPlanets.includes(item.name)})
                                                } 
                                                onSelectPlanet={this.onSelectPlanet} 
                                                onDeselectPlanet={this.onDeselectPlanet} 
                                                armyNumber={armyNumber}
                                            /> 
                                        </Row>
                                        <Row className='my-5' justify={'center'}> 
                                            <Radio.Group value={armies[armyNumber] ? armies[armyNumber].vehicle : null} onChange={e  => this.onSelectVehicle(e, armyNumber)}>
                                                {!vehiclesIsLoading && armies[armyNumber] && vehicles.map((vehicle, index) => 
                                                    <Radio 
                                                        style={radioButtonStyle} 
                                                        value={vehicle} 
                                                        key={index}
                                                        disabled={vehiclesMapping[vehicle.name] === 0 || armies[armyNumber].planet.distance > vehicle.max_distance}
                                                    >
                                                        {vehicle.name} ({vehiclesMapping[vehicle.name]})
                                                    </Radio>
                                                )}
                                            </Radio.Group>
                                        </Row>
                                    </Col> 
                                )}
                            </Row>

                            <Row justify={'center'}>
                                <Title level={3}>Total Time Taken: {Object.values(armies).reduce((agg, item) => agg + (item.totalTime ? item.totalTime : 0), 0)}</Title>
                            </Row>

                            <Row justify={'center'} style={findFalconRowStyle}>
                                <Button size="large" type="primary" onClick={this.findFalcon}>Find Falcon!</Button>
                            </Row>
                        </Content>
                    )}
                    </>
                )}
                <Divider />
            </Layout>
        );
    }
}