import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBoard } from '../actions/updateBoard_action';
import { puzzleAPI } from '../actions/newGame_action';

class Tile extends Component {
	constructor(props) {
		super(props);
		this.state = {valid: true};
	}

	validateChange(row, col, val) {
		var breaksRules = false;
		if(val !== 0 && !puzzleAPI._checkVal(this.props.activePuzzle, row, col, val)) {
			this.setState({valid: false});
		} else {
			this.setState({valid: true})
		}
	}

	onInputChange(value) {
		const userInput = Number(value);
		// console.log('solution: ', this.props.solution);

		// validate user input against sudoku rules
		var row = Math.floor(this.props.index/9);
		var col = Math.floor(this.props.index % 9);
		this.validateChange(row, col, userInput);

		this.props.activePuzzle[Number(this.props.index)] = userInput;
		this.props.updateBoard(this.props.activePuzzle);
		if(JSON.stringify(this.props.activePuzzle) === JSON.stringify(this.props.solutionArr)) {
			swal({   title: "Sweet!",   text: "Puzzle Complete!",   imageUrl: "../../assets/victorybaby.jpg" });
		}
	}

	render() {
		if (this.props.solveGame) {
		  return (<span className="tile">{this.props.solution}</span>);
		} else if (this.props.val === 0) {
			return (<span className={this.state.valid ? "tile" : "tile-invalid"}><input onChange={event => this.onInputChange(event.target.value)} className="input-box" min="1" max="9" /></span>);
		} else {
			return (<span className="tile">{this.props.val}</span>);
		}
	}
}

function mapStateToProps(state) {
	return {currentBoard: state.currentBoard, activePuzzle: state.puzzle.activePuzzle, solutionArr: state.puzzle.solution};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ updateBoard }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Tile);

