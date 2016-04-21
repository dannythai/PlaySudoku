import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBoard } from '../actions/updateBoard_action';

class Tile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onInputChange(value) {
		const myNum = Number(value);
		console.log('value added: ', myNum);
		console.log('solution: ', this.props.solution);
		this.props.activePuzzle[Number(this.props.index)] = myNum;
		this.props.updateBoard(this.props.activePuzzle);
		if(JSON.stringify(this.props.activePuzzle) === JSON.stringify(this.props.solutionArr)) {
			swal({   title: "Sweet!",   text: "MK35 > MK32 === true",   imageUrl: "../../assets/victorybaby.jpg" });
		}
	}

	render() {
		if (this.props.solveGame) {
		  return (<span className="tile">{this.props.solution}</span>);
		} else if (this.props.val === 0) {
			return (<span className="tile"><input onChange={event => this.onInputChange(event.target.value)} className="input-box" min="1" max="9" /></span>);
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

