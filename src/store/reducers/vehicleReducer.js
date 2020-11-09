import actionTypes from '../actions/actionTypes';

const defaultState = {
    error: null,
    isLoading: false,
    list: [],
};

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.FETCH_VEHICLES_IS_LOADING:
            return { ...state, isLoading: action.payload };

        case actionTypes.FETCH_VEHICLES_SUCCESS:
            return {
                ...state,
                error: null,
                list: action.payload,
                isLoading: false,
            };

        case actionTypes.FETCH_VEHICLES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload ? action.payload.response.data : null,
            };

        default:
            return state;
    }
}