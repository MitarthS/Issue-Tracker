import React from 'react';
import { withFormik, Form, Field } from 'formik';
import {Button, Container} from 'react-bootstrap';
import * as Yup from 'yup';
import users from './users.json';
const pdd = { 
    paddingLeft : '50px',
    marginLeft : '50px'

};
const SignUp = ({ errors, touched }) => (
    <Container fluid>
    <Form>
        
    
        <h1>Sign up here!</h1>
                First Name:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <Field type="text" name="fname" style={pdd}/>
            {errors.fname && touched.fname ? (
             <div style={{ color: 'red' }}>{errors.fname}</div>
           ) : null}
        <br /><br />
                Last Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  
            <Field type="text" name="lname" style={pdd}/>
        <br /><br /> 
                Email (username): &nbsp;
            <Field type="text" name="email" style={pdd}/>
            {errors.email && touched.email ? (
             <div style={{ color: 'red' }}>{errors.email}</div>
           ) : null}
        <br /><br /> 
                Password: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;
            <Field type="password" name="password" style={pdd}/>
            {errors.password && touched.password ? (
             <div style={{ color: 'red' }}>{errors.password}</div>
           ) : null}
        <br/><br/> 
        <Button variant="info" size="lg" type="submit">Submit</Button>
        
    </Form>
    </Container>
)

const FormikIssueForm = withFormik({
    mapPropsToValues({ fname, lname, email, password }) {
        console.log(`Entered mapPropsToValues for ${fname}`);
        return {
            fname: fname || '',
            lname: lname || '',
            email: email || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        fname: Yup.string().required('First Name is mandatory').min(2, 'Too Short!'),
        email: Yup.string().required('email is mandatory').email('Invalid email'),
        password: Yup.string().required('Password is mandatory')
        
    }),
    handleSubmit(values, { setSubmitting, props }) {
        var newUser = {};
        console.log(`inside handleSubmit for ${values.fname}`);
        newUser.fname = values.fname;
        console.log(`inside handleSubmit for ${newUser.fname}`);
        newUser.lname = values.lname;
        newUser.email = values.email;
        newUser.password = values.password;
        users.users.push(newUser);
        window.alert(`New user ${values.fname} created ^_^`);
    }
})(SignUp)

export default FormikIssueForm