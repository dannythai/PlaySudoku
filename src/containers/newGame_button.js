import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makePuzzle } from '../actions/newGame_action';

class NewGameButton extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		// send API call to generate a new game and solution
		this.props.makePuzzle();
	}
	render() {
		return (
			<button type="button" onClick={this.handleClick}>
				New Puzzle
			</button>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ makePuzzle }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewGameButton);