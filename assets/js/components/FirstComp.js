import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Nate',
			health: 100,
			level: 1,
			lowLevelClass: 'danger-red'
		};
	}
	clickedBtn = () => {};

	clickedChi() {
		console.log('clicked the Chichi');
	}

	render() {
		return (
			<div id={'parent'}>
				<div
					className={`blue-bg ${
						this.state.health < 55 ? this.state.lowLevelClass : ''
					}`}
				>
					<h3>Name: {this.state.name}</h3>
					<h3>health: {this.state.health}</h3>
					<h3>level: {this.state.level}</h3>
					<img
						src="/assets/img/chichi.png"
						alt={'Chihuahua'}
						data-dog={'Chi'}
						onClick={this.clickedChi()}
					/>
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
