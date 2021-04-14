import Dispatcher from '../dispatcher/Dispatcher';
import IssueApi from '../IssueApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class IssueActions {
    static addIssue(issue) {
        console.log("Dispatching Add Issue ...");
        IssueApi.saveIssue(issue, () =>
            Dispatcher.dispatch({
                actionType: ActionTypes.ADD_ISSUE,
                issue: issue
            })
        )
    }

    static deleteIssue(id) {
        IssueApi.deleteIssue(id, () =>
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_ISSUE,
                id: id
            })
        )
        // IssueApi.deleteIssue(id);
        // Dispatcher.dispatch({
        //     actionType: ActionTypes.DELETE_ISSUE,
        //     id: id
        // });
        console.log("Dispatched delete Issue from IssueActions...");
    }

}
