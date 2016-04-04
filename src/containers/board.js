import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from '../components/tile';


class Board extends Component {
	renderTiles(number) {
		return (
			<div>
				<Tile numValue={number} />
			</div>
		);
	}
	render() {
		return (
			<div className="board">
					My Board
					{this.props.puzzle.activePuzzle.map(this.renderTiles)}
					<Tile />
			</div>
		);
	}
}	

function mapStateToProps({puzzle}) {
	return { puzzle };
}

export default connect(mapStateToProps)(Board);