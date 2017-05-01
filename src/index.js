import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import AppContainer from './containers/AppContainer';
import AdminContainer from './containers/AdminContainer';
import CurrentChartContainer from './containers/CurrentChartContainer';

import ChartsContainer from './containers/ChartsContainer';
import ChoresContainer from './containers/ChoresContainer';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={AppContainer}>
				<IndexRoute component={CurrentChartContainer}></IndexRoute>
			</Route>
			<Route path="/admin" component={AdminContainer}>
				<IndexRoute component={ChartsContainer}></IndexRoute>
				<Route path="charts" component={ChartsContainer} />
				<Route path="chores" component={ChoresContainer} />
			</Route>
		</Router>
	</Provider>,
  document.getElementById('root')
);

// <Route path="course/:id" component={CourseOverviewContainer} />
