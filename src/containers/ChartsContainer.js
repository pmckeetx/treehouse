import React, { Component } from 'react';

import ChartForm from '../components/ChartForm';

export default class ChartsContainer extends Component {

	constructor() {
		super();

		this.state = {
			currentView: 'list'
		};

		this.newChartClick = this.newChartClick.bind(this);

		this.onSaveNewChart = this.onSaveNewChart.bind(this);
		this.onCancelNewChart = this.onCancelNewChart.bind(this);

	}

	newChartClick() {
		this.setState({ currentView: 'create' });
	}

	onSaveNewChart( newChart ) {
		console.log( newChart );
	}

	onCancelNewChart( e ) {
		console.log( 'here' );
	}

	render() {
		let components = <div>No Charts</div>;

		const currentView = this.state.currentView;
		if( currentView === 'list' ) {
			components = (
				<div className="chart-list">
					<button className="btn btn-success" onClick={this.newChartClick}>New Chart</button>
				</div>
			);
		} else if( currentView === 'create' ) {
			components = (
				<div className="row chart-create-form">
					<div className="col-xs-6 col-xs-offset-3">
						<ChartForm 
							members={this.props.members}
							mode="create" 
							onSave={this.onSaveNewChart}
							onCancel={this.onCancelNewChart}
						/>
					</div>
				</div>
			);
		}

		return (
			<div>
				<h3 className="page-title">Charts</h3>
				{components}
			</div>
		);
	}

}