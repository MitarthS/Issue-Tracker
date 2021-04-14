import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class IssueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.authenticate(props);
  }

  authenticate(props) {
    const history = props.history;
    //let authenticated = window.confirm("Are you sure you want to view the details?");
    if (!window.confirm("Are you sure you want to view the details?")) {
      history.replace('/issues');
    }
  }
  componentDidMount(){
    
  }
  render() {
    const path = '/issues';
    return (
      <div>
        <h2 style={{ text: 'bold' }}>Issue Details</h2>
        &nbsp;<label>Issue Description:</label>&nbsp;&nbsp;&nbsp;
        <label>{this.props.match.params.description}</label><br /><br />
        <Link style={{ text: 'bold' }} to={path}>Back</Link>
      </div>
    );
  }
}

export default withRouter(IssueDetail);
