import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { solvePuzzle } from '../actions/index';

class SolvePuzzleButton extends Component {
	render() {
		return (
			<button type="button">Solution</button>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ solvePuzzle }, dispatch);
}

export default SolvePuzzleButton;