import { testStore } from '../utils';
import { fetchPlanets, fetchVehicles, generateToken, findFalcon } from '../apis/api-caller/index';

describe('fetch api action', () => {

    let store;
    beforeEach(() => {
        store = testStore();
    });

    // Test for fetchPlanets API
    it('Store is updated correctly with fetchPlanets api data', () => {
        return store.dispatch(fetchPlanets())
            .then(() => {
                const newState = store.getState();

                expect(newState.planets.list[0]).toHaveProperty('name');
                expect(newState.planets.list[0]).toHaveProperty('distance');
            })
    });

    it('Store is updated correctly with fetchVehicles api data', () => {
        return store.dispatch(fetchVehicles())
            .then(() => {
                const newState = store.getState();

                expect(newState.vehicles.list[0]).toHaveProperty('name');
                expect(newState.vehicles.list[0]).toHaveProperty('total_no');
                expect(newState.vehicles.list[0]).toHaveProperty('max_distance');
                expect(newState.vehicles.list[0]).toHaveProperty('speed');
            })
    });

    it('Store is updated correctly with generateToken api data', () => {
        return store.dispatch(generateToken())
            .then(() => {
                const newState = store.getState();

                expect(newState.config.token.length).toBeGreaterThan(0);
            })
    });

    it('Store is updated correctly with findFalcon api data', async () => {

        await store.dispatch(generateToken());

        const data = {
            planet_names: ["Donlon", "Enchai", "Pingasor", "Sapir"],
            vehicle_names: ["Space pod", "Space rocket", "Space rocket", "Space rocket"]
        }

        return store.dispatch(findFalcon(data))
            .then(() => {
                const newState = store.getState();

                expect(newState.result.result).toHaveProperty('status');

                if (newState.result.result.status == true) {
                    expect(newState.result.result).toHaveProperty('planet_name');
                }
            })
    });

});