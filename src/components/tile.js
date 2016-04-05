

import React from 'react';

const Tile = ({activePuzzle, solveGame, solution, val}) => {
	function 
  if (solveGame) {
  	console.log('tile is solved: ', solveGame);
    return <span className="tile">{solution}</span>
  } else if (val === 0) {
  	console.log('solveGame: ', solveGame);
  	console.log("val : ", val);
  	return <span className="tile"><input onChange={event => this.onInputChange(event.target.value)} className="input-box" min="1" max="9" /></span>;
  } else {
  	return <span className="tile">{val}</span>
  }
}


export default Tile;


