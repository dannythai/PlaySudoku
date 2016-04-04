import React, { Component } from 'react';
import sudoku from '../sudoku-api'
import Menu from './menu';
import Board from '../containers/board';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Board />
      	<Menu />
      </div>
    );
  }
}
