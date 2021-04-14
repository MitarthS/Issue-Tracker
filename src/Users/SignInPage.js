import React from 'react';
import {Button, Container} from 'react-bootstrap';
import * as Yup from 'yup';
import users from './users.json';
var isLoggedin = false;
export default class SignInPage extends React.Component{
    
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        //this.callSignOut = this.callSignOut.bind(this);
    }
    forceUpdateHandler(){
        this.forceUpdate();
    };
    // callSignOut(){
    //     isLoggedin = false;
    //     console.log(isLoggedin);
    // }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const mail = data.get('email');
        const pwd = data.get('password');
        const allUsers = JSON.parse(JSON.stringify(users.users));
        for (var c in allUsers){
            
            if (allUsers[c].email === mail && allUsers[c].password === pwd)
            {
                isLoggedin = true; 
                window.alert(`Succesful sign in for ${allUsers[c].fname}`); 
            }
            console.log(`for ${c}  ${allUsers[c].email}  ${allUsers[c].password}`);
            
        }
        if (!isLoggedin) window.alert(`Invalid credentials`);
        console.log(isLoggedin);
        this.forceUpdateHandler();
    }


        // if (users.some( n => n===email ) && users.some( n => n===pwd )) {
        //     console.log(`succesful sign in`);
        // }
    //     if (allUsers.includes(mail) && allUsers.includes(pwd)) {
    //         console.log(`succesful sign in`);
    //     }
    //     else window.alert(`Invalid credentials`);
    //   }
    render(){
        var status;
        if (isLoggedin) status = <div style={{ color: 'green' }}>Currently signed in</div>
        else status = <div style={{ color: 'red' }}>Not signed in</div>
        return (
            <Container fluid>
                <form onSubmit={this.handleSubmit}>
                    <h1>Enter Credentials</h1> &nbsp;
                    <div>
                        Enter email: &nbsp;
                        <input type="text" name="email" />
                    </div>
                    <br /><br />
                        Password: &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="password" name="password"/><br /><br />
                        <Button variant="outline-primary" size="lg" type="submit">Submit</Button>                    
                </form>
                <br /><br /><br /><br />
                <h2>Your current status is:&nbsp;{status}</h2>
                <br /><br />
                <Button onClick={() => {isLoggedin = false; this.forceUpdateHandler(); window.alert(`Succesfully signed out`);}}> Click here to Sign out! </Button>
            </Container>
        )
    }
}

export { isLoggedin };