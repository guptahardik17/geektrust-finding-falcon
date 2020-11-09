import actionTypes from '../actions/actionTypes';

const defaultState = {
    totalArmies: [...Array(4).keys()],
    token: null,
    tokenError: null,
    tokenIsLoading: false
};

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TOKEN_IS_LOADING:
            return { ...state, tokenIsLoading: action.payload };

        case actionTypes.FETCH_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                tokenError: null,
                tokenIsLoading: false,
            };

        case actionTypes.FETCH_VEHICLES_ERROR:
            return {
                ...state,
                tokenError: action.payload ? action.payload.response.data : null,
                tokenIsLoading: false,
            };

        default:
            return state;
    }
}