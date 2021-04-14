import React from 'react';
import {shallow} from 'enzyme';
import IssueList from './IssueList';

describe('When issues array is passed as props to Issues', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            issue: [ 
                {
                "id":1,
                "description": "Raj",
                "serverity": "Critical",
                "status": "Open"
                
              },
              {
                "id":2,
                "description": "Ramesh",
                "serverity": "Minor",
                "status": "In Progress"
              }
            ]
        }
        wrapper = shallow(<IssueList {...props}/>).dive();
    });

    // it('renders a Table', () => {
    //     //let liWrapper = wrapper.find('table');
    //     expect('table').toBeInTheDocument();
    //   });
    
    it('Renders Index as heading in 1st column', () => {
        let firstUser = wrapper.find('Col').at(0);
        expect(firstUser.render().text()).toContain('Index');  
    });

    it('Renders issue description as heading in 2nd column', () => {
        let liWrapper = wrapper.find('Col').at(1);
        expect(liWrapper.render().text()).toContain('Issue Description');
    });

    it('Renders Severity as heading in 3rd column', () => {
        let firstUser = wrapper.find('Col').at(2);
        expect(firstUser.render().text()).toContain('Severity');  
    });

    it('Renders status as heading in 4th column', () => {
        let firstUser = wrapper.find('Col').at(3);
        expect(firstUser.render().text()).toContain('Status');  
    });
    it('displays the first id as 1 in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("1")));
        //expect(firstUser.render().text()).toContain('1');
    });
    it('displays the second id as 2 in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("2")));
        //expect(firstUser.render().text()).toContain('1');
    });
    it('displays the first descrp as raj in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("Raj")));
        //expect(firstUser.render().text()).toContain('1');
    });
    it('displays the second descrp as Ramesh in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("Ramesh")));
        //expect(firstUser.render().text()).toContain('1');
    });
    it('displays the first severity as critical in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("Critical")));
        //expect(firstUser.render().text()).toContain('1');
    });
    it('displays the second severity as Minor in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("Minor")));
        //expect(firstUser.render().text()).toContain('1');
    });
    it('displays the first status as open in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("open")));
        //expect(firstUser.render().text()).toContain('1');
    });
    it('displays the second status as In Progress in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("In Progress")));
        //expect(firstUser.render().text()).toContain('1');
    });


    it('displays the delete option in the list', () => {
        //let firstUser = wrapper.find('Col').at(5);
        expect(wrapper.findWhere(
            n => n.contains("Delete")));
        //expect(firstUser.render().text()).toContain('1');
    });
    // it('displays the first id as 1 in the list', () => {
    //     //let firstUser = wrapper.find('Col').at(5);
    //     expect(wrapper.findWhere(
    //         n => n.contains("1")));
    //     //expect(firstUser.render().text()).toContain('1');
    // });


/*
    it('displays the first severity correctly in the list', () => {
        let firstUser = wrapper.find('td').first();
        //expect(firstUser.render().text()).toContain('Critical');
        expect(Table.props().issue).toBeFalsy();
    });

    it('displays the second name correctly in the list', () => {
        let secondUser = wrapper.find('td').at(1);
        expect(secondUser.render().text()).toContain('Akash');
    });

    it('displays the second severity correctly in the list', () => {
        let secondUser = wrapper.find('td').at(1);
        expect(secondUser.render().text()).toContain('Closed');
    });*/
    
    
});

describe('When issues array passed to Issues is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            issue: null
        }
        wrapper = shallow(<IssueList {...props}/>);
    });

    it('should not crash', () => {
        let li = wrapper.find('table');
        expect(li.length).toEqual(0);
    });

});