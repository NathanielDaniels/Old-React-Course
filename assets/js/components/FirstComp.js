import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Nate',
			health: 100,
			level: 1,
			lowLevelHealth: 'danger-red'
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
		this.state.health <= 25 ? console.log('Dead') : '';
	};

	render() {
		return (
			<div id={'parent'}>
				<Header />
				<div
					className={`blue-bg ${
						this.state.health < 50 ? this.state.lowLevelHealth : ''
					}`}
				>
					<div className={'user-info'}>
						<h3>Name: {this.state.name}</h3>
						<h3>Level: {this.state.level}</h3>
					</div>
					<ChiImage
						healthDrop={this.clickedChi}
						healthLive={this.state.health}
					/>
				</div>
			</div>
		);
	}
}

class ChiImage extends Component {
	constructor() {
		super();
		this.state = {
			gameOver: 'Sorry, You Died'
		};
	}

	render() {
		return (
			<div className="ChiImgComp">
				<img
					src="/img/chichi.png"
					alt={'Chihuahua'}
					onClick={this.props.healthDrop}
				/>
				<h3>
					Health:
					{this.props.healthLive <= 0
						? this.state.gameOver
						: this.props.healthLive}
				</h3>
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
