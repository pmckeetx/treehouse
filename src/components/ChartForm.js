import React, { Component } from 'react';

export default class ChartForm extends Component {
	constructor() {
		super();
		this.state = {};
	}

	onSaveClick(e) {
		e.preventDefault();
		
		const newChart = {
			name: this.state.name,
			owner: this.state.memberId,
			status: this.state.status
		}
		this.props.onSave( newChart );
	}

	onCancelClick(e) {
		e.preventDefault();
		this.props.onCancel({});
	}

	handleChange( e ) {
		let newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
  }

	render() {
		const { members, chores } = this.props;

		return (
			<form>
			  <div className="form-group">
			    <label htmlFor="exampleInputEmail1">Chart Name</label>
			    <input  type="text" className="form-control" placeholder="Chart Name" name="name" value={this.name} onChange={(e) => this.handleChange(e)} />
			  </div>
			  <div className="form-group">
			  	<select className="form-control" name="memberId" onChange={e => this.handleChange(e)}>
			  		<option key="0" value="0"></option>
			  		{members.map( m => {
			  			return <option key={m.id} value={m.id}>{m.name}</option>;
			  		})}
			  	</select>
			  </div>
			  <div className="checkbox">
			    <label>
			      <input type="checkbox" name="status" checked={this.status} onChange={e => this.handleChange(e)} /> Active
			    </label>
			  </div>
			  <button onClick={(e) => this.onSaveClick(e)} className="btn btn-default">Submit</button>
			  <button onClick={(e) => this.onCancelClick(e)} className="btn btn-default">Cancel</button>
			</form>
		);
	}
}
