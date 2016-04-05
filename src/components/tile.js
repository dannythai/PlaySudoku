// import React, { Component } from 'react';

// class TileItem extends Component {
// 	constructor(props){
// 		super(props);

// 		this.state = {};
// 		this.onInputChange = this.onInputChange.bind(this);
// 		console.log('props: ', props);
// 	}
// 	onInputChange(num) {
// 		this.setState({currentValue: num})
// 		console.log('change: ', num);
// 	}
// 	filterEmptyTiles(val){
// 		if(val === 0) {
// 			return <input onChange={event => this.onInputChange(event.target.value)} className="input-box" type="number" min="1" max="9" />;
// 		} else {
// 			return val;
// 		}
// 	}
// 	render() {
// 		return (
// 			<span className="tile">
// 				{this.filterEmptyTiles(this.props.val)}
// 			</span>
// 		);
// 	}
// }

// export default TileItem;


import React from 'react';

const Tile = ({solvedGame, solution, val}) => {
  if (solvedGame) {
  	console.log('tile is solved: ', solvedGame);
    return <span className="tile">{solution}</span>
  } else if (val === 0) {
  	return <span className="tile"><input onChange={event => this.onInputChange(event.target.value)} className="input-box" type="number" min="1" max="9" /></span>;
  } else {
  	return <span className="tile">{val}</span>
  }
}


export default Tile;