import actionTypes from './actionTypes';

export const fetchPlanetsIsLoading = isLoading => dispatch => {
    dispatch({
        type: actionTypes.FETCH_PLANETS_IS_LOADING,
        payload: isLoading,
    });
};

export const fetchPlanetsSuccess = result => dispatch => {
    dispatch({
        type: actionTypes.FETCH_PLANETS_SUCCESS,
        payload: result,
    });
};

export const fetchPlanetsFailure = error => dispatch => {
    dispatch({
        type: actionTypes.FETCH_PLANETS_FAILURE,
        payload: error,
    });
};

export const fetchVehiclesIsLoading = isLoading => dispatch => {
    dispatch({
        type: actionTypes.FETCH_VEHICLES_IS_LOADING,
        payload: isLoading,
    });
};

export const fetchVehiclesSuccess = result => dispatch => {
    dispatch({
        type: actionTypes.FETCH_VEHICLES_SUCCESS,
        payload: result,
    });
};

export const fetchVehiclesFailure = error => dispatch => {
    dispatch({
        type: actionTypes.FETCH_VEHICLES_FAILURE,
        payload: error,
    });
};

export const fetchTokenIsLoading = isLoading => dispatch => {
    dispatch({
        type: actionTypes.FETCH_TOKEN_IS_LOADING,
        payload: isLoading,
    });
};

export const fetchTokenSuccess = result => dispatch => {
    dispatch({
        type: actionTypes.FETCH_TOKEN_SUCCESS,
        payload: result,
    });
};

export const fetchTokenFailure = error => dispatch => {
    dispatch({
        type: actionTypes.FETCH_TOKEN_FAILURE,
        payload: error,
    });
};

export const fetchResultIsLoading = isLoading => dispatch => {
    dispatch({
        type: actionTypes.FETCH_RESULT_IS_LOADING,
        payload: isLoading,
    });
};

export const fetchResultSuccess = result => dispatch => {
    dispatch({
        type: actionTypes.FETCH_RESULT_SUCCESS,
        payload: result,
    });
};

export const fetchLastSavedResultSuccess = result => dispatch => {
    dispatch({
        type: actionTypes.FETCH_LAST_SAVED_RESULT_SUCCESS,
        payload: result,
    });
};

export const fetchResultFailure = error => dispatch => {
    dispatch({
        type: actionTypes.FETCH_RESULT_FAILURE,
        payload: error,
    });
};