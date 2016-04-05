import { SOLVE_GAME } from '../actions/solveGame_action';
import { NEW_GAME } from '../actions/newGame_action';

export default function(state = false, action) {
	switch(action.type) {
		case NEW_GAME:
			return false;
		case SOLVE_GAME:
			console.log("Solving game!");
			return Object.assign({}, action.payload);
		default:
			return state;
	}
}