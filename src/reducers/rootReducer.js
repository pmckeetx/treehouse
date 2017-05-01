import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import membersReducer from './membersReducer';
import choresReducer from './choresReducer';
import chartsReducer from './chartsReducer';

const rootReducer = combineReducers({ members: membersReducer, chores: choresReducer, charts: chartsReducer, routing: routerReducer });

export default rootReducer;
