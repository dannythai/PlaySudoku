
import sudoku_API from '../sudoku-api';

export const NEW_GAME = 'NEW_GAME';

export function makePuzzle() {
	var thePuzzle = new sudoku_API;
	thePuzzle._newGame();
	var maskedGame = thePuzzle.matrix;
	var solvedGame = thePuzzle.save;
	var newGame = {
		activePuzzle: maskedGame,
		solution: solvedGame,
	}

	console.log('payload:', newGame);
	return {
		type: NEW_GAME,
		payload: newGame
	}
}