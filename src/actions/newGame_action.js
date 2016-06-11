import sudoku_API from '../sudoku-api';

export const NEW_GAME = 'NEW_GAME';

export function makePuzzle() {
	var thePuzzle = new sudoku_API;

	// capture puzzle instance api for check val
	puzzleAPI = thePuzzle;

	thePuzzle._newGame();
	var maskedGame = thePuzzle.matrix;
	var solvedGame = thePuzzle.save;
	var newGame = {
		activePuzzle: maskedGame,
		solution: solvedGame,
	}

	return {
		type: NEW_GAME,
		payload: newGame
	}
}

export let puzzleAPI;
