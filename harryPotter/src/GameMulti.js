import React, { Component } from 'react';
/* import "./img/drapeau.png"; */
import './css/App.css';
import SortMulti from './SpellMulti';
import { NavLink } from 'react-router-dom';
import toucheL from './img/toucheL.png';
import toucheS from './img/toucheS.png';
import toucheF from './img/toucheF.png';
import toucheJ from './img/toucheJ.png';


class GameMulti extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: '',
			counter: 1,
			counterMinus1: 0,
			key: '',
			imageL: null,
			imageR: null,
			imageLB: null,
			imageRB: null,
			dammageeffect: null,
			r: null,
			pause: false,

		};
	}
	changePause = () => {
		this.setState(() => ({
			pause: !this.state.pause
		}));
	};
	//clavier !!
	handleKeyPress = event => {
		this.setState({ key: event.key });
		this.setState({ counterMinus1: this.state.counter });
		if (event.key === 's' || event.key === 'S') {
			this.setState({
				player: 'left',
				counter: this.state.counter + 1,
			});
		}

		if (event.key === 'f' || event.key === 'F') {
			this.setState({
				counter: this.state.counter + 1,
			});

		}

		if (event.key === 'j' || event.key === 'J') {
			this.setState({
				counter: this.state.counter + 1,
			});
		}

		if (event.key === 'l' || event.key === 'L') {
			this.setState({
				player: 'right',
				counter: this.state.counter + 1,
			});

		}
		if (event.key === 'Escape') {
			//	alert('En pause ...');
			this.setState({ pause: !this.state.pause });
		}
	};

	// fonction : lorsque tu presses n'importe quelle touche tu appelles la fonction du clavier
	componentDidMount() {
		this.setState({ r: Math.floor(Math.random() * 3) + 1 });
		document.addEventListener('keydown', this.handleKeyPress, false);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress, false);
	}
	render() {
		return (
			<div className={'AppMulti' + this.state.r}>
				{/*Game*/}
				<div className="blocPlayerLeft">
					<div className="playerLeftTop">
						<div className="boutonImageLeft">
							<img src={this.props.imageL} />
							<img src={toucheS} />

						</div>
						<img src={this.state.cardeffectL} className="effectimageLM" />
						<div className={'drapeauMulti' + this.props.schoolL} />
					</div>
					<div className="playerLeftBottom">
						<div className="boutonImageLeft">
							<img src={this.props.imageLB} />
							<img src={toucheF} />

						</div>
						<img src={this.state.cardeffectLB} className="effectimageLBM" />
						<div className={'drapeauMulti' + this.props.schoolLB} />
					</div>
				</div>
				<div className="blocPlayerRight">
					<div className="playerRightTop">
						<div className={'drapeauMulti' + this.props.schoolR} />
						<div className="boutonImageRight">
							<img src={this.props.imageR} />
							<img src={toucheL} />

						</div>
						<img src={this.state.cardeffectR} className="effectimageRM" />
					</div>
					<div className="playerRightBottom">
						<div className={'drapeauMulti' + this.props.schoolRB} />
						<div className="boutonImageRight">
							<img src={this.props.imageRB} />
							<img src={toucheJ} />

						</div>
						<img src={this.state.cardeffectRB} className="effectimageRBM" />
					</div>
				</div>
				<div className="sortsMulti">
					<br />
					<br />
					<SortMulti
						pause={this.state.pause}
						changePause={this.changePause}
						schoolL={this.props.schoolL}
						schoolR={this.props.schoolR}
						schoolLB={this.props.schoolLB}
						schoolRB={this.props.schoolRB}
						keyboard={this.state.player}
						counterKey={this.state.counter}
						counterKeyMinusOne={this.state.counterMinus1}
						nameR={this.props.nameR}
						nameL={this.props.nameL}
						nameRB={this.props.nameRB}
						nameLB={this.props.nameLB}
						imageR={this.props.imageR}
						imageL={this.props.imageL}
						imageRB={this.props.imageRB}
						imageLB={this.props.imageLB}
						effectL={this.props.effectL}
						effectR={this.props.effectR}
						effectLB={this.props.effectLB}
						effectRB={this.props.effectRB}
					/>
				</div>
			</div>
		);
	}
}

export default GameMulti;
