import React from 'react';
import './../style/Shapes.css';

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isActivated: false};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		if(this.props.active === "A"){
			this.setState(prevState => ({
			isActivated: !prevState.isActivated
			}));
		}
	}
	render() {
		return(
			<svg width="100px" height="100px">
				<g>
					<rect height="100px" width="100px" y="0" x="0" id="square"
					stroke={this.state.isActivated?  "#7FFF00" : "#000000"} onClick={this.handleClick} />
				</g>
			</svg>
		);
	}
}

export default Square;

//#7FFF00 green
//#FF0000 red