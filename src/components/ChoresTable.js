import React, { Component } from 'react';

export default class ChoresTable extends Component {
	render() {
		console.log( this.props.chores );

		return (
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>Chore</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{this.props.chores.map( chore => {
						return (
							<tr key={chore.id}>
								<td>{chore.id}</td>
								<td>{chore.name}</td>
								<td>Active</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		)
	}	
}