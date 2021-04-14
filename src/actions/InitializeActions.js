import Dispatcher from '../dispatcher/Dispatcher';
import IssueApi from '../IssueApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class InitializeActions {
	static initIssues() {
		//const data = IssueApi.getAllIssues();
		IssueApi.getAllIssues(data =>
			Dispatcher.dispatch({
				actionType: ActionTypes.INITIALIZE,
				issues: data
			}));

			

			// Dispatcher.dispatch({
			// 	actionType: ActionTypes.INITIALIZE,
			// 	issues: data
			// });

	}
}
