import React from 'react';

import LoaderComponent from '../../components/LoaderComponent';
import { Divider, Result } from 'antd';
import { Layout, Button } from 'antd';
import { contentBoxStyle } from './styles';

const { Content } = Layout;


export class ResultPage extends React.Component{
    
    componentDidMount() {
        const { location, resultIsLoading, result, fetchLastSavedResultSuccess } = this.props;
        if(!(location.state && location.state.fromHome)){
            this.props.history.push({pathname: '/'})
        }

        if(!resultIsLoading && Object.keys(result).length === 0){
            const localStorageResult = JSON.parse(localStorage.getItem('result'));
            
            if(localStorage){
                fetchLastSavedResultSuccess(localStorageResult);
            }
        }
    }

    restartGame(){
        this.props.history.goBack();
    }

    render(){
        const { resultIsLoading, result, resultError, location } = this.props;
        return(
            <Layout className="layout">
            
                {resultIsLoading && (
                    <LoaderComponent />
                )}

                {!resultIsLoading && (
                    <Content style={contentBoxStyle}>
                        {result.status === 'success' && (
                            <Result
                                key="success"
                                status="success"
                                title="Success! Congratulations on Finding Falcon. King Shan is mighty pleased."
                                subTitle={`Total Time Taken: ${location.state.totalTimeTaken}, Planet Found: ${this.props.result.planet_name}`}
                                extra={[
                                <Button key="success" type="primary" onClick={() => { this.restartGame()}}>
                                    Start Again!
                                </Button>,
                                ]}
                            />
                        )}

                        {result.status === 'false' && (
                            <Result
                                key="error"
                                status="error"
                                title="Mission Failed! Falcon not found :( Please try again."
                                extra={[
                                <Button key="error" type="danger" onClick={() => { this.restartGame()}}>
                                    Try Again!
                                </Button>,
                                ]}
                            />
                        )}

                        {resultError && (
                            <Result
                                key="500"
                                status="500"
                                title="500"
                                subTitle="Sorry, something went wrong."
                                extra={<Button key="500" type="danger" onClick={() => { this.restartGame()}}>
                                    Try Again!
                                </Button>}
                            />
                        )}
                        
                    </Content>
                )}
                <Divider />
            </Layout>
        );
    }
}