import { combineReducers } from 'redux';
import NewGameReducer from './reducer_newGame';
import solveGame from './reducer_solveGame';
import updateBoard from './reducer_updateBoard';

const rootReducer = combineReducers({
	puzzle: NewGameReducer,
	solveGame: solveGame,
	currentBoard: updateBoard
});

export default rootReducer;
