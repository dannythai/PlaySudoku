export const UPDATE_BOARD = 'UPDATE_BOARD';

export function updateBoard(currBoard) {
	return {
		type: UPDATE_BOARD,
		payload: currBoard
	}
}