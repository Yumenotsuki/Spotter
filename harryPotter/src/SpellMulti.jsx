import React, { Component } from 'react';
import HpMulti from './HealthDataMulti';
import './css/App.css';
import Gryffondor from './img/carte_Gryffondor.jpg';
import Serpentard from './img/carte_Serpentard.jpg';
import Serdaigle from './img/carte_Serdaigle.jpg';
import Poufsouffle from './img/carte_Poufsouffle.png';
import Detraqueur from './img/carte_detraqueur.jpg';
import Bieraubeurre from './img/carte_Bieraubeurre.jpg';
import Expelliarmus from './img/carte_Expelliarmus.png';
import ModalBattle from './ModalBattle';

const totalSortMulti = [
	{
		nomsort: 'Gryffondor',
		imagesort: <img src={Gryffondor} alt="Gryffondor" class="Gryffondor" />,
		dammage: -5,
	},
	{
		nomsort: 'Serpentard',
		imagesort: <img src={Serpentard} alt="Serpentard" class="Serpentard" />,
		dammage: -5,
	},
	{
		nomsort: 'Serdaigle',
		imagesort: <img src={Serdaigle} alt="Serdaigle" class="Serdaigle" />,
		dammage: -5,
	},
	{
		nomsort: 'Poufsouffle',
		imagesort: <img src={Poufsouffle} alt="Poufsouffle" class="Poufsouffle" />,
		dammage: -5,
	},
	{
		nomsort: 'Detraqueur',
		imagesort: <img src={Detraqueur} alt="Detraqueur" class="Detraqueur" />,
		dammage: -40,
	},
	{
		nomsort: 'Bieraubeurre',
		imagesort: <img src={Bieraubeurre} alt="Bieraubeurre" class="Bieraubeurre" />,
		dammage: +10,
	},
	{
		nomsort: 'Expelliarmus',
		imagesort: <img src={Expelliarmus} alt="Expelliarmus" class="Expelliarmus" />,
		dammage: -20,
	}
];

class SortMulti extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: '',
			clickState: false,
			time: 0,
			expo: 0.9,
			currentSort: '',
			randomInt: '',
			sorteffect: '',
			currentDammage: '',
			reDirect: false,
			counter: 2
		};
		this.coef = 1;
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	clockCard = () => {
		setTimeout(() => {
			this.setState({ randomInt: this.getRandomInt(totalSortMulti.length) }); // nb de cartes
			this.setState({
				clickState: !this.state.clickState
			});
			if (this.state.clickState === false) {
				this.setState({
					time: 250 * (Math.random() + 0.5) * this.coef,
					currentImage: ''
				});
			}
			if (this.state.clickState === true) {
				this.setState({
					time: 1250 * (Math.random() + 0.5) * this.coef,
					currentImage: totalSortMulti[this.state.randomInt].imagesort,
					currentSort: totalSortMulti[this.state.randomInt].nomsort,
					currentDammage: totalSortMulti[this.state.randomInt].dammage
				});
			}
			if (this.coef > 0.6) this.coef = this.coef * 0.95;

			return this.clockCard();
		}, this.state.time);
		/* this.setState({expo:this.state.expo-(this.state.expo/50)}) */
	};
	resetCard = () => {
		if (this.props.counterKeyMinusOne !== this.props.counterKey) {
			this.setState({ currentImage: '' });
		}
	};
	componentDidMount() {
		console.log('[App] Inside ComponentDidMount');
		this.myInterval = setInterval(() => {
			if (this.state.counter === 0) {
				clearInterval(this.myInterval);
				this.setState({
					counter: ''
				});
				this.clockCard();
				document.addEventListener('keydown', this.resetCard, false);
			} else {
				this.setState(prevState => ({
					counter: prevState.counter - 1
				}));
			}
		}, 1000);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.resetCard, false);
	}

	render() {
		return (
			<div class="cardBlock">
				<ModalBattle changePause={this.props.changePause} pause={this.props.pause} />
				<div className="counter">{this.state.counter}</div>
				<HpMulti
					dammage={this.state.currentDammage}
					schoolL={this.props.schoolL}
					schoolR={this.props.schoolR}
					schoolLB={this.props.schoolLB}
					schoolRB={this.props.schoolRB}
					currentImage={this.state.currentImage}
					currentSort={this.state.currentSort}
					keyboard={this.props.keyboard}
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
				{this.state.currentImage}
			</div>
		);
	}
}

export default SortMulti;
