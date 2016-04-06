import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './tile';


class Board extends Component {
	constructor(props) {
		super(props);

		this.props = this;
	}
	renderTiles() {
		const puzzles = this.props.puzzle;
		const solveGame = this.props.solveGame;
		const answer = puzzles.solution;
		if(this.props.puzzle.activePuzzle){			
			return this.props.puzzle.activePuzzle.map(function(number, index) {
				return (
						<Tile solveGame={solveGame} key={index} index={index} val={number} solution={answer[index]} />
				);
			})
		}
		else {
			return <h1 className="openMsg">Click on the New Game button below to play!</h1>;
		}
	}
	render() {
		return (
			<div className="board">
					{this.renderTiles()}
			</div>
		);
	}
}	

function mapStateToProps(state) {
	return { puzzle: state.puzzle, solveGame: state.solveGame };
}

export default connect(mapStateToProps)(Board);