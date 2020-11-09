import urls from '../constants';
import {
  fetchPlanetsIsLoading,
  fetchPlanetsSuccess,
  fetchPlanetsFailure,
  fetchVehiclesIsLoading,
  fetchVehiclesSuccess,
  fetchVehiclesFailure,
  fetchTokenIsLoading,
  fetchTokenSuccess,
  fetchTokenFailure,
  fetchResultIsLoading,
  fetchResultSuccess,
  fetchResultFailure
} from '../../store/actions';
import axiosInstance from './axiosInstance';



export const fetchPlanets = () => (dispatch, getState) => {
  dispatch(fetchPlanetsIsLoading(true));

  return axiosInstance
    .get(urls.PLANETS_URL)
    .then(response => {
        dispatch(fetchPlanetsSuccess(response.data));
        return response.data;
    })
    .catch(errors => {
      dispatch(fetchPlanetsFailure(errors));
      throw errors;
    });
};

export const fetchVehicles = () => (dispatch, getState) => {
  dispatch(fetchVehiclesIsLoading(true));

  return axiosInstance
    .get(urls.VEHICLES_URL)
    .then(response => {
        dispatch(fetchVehiclesSuccess(response.data));
        return response.data;
    })
    .catch(errors => {
      dispatch(fetchVehiclesFailure(errors));
      throw errors;
    });
};

export const generateToken = () => (dispatch, getState) => {
  dispatch(fetchTokenIsLoading(true));

  return axiosInstance
    .post(urls.TOKEN_URL, {} ,{headers: {'Accept': 'application/json'}})
    .then(response => {
        dispatch(fetchTokenSuccess(response.data));
        return response.data;
    })
    .catch(errors => {
      dispatch(fetchTokenFailure(errors));
      throw errors;
    });
};

export const findFalcon = (data) => (dispatch, getState) => {
  dispatch(fetchResultIsLoading(true));
  data.token = getState().config.token;

  return axiosInstance
    .post(urls.FF_URL, data ,{headers: {'Accept': 'application/json', 'Content-Type' :'application/json'}})
    .then(response => {
        dispatch(fetchResultSuccess(response.data));
        return response.data;
    })
    .catch(errors => {
      dispatch(fetchResultFailure(errors));
      throw errors;
    });
};