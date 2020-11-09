import actionTypes from '../store/actions/actionTypes';
import postReducer from '../store/reducers/index'

describe('test initial states of reducers', () => {

    let newState;
    beforeEach(() => {
        newState = postReducer(undefined, {});
    });

    it('Should return default state', () => {
        const initialSchemaOfSubState = {"error": null, "isLoading": false, "list": []};

        expect(newState.planets).toEqual(initialSchemaOfSubState);
        expect(newState.vehicles).toEqual(initialSchemaOfSubState);
        expect(newState.result).toEqual({"error": null, "isLoading": false, "result": {}});
        expect(newState.config.totalArmies).toBeDefined();
        expect(newState.config.token).toBeNull();
        expect(newState.config.tokenIsLoading).toBeFalsy();
        expect(newState.config.tokenError).toBeNull();
    });

    it('Should return new state if receiving type', ()=> {
        const planets = [
            { name: 'Donlon', distance: 100 },
            { name: 'Sapir', distance: 400 }
        ];
        const newState = postReducer(undefined, {
            type: actionTypes.FETCH_PLANETS_SUCCESS,
            payload: planets
        });
        expect(newState.planets.list).toEqual(planets);
    });

});