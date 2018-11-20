import React, { Component } from 'react';
import Hp from './HealthData';
import './css/App.css';
import Gryffondor from './img/carte_Gryffondor.jpg';
import Serpentard from './img/carte_Serpentard.jpg';
import Serdaigle from './img/carte_Serdaigle.jpg';
import Poufsouffle from './img/carte_Poufsouffle.png';
import Detraqueur from './img/carte_detraqueur.jpg';
import Bieraubeurre from './img/carte_Bieraubeurre.jpg';
import Expelliarmus from './img/carte_Expelliarmus.png';
import Modale from './Modal';
const totalSort = [
	{
		nomsort: 'Gryffondor',
		imagesort: <img src={Gryffondor} alt="Gryffondor" class="Gryffondor" />,
		dammage: -5
	},
	{
		nomsort: 'Serpentard',
		imagesort: <img src={Serpentard} alt="Serpentard" class="Serpentard" />,
		dammage: -5
	},
	{
		nomsort: 'Serdaigle',
		imagesort: <img src={Serdaigle} alt="Serdaigle" class="Serdaigle" />,
		dammage: -5
	},
	{
		nomsort: 'Poufsouffle',
		imagesort: <img src={Poufsouffle} alt="Poufsouffle" class="Poufsouffle" />,
		dammage: -5
	},
	{
		nomsort: 'Detraqueur',
		imagesort: <img src={Detraqueur} alt="Detraqueur" class="Detraqueur" />,
		dammage: -40
	},
	{
		nomsort: 'Bieraubeurre',
		imagesort: <img src={Bieraubeurre} alt="Bieraubeurre" class="Bieraubeurre" />,
		dammage: +10
	},
	{
		nomsort: 'Expelliarmus',
		imagesort: <img src={Expelliarmus} alt="Expelliarmus" class="Expelliarmus" />,
		dammage: -10
	}
];

class Sort extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: "",
			clickState: false,
			time: 0,
			expo: 0.9,
			currentSort: "",
			randomInt: "",
			sorteffect: "",
			currentDammage: "",
			reDirect: false,
			counter: 2
		};
		this.coef = 1
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	clockCard = () => {
		if (this.state.reDirect === true) {
			document.removeEventListener('keydown', this.resetCard);
			return;
		} else {
			setTimeout(() => {
				this.setState({ randomInt: this.getRandomInt(totalSort.length) }); // nb de cartes
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
						currentImage: totalSort[this.state.randomInt].imagesort,
						currentSort: totalSort[this.state.randomInt].nomsort,
						currentDammage: totalSort[this.state.randomInt].dammage
					});
					if (this.coef > 1) this.coef = this.coef * 1;
				}
				return this.clockCard();
			}, this.state.time);
			/* this.setState({expo:this.state.expo-(this.state.expo/50)}) */
		}
	};
	resetCard = () => {
		if (this.props.counterKeyMinusOne !== this.props.counterKey) {
			this.setState({ currentImage: '' });
		}
	};

	componentDidMount() {
		console.log("[App] Inside ComponentDidMount");
		this.myInterval = setInterval(() => {
			if (this.state.counter === 0) {
				clearInterval(this.myInterval);
				this.setState({
					counter: ""
				});
				this.clockCard();
				document.addEventListener("keydown", this.resetCard, false);
			} else {
				this.setState(prevState => ({
					counter: prevState.counter - 1
				}));
			}
		}, 1000);
	}
	//callback
	isReDirect = bool => this.setState({ reDirect: bool === true });

	render() {
		return (
			<div>
				<Modale changePause={this.props.changePause} pause={this.props.pause} />
				<div className="counter">{this.state.counter}</div>
				<Hp
					pause={this.state.pause}
					isReDirect={this.isReDirect}
					dammage={this.state.currentDammage}
					schoolL={this.props.schoolL}
					schoolR={this.props.schoolR}
					currentImage={this.state.currentImage}
					currentSort={this.state.currentSort}
					keyboard={this.props.keyboard}
					winnerName={this.state.winnerName}
					nameR={this.props.nameR}
					nameL={this.props.nameL}
					imageR={this.props.imageR}
					imageL={this.props.imageL}
				/>
				{this.state.currentImage}
			</div>
		);
	}
}

export default Sort;
