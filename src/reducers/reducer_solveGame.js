import { SOLVE_GAME } from '../actions/solveGame_action';

export default function(state = {}, action) {
	console.log('Action received', action);
	switch(action.type) {
		case SOLVE_GAME:
			return Object.assign({}, state, action.payload);
	}
	return state;
}