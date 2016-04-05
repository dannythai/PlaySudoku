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
		if(this.props.puzzle.activePuzzle){			
			return this.props.puzzle.activePuzzle.map(function(number, i) {
				return (
						<Tile active={puzzles.solveGame} key={i} val={number} solution={puzzles.solution[i]} />
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
	return { puzzle: state.puzzle };
}

export default connect(mapStateToProps)(Board);