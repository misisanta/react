import React from 'react';
import enemy from './enemy.png';
import './../style/Shapes.css';

function Enemy(props) {
	return(
		<main id="enemy">
			<img src={enemy} alt="enemy" />
			<img src={enemy} alt="enemy" />
			<img src={enemy} alt="enemy" />
			<img src={enemy} alt="enemy" />
			<img src={enemy} alt="enemy" />
			<img src={enemy} alt="enemy" />
		</main>
	)
}

export default Enemy;
