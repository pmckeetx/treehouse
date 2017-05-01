import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as choresActions from '../actions/choresActions';
import * as chartsActions from '../actions/chartsActions';

import AdminHeader from '../components/AdminHeader';

const AdminContainer = (props) => {
	return (
		<div>      
			<AdminHeader {...props}/>
			<div className="container-fluid page-container">
				<div className="row">
					<div className="col-xs-12">
      			{React.cloneElement(props.children, props)}
      		</div>
      	</div>
      </div>
    </div>
	);
}

function mapStateToProps( state ) {
	return {
		members: state.members,
		chores: state.chores,
		charts: state.charts
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators({ ...chartsActions, ...choresActions}, dispatch );
}

const AdminContainerConnect = connect( mapStateToProps, mapDispatchToProps )( AdminContainer );

export default AdminContainerConnect;