import { UPDATE_BOARD } from '../actions/updateBoard_action';


export default function(state = {}, action) {
	switch(action.type) {
		case UPDATE_BOARD:
			if(state.puzzle) {
				return Object.assign([], action.payload, state.currentBoard, state.puzzle.activePuzzle);
			} else {
				return action.payload;
			}
		default:
			return state.currentBoard = [];
	}
}