import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './../style/App.css';

import Home from './../App';

function Game() {
	return(
		
		<Button variant="primary" size="lg" className="control" onClick={ () => home() }>Quit game</Button>
	)
}
export default Game;

function home() {
	ReactDOM.render(<React.StrictMode><Home /></React.StrictMode>, document.getElementById('root'));
}
