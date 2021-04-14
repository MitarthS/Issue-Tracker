import React from 'react';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import IssueList from './IssueList';

describe('When no props is passed to Issue ', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<IssueList/>);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('When issues array is passed to IssueList', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        //srch = "";
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
        //val = "";
        wrapper = shallow(<IssueList {...props}/>);
    });

    it('renders correctly when passed the  props', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

describe('When issues empty array passed to IssueList', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            issues: []
        }
        wrapper = shallow(<IssueList {...props}/>);
    });

    it('should not crash', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
