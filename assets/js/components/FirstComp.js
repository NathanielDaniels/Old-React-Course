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

	clickedChi = () => {
		this.setState(
			{
				health: this.state.health - 25
			},
			() => {
				console.log('Health is now ' + this.state.health);
			}
		);
		this.state.health > 0 ? console.log('Alive') : console.log('Dead');
		// console.log('clicked the Chichi');
	};

	render() {
		return (
			<div id={'parent'}>
				<Header />
				<div
					className={`blue-bg ${
						this.state.health < 55 ? this.state.lowLevelClass : ''
					}`}
				>
					<div className={'user-info'}>
						<h3>Name: {this.state.name}</h3>
						<h3>Level: {this.state.level}</h3>
					</div>
					<ChiImage health={this.clickedChi} />
				</div>
			</div>
		);
	}
}

class ChiImage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="ChiImgComp">
				<img
					src="/img/chichi.png"
					alt={'Chihuahua'}
					onClick={this.props.health}
				/>
				<h3>Health: {this.state.health}</h3>
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
