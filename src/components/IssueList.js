import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import IssueActions from '../actions/IssueActions';
import Issue from './Issue';
export default class IssueList extends React.Component {
    // static defaultProps = { // <-- DEFAULT PROPS
    //     issues: []       // undefined gets converted to array,render won't trigger error
    // }
    constructor(){
        super();
        this.deleteIssue = this.deleteIssue.bind(this);
        this.state = {
            srch : "",
            c : 1
        };
    }
    deleteIssue(id) {
        console.log('Deleting Issue from IssueList for id .... ' + id);
        IssueActions.deleteIssue(id);
        // this.setState((prevState) => ({
        //     c: prevState.c + 1 
        // }));

    }


    // KeyPress(event){
    //     this.setState(srch = event.target.value;);
    //     console.log(`This is ${srch}`);
    // }
  

    render() {
        let issueNodes = this.props.issues.filter( (val) => {
            console.log(this.state.srch);
            if (this.state.srch === "") return val;
            else if (val.description.toLowerCase().includes( this.state.srch.toLowerCase() )) return val;
            else return null;
        } ).map(issue =>
            <Issue key = {issue.id} id = {issue.id} description={issue.description} severity={issue.severity} status={issue.status} onDelete={this.deleteIssue}>
            </Issue>
        );
        const header = {
            fontSize: '25px',
            color: 'black',
            fontWeight:'bold'
        }
        const sty = {
            width : '35%',
            marginLeft : '147px'
        }

        return (

            <Container>
                <Row>
                    <Col style={header}>Index</Col>
                    <Col xs={5} style={header}>Issue Description</Col>
                    <Col style={header}>Severity</Col>
                    <Col style={header}>Status</Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row><input type="text" onChange={(e) => this.setState({srch : e.target.value})  } placeholder='Search...' style={sty}></input></Row>
                    {issueNodes}
            </Container>

        );
    }
}