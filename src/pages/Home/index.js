import { HomePage } from './container';
import {connect} from 'react-redux';
import { fetchPlanets, fetchVehicles, generateToken, findFalcon } from '../../apis/api-caller';

const mapStateToProps = state => ({
    planets: state.planets.list,
    planetsMapping: state.planets.mapping,
    planetsIsLoading: state.planets.isLoading,
    planetsError: state.planets.error,

    vehicles: state.vehicles.list,
    vehiclesIsLoading: state.vehicles.isLoading,
    vehiclesError: state.vehicles.error,

    totalArmies: state.config.totalArmies,
});
  
const mapDispatchToProps = dispatch => ({
    fetchPlanets: payload => dispatch(fetchPlanets(payload)),
    fetchVehicles: payload => dispatch(fetchVehicles(payload)),
    generateToken: payload => dispatch(generateToken(payload)),
    findFalcon: payload => dispatch(findFalcon(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);  