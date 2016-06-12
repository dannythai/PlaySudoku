import React from 'react';
import NewGameButton from '../containers/newGame_button';
import SolveButton from '../containers/solve_button';

const MenuList = (props) => {
	return (
		<div className ="menu">
			<div className="container-menu">
				<NewGameButton />
				<SolveButton />
			</div>
		</div>
	);
}

export default MenuList;
