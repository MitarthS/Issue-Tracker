import React, { useEffect } from 'react';
import IssueForm from './IssueForm';
import IssueApi from '../IssueApi';
import {Prompt, withRouter} from 'react-router';
import axios from 'axios';
import {Container, Button} from 'react-bootstrap';
import * as Yup from 'yup';

class EditIssuePage extends React.Component {
    constructor(props) {
        super(props);
        this.editIssue = this.editIssue.bind(this);
    }
    

    editIssue(issue) {
        const idd = this.props.location.state.iss.id;
        axios.put("localhost:3001/issues/"+this.props.location.state.iss.id,issue);
        this.props.history.push('/issues');
    }

    render() {
        
        const desc = this.props.location.state.iss.description;
        const idd = this.props.location.state.iss.id;
        const sevr = this.props.location.state.iss.severity;
        const stat = this.props.location.state.iss.status;
        return (
                <IssueForm onSave={this.editIssue} 
                description={desc} 
                severity={sevr} 
                status={stat}/>
        );
        // if (isLoggedin){
        // return (
        //     <IssueForm onSave={this.saveIssue} />
        // );}
        // else {window.alert(`Please sign in to coninue`); 
        // return(
        //     <Redirect to="/issues"/>
        // ); }
    }
}
export default withRouter(EditIssuePage);