import React, { Component } from 'react';
/* import "./img/drapeau.png"; */

import './css/App.css';
import Sort from './Spell';
import { NavLink } from 'react-router-dom';
import toucheL from './img/toucheL.png';
import toucheS from './img/toucheS.png';
import Vide from './img/Vide.png';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: '',
			counter: 1,
			counterMinus1: 0,
			key: '',
			imageL: null,
			imageR: null,
			cardeffectL: Vide,
			cardeffectR: Vide,
			dammageeffect: null,
			r: null,
			pause: false
		};
	}

	//clavier !!
	handleKeyPress = event => {
		this.setState({ key: event.key });
		this.setState({ counterMinus1: this.state.counter });
		if (event.key === 's' || event.key === 'S') {
			this.setState({
				player: 'left',
				counter: this.state.counter + 1,
				cardeffectL: this.props.effectL
			});

			setTimeout(() => {
				this.setState({
					cardeffectL: Vide
				});
			}, 70);
		}

		if (event.key === 'l' || event.key === 'L') {
			this.setState({
				player: 'right',
				counter: this.state.counter + 1,
				cardeffectR: this.props.effectR
			});

			setTimeout(() => {
				this.setState({
					cardeffectR: Vide
				});
			}, 70);
		}
		if (event.key === 'Escape') {
			//alert('En pause ...');
			this.setState({ pause: !this.state.pause });
		}
	};

	changePause = () => {
		this.setState(() => ({
			pause: !this.state.pause
		}));
	};
	// fonction : lorsque tu presses n'importe quelle touche tu appelles la fonction du clavier
	componentDidMount = () => {
		this.setState({ r: Math.floor(Math.random() * 4) + 1 });
		document.addEventListener('keydown', this.handleKeyPress, false);
	};

	componentWillUnmount = () => {
		document.removeEventListener('keydown', this.handleKeyPress, false);
	};

	render() {
		return (
			<div className={'App' + this.state.r}>
				{/*Game*/}
				<div className="playerLeft">
					<div className={'drapeau' + this.props.schoolL}>
						<img src={this.props.imageL} />
					</div>
				</div>
				<div className="playerRight">
					<div className={'drapeau' + this.props.schoolR}>
						<img src={this.props.imageR} />
					</div>
				</div>
				<img className="toucheL" src={toucheL} />
				<img className="toucheS" src={toucheS} />
				<img src={this.state.cardeffectL} className="effectimageL" />
				<img src={this.state.cardeffectR} className="effectimageR" />
				<div className="sorts">
					<Sort
						pause={this.state.pause}
						changePause={this.changePause}
						schoolL={this.props.schoolL}
						schoolR={this.props.schoolR}
						keyboard={this.state.player}
						counterKey={this.state.counter}
						counterKeyMinusOne={this.state.counterMinus1}
						nameR={this.props.nameR}
						nameL={this.props.nameL}
						imageR={this.props.imageR}
						imageL={this.props.imageL}
					/>
				</div>
			</div>
		);
	}
}

export default Game;
