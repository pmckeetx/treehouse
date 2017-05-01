import React from 'react';
import { Link } from 'react-router';

let AdminHeader = (props) => {
	const pathname = props.location.pathname;
	let active = 'chores';
	if( pathname.includes( 'charts' ) ) {
		active = 'charts';
	} else if( pathname.includes( 'members' ) ) {
		active = 'members';
	}

	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">Treehouse</a>
				</div>
				<ul className="nav navbar-nav">
					<li className={active === 'charts' ? 'active' : ''}><Link to="/admin/charts">Charts</Link></li>
					<li className={active === 'chores' ? 'active' : ''}><Link to="/admin/chores">Chores</Link></li>
					<li className={active === 'members' ? 'active' : ''}><Link to="/admin/members">Members</Link></li>
				</ul>
			</div>
		</nav>
	);
}

export default AdminHeader;