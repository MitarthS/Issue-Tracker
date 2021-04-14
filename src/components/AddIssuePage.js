import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import IssueForm from './IssueForm';
import { isLoggedin } from '../Users/SignInPage';
import IssueActions from '../actions/IssueActions';


class AddIssuePage extends React.Component {
    constructor(props) {
        super(props);
        this.saveIssue = this.saveIssue.bind(this);
    }

    saveIssue(issue) {
        // F2:
        IssueActions.addIssue(issue);
        this.props.history.push('/issues');
    }

    render() {

        return (
                <IssueForm onSave={this.saveIssue}/>
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
export default withRouter(AddIssuePage);
