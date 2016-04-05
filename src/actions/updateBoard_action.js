export const UPDATE_BOARD = 'UPDATE_BOARD';

export function updateBoard(currBoard) {
	// console.log('Action received. Here is your currBoard: ', currBoard);
	return {
		type: UPDATE_BOARD,
		payload: currBoard
	}
}