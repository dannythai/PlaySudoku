import { UPDATE_BOARD } from '../actions/updateBoard_action';


export default function(state = {}, action) {
	switch(action.type) {
		case UPDATE_BOARD:
			console.log('my new state!: ', action.payload);
			if(state.puzzle) {
				console.log('Path 1');
				return Object.assign([], action.payload, state.puzzle.activePuzzle);
			} else {
				console.log('Path 2: ', state);
				return action.payload;
			}
		default:
			return state.currentBoard = [];
	}
}