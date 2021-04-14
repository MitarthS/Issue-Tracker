import React from 'react';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AllIssuePage from './AllIssuesPage';

describe('When no props is passed to AllIssuePage ', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<AllIssuePage/>);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('When issues array is passed to AllIssuePage', () => {
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
        wrapper = shallow(<AllIssuePage {...props}/>);
    });

    it('renders correctly when passed the  props', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

describe('When issues array passed to AllIssuePage is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            issues: null
        }
        wrapper = shallow(<AllIssuePage {...props}/>);
    });

    it('should not crash', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
