import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../utils';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import LoaderComponent from '../components/LoaderComponent';
import AutoCompleteComponent from '../components/AutoCompleteComponent';


// Tests for Header Component
describe('Header Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throwing warning', () => {
            const expectedProps = {
                title: 'Finding Falcon',
                button: {
                    title: 'Github',
                    link: 'https://www.github.com/guptahardik17'
                }
            };
            const propsError = checkProps(HeaderComponent, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Should Renders', () => {
        let component;
        beforeEach(()=> {
            const props = {
                title: 'Finding Falcon',
                button: {
                    title: 'Github',
                    link: 'https://www.github.com/guptahardik17'
                }
            };

            component = shallow(<HeaderComponent {...props}/>);
        });
    
        it('renders title', () => {
            const titleWrapper = findByTestAttr(component, 'Title');
    
            expect(titleWrapper.length).toBe(1);
            expect(titleWrapper.prop('level')).toBe(3);
        });
    
        it('renders button', () => {
            const buttonWrapper = findByTestAttr(component, 'Button');
            
            expect(buttonWrapper.length).toBe(1);
            expect(buttonWrapper.prop('type')).toBe('primary');
        });
    })
});

// Tests for Footer Component
describe('Footer Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throwing warning', () => {
            const expectedProps = {
                content: 'Developed by Hardik Gupta'
            };
            const propsError = checkProps(FooterComponent, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Should Renders', () => {
        let component;
        beforeEach(()=> {
            const props = {
                content: 'Developed by Hardik Gupta'
            };

            component = shallow(<FooterComponent {...props}/>);
        });
    
        it('renders content', () => {
            const footerWrapper = findByTestAttr(component, 'Footer');    
            expect(footerWrapper.length).toBe(1);
        });
    })
});

// Tests for Loader Component
describe('Loader Component', () => {
    let component;
    beforeEach(()=> {
        component = shallow(<LoaderComponent/>);
    });

    it("renders without crashing", () => {
        shallow(<LoaderComponent/>);
    });

    it('renders loader correctly', () => {
        const loaderWrapper = findByTestAttr(component, 'Spin');

        expect(loaderWrapper.length).toBe(1);
        expect(loaderWrapper.prop('size')).toEqual('large');
    });
});

// Tests for Autocomplete Component
describe('Autocomplete Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throwing warning', () => {
            const expectedProps = {
                data: [],
                onSelectPlanet: () => {},
                onDeselectPlanet: () => {},
                armyNumber: 1
            };
            const propsError = checkProps(AutoCompleteComponent, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Should Renders', () => {
        let component;
        beforeEach(()=> {
            const props = {
                data: [],
                onSelectPlanet: () => {},
                onDeselectPlanet: () => {},
                armyNumber: 1
            };

            component = shallow(<AutoCompleteComponent {...props}/>);
        });
    
        it('renders autocomplete dropdown', () => {
            expect(component.length).toBe(1);
        });
    })
});