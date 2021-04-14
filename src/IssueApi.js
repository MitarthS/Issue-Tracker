
import axios from 'axios';
import { uuid } from 'uuidv4';
import issues from './issues.json';
import _ from 'lodash';
import { isLoggedin } from './Users/SignInPage';
let currentID;
var idx = 3;
const _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};
export default class IssueApi {
    static getAllIssues(cb) {
        return _clone(axios.get("http://localhost:3001/issues")
        .then(response => cb(response.data)).catch(error => { throw error }));
        //return _clone(issues.issues);
    }

    static saveIssue(issue, cb) {
        var n = JSON.parse(JSON.stringify(issues.issues)).length;
        currentID = n+1;
        console.log(`*************${JSON.parse(JSON.stringify(issues.issues))[n-1].id}`);
        console.log("currentId=  " + issue.id)
        issue.id = currentID+1;
        console.log("currentId=  " + issue.id)
        n++;
        return _clone(axios.post("http://localhost:3001/issues", issue)
            .then(response => cb()).catch(error => { throw error }));
        // issues.issues.push(issue);
        //return _clone(issue);
    }

    // static updateIssue(idd, issue){
    //     return _clone(axios.put("localhost:3001/issues/"+idd,issue));
    // }

    static deleteIssue(id,cb) {
		console.log(`Entered IssueApi for deleteIssue`);
        return _clone(axios.delete("http://localhost:3001/issues/"+id)
        .then(response => cb()).catch(error => { throw error }));
        // _.remove(issues.issues, { id: id});        
	}
}









