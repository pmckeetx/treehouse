import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as choresActions from '../actions/choresActions';

import Header from '../components/Header';

const App = (props) => {
	return (
		<div>
      <Header {...props}/>
      {React.cloneElement(props.children, props)}
    </div>
	);
}

function mapStateToProps( state ) {
	return {
		chores: state.chores
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( choresActions, dispatch );
}

const AppContainer = connect( mapStateToProps, mapDispatchToProps )( App );

export default AppContainer;