import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { solvePuzzle } from '../actions/solveGame_action';

class SolvePuzzleButton extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		// send API call to generate a new game and solution
		this.props.solvePuzzle();
	}
	render() {
		return (
			<button className="btn btn-primary menu-btn"onClick={this.handleClick} type="button">Solution</button>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ solvePuzzle }, dispatch);
}

export default connect(null, mapDispatchToProps)(SolvePuzzleButton);