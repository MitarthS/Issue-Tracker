import React from 'react';
import {shallow} from 'enzyme';
import Issue from './Issue';

describe('When no props is passed to Issue ', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<Issue/>);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('When issues array is passed to Issue', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            issues: [
                {
                    "id":1,
                    "description": "Raj",
                    "serverity": "Critical",
                    "status": "Open"                    
                },
                {
                    "id":2,
                    "description": "Ramesh",
                    "serverity": "Critical",
                    "status": "Open"
                }
            ]
        }
        wrapper = shallow(<Issue {...props}/>);
    });

    it('renders correctly when passed the  props', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

describe('When issues array passed to Issue is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            issues: null
        }
        wrapper = shallow(<Issue {...props}/>);
    });

    it('should not crash', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
