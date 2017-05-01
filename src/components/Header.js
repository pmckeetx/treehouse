import React from 'react';
import { Link } from 'react-router';

let Header = () => {
	return (
		<div className="row">
			<div className="col-xs-10">
				<h1>Treehouse</h1>
			</div>
			<div className="col-xs-2">
				<Link to="/admin">Admin</Link>
			</div>
		</div>
	);
}

export default Header;