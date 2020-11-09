import { ResultPage } from './container';
import {connect} from 'react-redux';
import { fetchLastSavedResultSuccess } from '../../store/actions';

const mapStateToProps = state => ({
    result: state.result.result,
    resultIsLoading: state.result.isLoading,
    resultError: state.planets.error,
});
  
const mapDispatchToProps = dispatch => ({ 
    fetchLastSavedResultSuccess: payload => dispatch(fetchLastSavedResultSuccess(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);  