import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from '../components/tile';


class Board extends Component {
	constructor(props) {
		super(props);

		this.props = this;
	}
	renderTiles() {
		console.log('Rendering tiles! ', this.props.puzzle.activePuzzle);

		const puzzles = this.props.puzzle;
		const solveGame = this.props.solveGame;
		console.log(solveGame);
		const answer = puzzles.solution;
		if(this.props.puzzle.activePuzzle){			
			return this.props.puzzle.activePuzzle.map(function(number, i) {
				return (
						<Tile solveGame={solveGame} key={i} val={number} solution={answer[i]} />
				);
			})
		}
		else {
			return <p>Click on the New Game button below to play!</p>;
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