import React, { useEffect } from 'react';
import { withFormik, Form, Field, setFieldValue, Formik } from 'formik';
import {Prompt} from 'react-router';
import {Container, Button} from 'react-bootstrap';
import * as Yup from 'yup';
var flag = false;

const IssueForm = ({ errors, touched, editIssue }) => (
    <Container fluid>
    <Form>
    <Prompt when={!flag} message='Are you sure you want to leave?'/>
        <h1>Add Issue</h1>
                Description:&nbsp;
        <div>
            <Field type="text" name="description" onClick={()=> {flag=false; }}/>
            {touched.description && errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
        </div>
        <br /><br />
                Severity: &nbsp;
        <Field name="severity" as="select" onClick={()=> {flag=false; }}>
            <option value="minor">Minor</option>
            <option value="critical">Critical</option>
            <option value="major">Major</option>
        </Field>
        <br /><br />Status: &nbsp;
        <Field type="radio" name="status" value="open" />&nbsp;
        <label for="open">Open</label>&nbsp;&nbsp;
        <Field type="radio" name="status" value="In progress" />&nbsp;
        <label for="inprogress">In Progress</label>&nbsp;&nbsp;
        <Field type="radio" name="status" value="closed" />&nbsp;
        <label for="closed">Closed</label>&nbsp;&nbsp;<br /><br />
        <Button variant="outline-primary" size="lg" type="submit" onClick={()=> {flag=true; }}>Submit</Button>
    </Form>
    </Container>
)

const FormikIssueForm = withFormik({
    mapPropsToValues({ description, severity, status }) {
        
        return {
            description: description || '',
            severity: severity || 'minor',
            status: status || 'open'
        }
        
    },
    validationSchema: Yup.object().shape({
        description: Yup.string().required('Issue Description is required')
    }),
    handleSubmit(values, { setSubmitting, props }) {
        var issue = {};
        issue.description = values.descrioption;
        issue.severity = values.severity;
        issue.status = values.status;
        props.onSave(issue);
    },
    
})(IssueForm)

export default FormikIssueForm