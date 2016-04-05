import { combineReducers } from 'redux';
import NewGameReducer from './reducer_newGame';
import solveGame from './reducer_solveGame';
const rootReducer = combineReducers({
	puzzle: NewGameReducer,
	solveGame: solveGame
});

export default rootReducer;
