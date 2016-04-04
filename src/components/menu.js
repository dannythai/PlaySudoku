import React from 'react';
import NewGameButton from '../containers/newGame_button';
import SolveButton from '../containers/solve_button';


const MenuList = (props) => {

	return (
		<div className ="menu">
			Menu 
			<div className="btn-menu">
				<NewGameButton />
				<SolveButton />
			</div>
		</div>
	);
}

export default MenuList;