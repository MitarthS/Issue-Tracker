import React from 'react';
import { Route, Link , Redirect} from 'react-router-dom'
import IssueForm from './IssueForm';
import {Row, Col} from 'react-bootstrap';
import { isLoggedin } from '../Users/SignInPage';
import issues from '../issues';
import IssueActions from '../actions/IssueActions';
export default class Issue extends React.Component {
    constructor(props){
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        
    }
    onEdit(event){
        event.preventDefault();
        //if (isLoggedin)
            var blah = {
                id : this.props.id,
                description : this.props.description,
                severity : this.props.severity,
                status : this.props.status
            }
            //console.log(`${blah.description}`);
            //this.props.onDelete(this.props.id);
            
            //this.props.history.push({pathname : `/editIssue/${this.props.id}`,state : {blah}});
            this.props.history.push(`/editIssue/${this.props.id}`);
    
        //else window.alert(`You must be signed in to edit comments`);
    }
    
    onDelete(event) {
        event.preventDefault();
        console.log(`Entered onDelete inside Issue.js`);
        //if (isLoggedin) 
        this.props.onDelete(this.props.id);
        
        //else window.alert(`You must be signed in to delete comments`);

        //<Col><a href="about:blank" onClick={this.onEdit}>Edit</a></Col>
    }

    render() {
        const path = `/issuedetail/${this.props.description}`;
        const editPath = `/editIssue/${this.props.id}`;
        return (
            <Row>
                <Col>{this.props.id}</Col>
                <Col xs={5}><Link to={path}>{this.props.description}</Link></Col>
                <Col>{this.props.severity}</Col>
                <Col>{this.props.status}</Col>
                <Col><a href="about:blank" onClick={this.onDelete}>Delete</a></Col>
                <Col><Link to={{pathname : `/editIssue/${this.props.id}`,state : {iss : this.props}}}>Edit</Link></Col>
            </Row>
        );
        
    }
}