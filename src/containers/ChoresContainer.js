import React from 'react';

import ChoresTable from '../components/ChoresTable';

const ChoresContainer = (props) => {
	return (
		<div>
			<h3 className="page-title">Chores</h3>
			<ChoresTable chores={props.chores} />
		</div>
	);
}

export default ChoresContainer;