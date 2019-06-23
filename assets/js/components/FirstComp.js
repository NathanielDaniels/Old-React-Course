import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Nate',
			health: 55,
			level: 1,
			test: 'this is a test'
		};
	}
	clickedBtn = () => {};

	async test() {}

	render() {
		return (
			<div id={'parent'}>
				<div className={`blue-bg`}>
					<h3>Name: {this.state.name}</h3>
					<h3>health: {this.state.health}</h3>
					<h3>level: {this.state.level}</h3>
				</div>
			</div>
		);
	}
}

var Header = function() {
	return (
		<header>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</header>
	);
};

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
