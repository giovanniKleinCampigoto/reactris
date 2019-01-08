import React, { Component } from 'react';
import './App.css';
import { TetrisBox } from '../../components/Layout/TetrisBox/TetrisBox'
import { Header } from '../../components/Layout/Header/Header'
import { ScoreBox } from '../../components/Layout/ScoreBox/ScoreBox'
import NextPieceBox from '../../components/Layout/NextPieceBox/NextPieceBox'
import { L } from '../../components/Blocks/L'

class App extends Component {
  render() {
    return (
		<div className="App">
			<Header>Reactris</Header>			
			<section>
				<ScoreBox score="0"/>
				<NextPieceBox piece={<L/>}/>
				<TetrisBox/>
			</section>
		</div>
    );
  }
}

export default App;
