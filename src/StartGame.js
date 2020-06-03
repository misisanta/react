import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style/game.css';

import Home from './App';
import Game from './game/Game';


class startGame extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return(
			<main className="App">
				<section>
					<h1 className="title">Place your players onto the board!</h1>
				</section>
				<section id="startGameControll">
					<Button variant="primary" size="lg" className="control" onClick={ () => game() }>Play</Button>
					<Button variant="primary" size="lg" className="control" onClick={ () => home() }>Cancel</Button>
				</section>
				<section>
					<h2 className="title">Waiting for opponent...</h2>
				</section>
			</main>
		);
	}
}

export default startGame;

function game() {
	ReactDOM.render(<React.StrictMode><Game /></React.StrictMode>, document.getElementById('root'));
}

function home() {
	ReactDOM.render(<React.StrictMode><Home /></React.StrictMode>, document.getElementById('root'));
}

