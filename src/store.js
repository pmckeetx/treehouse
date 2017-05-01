import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/rootReducer';

import members from './data/members';
import defaultChores from './data/defaultChores';
// import defaultCurrentChoreChart from './data/defaultCurrentChoreChart';

const defaultState = {
	members,
	chores: defaultChores,
	charts: []
};

const store = createStore( rootReducer, defaultState );

export const history = syncHistoryWithStore( browserHistory, store );

export default store;
