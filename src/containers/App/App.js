import React, { Component } from 'react';
import './App.css';
import { TetrisBox } from '../../components/Layout/TetrisBox/TetrisBox'
import { Header } from '../../components/Layout/Header/Header'

class App extends Component {
  render() {
    return (
		<div className="App">
			<Header>Reactris</Header>			
			<section className="App-box-wrapper">
				<TetrisBox/>
			</section>
		</div>
    );
  }
}

export default App;
