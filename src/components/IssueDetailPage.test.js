import React from 'react';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import IssueDetailPage from './IssueDetailPage';

describe('When no props is passed to Issue ', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<IssueDetailPage/>);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('When issues array is passed to IssueDetailPage', () => {
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
                }
            ]
        }
        wrapper = shallow(<IssueDetailPage {...props}/>);
    });

    it('renders correctly when passed the  props', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

describe('When issues array passed to IssueDetailPage is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            issues: null
        }
        wrapper = shallow(<IssueDetailPage {...props}/>);
    });

    it('should not crash', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
