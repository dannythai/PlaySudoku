export const SOLVE_GAME = 'SOLVE_GAME';

export function solvePuzzle() {

	return {
		type: SOLVE_GAME,
		payload: {solveGame: true}
	}
}