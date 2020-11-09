import actionTypes from '../actions/actionTypes';

const defaultState = {
    error: null,
    isLoading: false,
    list: [],
};

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PLANETS_IS_LOADING:
            return { ...state, isLoading: action.payload };

        case actionTypes.FETCH_PLANETS_SUCCESS:
            return {
                ...state,
                error: null,
                list: action.payload.map(item => { item.value = item.name; return item; }),
                mapping: action.payload.reduce((obj, item) => (obj[item.name] = item, obj) ,{}),
                isLoading: false,
            };

        case actionTypes.FETCH_PLANETS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload ? action.payload.response.data : null,
            };

        default:
            return state;
    }
}