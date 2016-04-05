import { NEW_GAME } from '../actions/newGame_action';

export default function(state = {}, action) {
	console.log('Action received', action);
	switch(action.type) {
		case NEW_GAME:
			return {...state, ...action.payload}
		default:
			return state;
	}
}