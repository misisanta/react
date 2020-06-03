import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style/App.css';

import General from './General';

function App() {
	return(
		<main className="App">
			<h1 className="title" >STRATEGO</h1>
			<nav>
				<Button variant="primary" size="lg" block className="Button" onClick={ () => NewGame() }>
					Start new game
				</Button>
				<Button variant="primary" size="lg" block className="Button" onClick={ () => JoinRoom() }>
					Join room
				</Button>
				<a href="http://www.ketaklub.hu/letoltes/Stratego%20Aoriginal%20Piatnik.pdf">
					<Button variant="primary" size="lg" block className="Button">Game rules</Button>
				</a>
			</nav>
		</main>
	)
};

export default App;

function NewGame() {
	ReactDOM.render(<React.StrictMode><General id1="other" id2="newGame" /></React.StrictMode>, document.getElementById('root'));
}
function JoinRoom() {
	ReactDOM.render(<React.StrictMode><General id1="joinRoom" id2="other" /></React.StrictMode>, document.getElementById('root'));
}