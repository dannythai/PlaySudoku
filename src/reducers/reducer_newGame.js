import { NEW_GAME } from '../actions/newGame_action';

export default function(state = {}, action) {
	console.log('Action received', action);
	switch(action.type) {
		case NEW_GAME:
			console.log("This is the new state ", {...state, ...action.payload});
			return {...state, ...action.payload}
		default:
			console.log('New game not found...returning prev state');
			return state;
	}
}