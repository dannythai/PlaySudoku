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
		this.props.makePuzzle();
	}
	
	render() {
		return (
			<button className="btn btn-primary menu-btn" type="button" onClick={this.handleClick}>
				New Puzzle
			</button>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ makePuzzle }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewGameButton);