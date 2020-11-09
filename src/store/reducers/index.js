import { combineReducers } from 'redux';

import planetReducer from './planetReducer';
import vehicleReducer from './vehicleReducer';
import configReducer from './configReducer';
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
  planets: planetReducer,
  vehicles: vehicleReducer,
  config: configReducer,
  result: resultReducer,
});

export default rootReducer;
