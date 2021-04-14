import Dispatcher from '../dispatcher/Dispatcher';
import * as ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';
import _ from 'lodash';


let _issues = [];

class IssueStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on('change', cb);
  }

  removeChangeListener(cb) {
    this.removeListener('change', cb);
  }

  emitChange() {
    this.emit('change');
  }

  getAllIssues() {
    return _issues;
  }
}

let IssueStore = new IssueStoreClass();
export default IssueStore;

Dispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _issues = action.issues;
      IssueStore.emitChange();
      break;
    case ActionTypes.ADD_ISSUE:
      _issues.push(action.issue);
      IssueStore.emitChange();
      break;
    case ActionTypes.DELETE_ISSUE:
      _.remove(_issues, issue => (action.id === issue.id));
      console.log(`Entered IssueStore`);
      IssueStore.emitChange();
      break;
        
    default:
  }
});
