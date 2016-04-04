import { combineReducers } from 'redux';
import NewGameReducer from './reducer_newGame';
const rootReducer = combineReducers({
	puzzle: NewGameReducer
});

export default rootReducer;
