import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style/join.css';

import Home from './App';
import StartGame from './StartGame';

function General(props) {
	return(
		<main className="App2">
			<section>
				<article id={props.id1}>
					<h2 className="title">Enter room number: </h2>
					<input className="roomNumber" type="text"/>
				</article>
				<article id={props.id2}>
					<h2 className="title">Room number: </h2>
					<input className="roomNumber" type="text" value={"#" + Math.floor(Math.random() * Math.floor(10000))} readOnly />
					<Button variant="primary" id="copy">Copy</Button>
				</article>	
			</section>
			<section id="gameControll">
				<Button variant="primary" size="lg" block className="control" onClick={ () => startGame() }>Start game</Button>
				<Button variant="primary" size="lg" block className="control" onClick={ () => home() } >Cancel</Button>
			</section>
		</main>
	)
};
export default General;

function startGame() {
	ReactDOM.render(<React.StrictMode><StartGame /></React.StrictMode>, document.getElementById('root'));
}
function home() {
	ReactDOM.render(<React.StrictMode><Home /></React.StrictMode>, document.getElementById('root'));
}