import actionTypes from '../actions/actionTypes';

const defaultState = {
    error: null,
    isLoading: false,
    result: {},
};

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.FETCH_RESULT_IS_LOADING:
            return { ...state, isLoading: action.payload };

        case actionTypes.FETCH_RESULT_SUCCESS:
            localStorage.setItem('result', JSON.stringify({
                error: null,
                result: action.payload,
                isLoading: false,
            }));
            return {
                ...state,
                error: null,
                result: action.payload,
                isLoading: false,
            };
        
        case actionTypes.FETCH_LAST_SAVED_RESULT_SUCCESS:
            return {
                ...state,
                error: action.payload.error,
                result: action.payload.result,
                isLoading: action.payload.isLoading,
            };

        case actionTypes.FETCH_RESULT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload ? action.payload.response.data : null,
            };

        default:
            return state;
    }
}