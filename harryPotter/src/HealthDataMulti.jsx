import React from 'react';
import './css/App.css';
import WinnerPageMulti from './WinnerMulti';
import Vide from './img/Vide.png';

class HpMulti extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardeffectL: Vide,
			cardeffectR: Vide,
			cardeffectLB: Vide,
			cardeffectRB: Vide,
			maxLife: 100,
			hpPlayer1: 100,
			hpPlayer2: 100,
			hpPlayer3: 100,
			hpPlayer4: 100,
			playerIsActive: [true, true, true, true],
			percentage: 100,
			dammage: '',
			redirect: false,
			playerSchool: [this.props.schoolL, this.props.schoolR, this.props.schoolLB, this.props.schoolRB],
			dammageeffect1: null,
			dammageeffect2: null,
			dammageeffect3: null,
			dammageeffect4: null,
			cardeffect: '',
			schoolWinner: null,
			winnerName: '',
			playerName: [this.props.nameL, this.props.nameR, this.props.nameLB, this.props.nameRB],
			comboFactor1: 1,
			comboFactor2: 1,
			comboFactor3: 1,
			comboFactor4: 1,
			picture: ''
		};
	}

	timeoutEffect1 = () => {
		setTimeout(() => {
			this.setState({ dammageeffect1: '', cardeffectL: Vide });
		}, 500);
	};
	timeoutEffect2 = () => {
		setTimeout(() => {
			this.setState({ dammageeffect2: '', cardeffectR: Vide });
		}, 500);
	};
	timeoutEffect3 = () => {
		setTimeout(() => {
			this.setState({ dammageeffect3: '', cardeffectLB: Vide });
		}, 500);
	};
	timeoutEffect4 = () => {
		setTimeout(() => {
			this.setState({ dammageeffect4: '', cardeffectRB: Vide });
		}, 500);
	};

	carteSoin = event => {};

	isThereAWinner = () => {
		let total = 0;
		let a = { ...this.state.playerIsActive };

		if (this.state.hpPlayer1 <= 1) {
			a[0] = false;
			this.setState({ playerIsActive: a });
		}
		if (this.state.hpPlayer2 <= 1) {
			a[1] = false;
			this.setState({ playerIsActive: a });
		}
		if (this.state.hpPlayer3 <= 1) {
			a[2] = false;
			this.setState({ playerIsActive: a });
		}
		if (this.state.hpPlayer4 <= 1) {
			a[3] = false;
			this.setState({ playerIsActive: a });
		}
		for (let i = 0; i < 4; i++) {
			if (this.state.playerIsActive[i] === true) {
				total++;
			}
		}
		if (total === 1) {
			for (let i = 0; i < 4; i++) {
				if (this.state.playerIsActive[i] === true) {
					this.setState({ schoolWinner: this.state.playerSchool[i] });
					this.setState({ winnerName: this.state.playerName[i] });
					if (i === 0) this.setState({ picture: this.props.imageL });
					if (i === 1) this.setState({ picture: this.props.imageR });
					if (i === 2) this.setState({ picture: this.props.imageLB });
					if (i === 3) this.setState({ picture: this.props.imageRB });
					console.log(i, this.state.picture);
					console.log(this.props.imageL, this.props.imageR, this.props.imageLB, this.props.imageRB);
				}
			}
		}
		this.state.schoolWinner ? this.setState({ redirect: true }) : this.setState({ redirect: null });
	};

	handleDecrement = event => {
		if (this.props.currentSort === 'Bieraubeurre') {
			if (event.key === 's' || event.key === 'S') {
				if (this.state.hpPlayer1 >= 1) {
					if (this.state.hpPlayer1 === this.state.maxLife) {
						return;
					} else if (this.state.hpPlayer1 + this.props.dammage * this.state.comboFactor1 > 100) {
						this.setState({
							hpPlayer1: 100
						});
					} else {
						this.setState({
							cardeffectL: this.props.effectL,
							hpPlayer1: this.state.hpPlayer1 + this.props.dammage * this.state.comboFactor1,
							dammageeffectL: '+' + this.props.dammage * this.state.comboFactor1 + ' !'
						});

						this.timeoutEffect1();
					}
				}
			}
			if (event.key === 'l' || event.key === 'L') {
				if (this.state.hpPlayer2 >= 1) {
					if (this.state.hpPlayer2 === this.state.maxLife) {
						return;
					} else if (this.state.hpPlayer2 + this.props.dammage * this.state.comboFactor2 > 100) {
						this.setState({
							hpPlayer2: 100
						});
					} else {
						this.setState({
							cardeffectR: this.props.effectR,
							hpPlayer2: this.state.hpPlayer2 + this.props.dammage * this.state.comboFactor2,
							dammageeffect2: '+' + this.props.dammage * this.state.comboFactor2 + ' !'
						});

						this.timeoutEffect2();
					}
				}
			}
			if (event.key === 'f' || event.key === 'F') {
				if (this.state.hpPlayer3 >= 1) {
					if (this.state.hpPlayer3 === this.state.maxLife) {
						return;
					} else if (this.state.hpPlayer3 + this.props.dammage * this.state.comboFactor3 > 100) {
						this.setState({
							hpPlayer3: 100
						});
					} else {
						this.setState({
							cardeffectLB: this.props.effectLB,
							hpPlayer3: this.state.hpPlayer3 + this.props.dammage * this.state.comboFactor3,
							dammageeffectR: '+' + this.props.dammage * this.state.comboFactor3 + ' !'
						});

						this.timeoutEffect3();
					}
				}
			}
			if (event.key === 'j' || event.key === 'J') {
				if (this.state.hpPlayer4 >= 1) {
					if (this.state.hpPlayer4 === this.state.maxLife) {
						return;
					} else if (this.state.hpPlayer4 + this.props.dammage * this.state.comboFactor4 > 100) {
						this.setState({
							hpPlayer4: 100
						});
					} else {
						this.setState({
							cardeffectRB: this.props.effectRB,
							hpPlayer4: this.state.hpPlayer4 + this.props.dammage * this.state.comboFactor4,
							dammageeffectR: '+' + this.props.dammage * this.state.comboFactor4 + ' !'
						});

						this.timeoutEffect4();
					}
				}
			}
		} else {
			/*  ____________________________________________________
          --------------BLOCK CARTE DEGAT DEBUT---------------
          ____________________________________________________ */
			/* ______________________________________________________
         _____________________PLAYER 1_________________________  */
			/* Est-ce que la carte correspond à ton école ? */
			if (this.state.hpPlayer1 > 0) {
				if (
					this.state.playerSchool[0] === this.props.currentSort ||
					this.props.currentSort === 'Expelliarmus'
				) {
					if (this.props.currentImage !== '') {
						/* Est-elle bien affiché ? */
						if (event.key === 's' || event.key === 'S') {
							/* Vas-tu lu infliger des dégats ? */

							this.setState({
								cardeffectL: this.props.effectL,
								hpPlayer2: this.state.hpPlayer2 + this.props.dammage,
								hpPlayer3: this.state.hpPlayer3 + this.props.dammage,
								hpPlayer4: this.state.hpPlayer4 + this.props.dammage,
								dammageeffect2: this.props.dammage * this.state.comboFactor1 + ' !',
								comboFactor1: this.state.comboFactor1 + 1,
								dammageeffect3: this.props.dammage * this.state.comboFactor1 + ' !',
								dammageeffect4: this.props.dammage * this.state.comboFactor1 + ' !'
							});

							this.timeoutEffect2();
							this.timeoutEffect3();
							this.timeoutEffect4();
							/* As-tu gagné ? */
							this.isThereAWinner();
						}
					}
				} else if (
					/* As-tu clicker sur une mauvaise carte ? */
					(this.props.currentImage !== '' && event.key === 's') ||
					(event.key === 'S' && this.props.currentSort !== 'Bieraubeurre')
				) {
					/* Cette décision va-t-elle te blesser ? */
					this.setState({ comboFactor1: 1 });
					this.setState({
						hpPlayer1: this.state.hpPlayer1 + this.props.dammage,
						dammageeffect1: this.props.dammage + ' !'
					});
					this.timeoutEffect1();
					/* Cette décision va-t-elle te tuer ? */
					this.isThereAWinner();
				}
			} else
				this.setState({
					hpPlayer1: '0',
					cardeffectL: Vide
				});
			/* ______________________________________________________
         _____________________PLAYER 2_________________________  */
			/* Est-ce que la carte correspond à ton école ? */
			if (this.state.hpPlayer2 > 0) {
				if (
					this.state.playerSchool[1] === this.props.currentSort ||
					this.props.currentSort === 'Expelliarmus'
				) {
					if (this.props.currentImage !== '') {
						/* Est-elle bien affiché ? */
						if (event.key === 'l' || event.key === 'L') {
							/* Vas-tu lu infliger des dégats ? */
							this.setState({
								cardeffectR: this.props.effectR,
								hpPlayer1: this.state.hpPlayer1 + this.props.dammage,
								hpPlayer3: this.state.hpPlayer3 + this.props.dammage,
								hpPlayer4: this.state.hpPlayer4 + this.props.dammage,
								dammageeffect1: this.props.dammage * this.state.comboFactor2 + ' !',
								comboFactor2: this.state.comboFactor2 + 1,
								dammageeffect3: this.props.dammage * this.state.comboFactor2 + ' !',
								dammageeffect4: this.props.dammage * this.state.comboFactor2 + ' !'
							});

							this.timeoutEffect1();
							this.timeoutEffect3();
							this.timeoutEffect4();
							/* As-tu gagné ? */
							this.isThereAWinner();
						}
					}
				} else if (
					/* As-tu clicker sur une mauvaise carte ? */
					(this.props.currentImage !== '' && event.key === 'l') ||
					(event.key === 'L' && this.props.currentSort !== 'Bieraubeurre')
				) {
					/* Cette décision va-t-elle te blesser ? */
					this.setState({ comboFactor2: 1 });
					this.setState({
						hpPlayer2: this.state.hpPlayer2 + this.props.dammage,
						dammageeffect2: this.props.dammage + ' !'
					});
					this.timeoutEffect2();
					/* Cette décision va-t-elle te tuer ? */
					this.isThereAWinner();
				}
			} else
				this.setState({
					hpPlayer2: '0',
					cardeffectR: Vide
				});
			/* ______________________________________________________
         _____________________PLAYER 3_________________________  */
			/* Est-ce que la carte correspond à ton école ? */
			if (this.state.hpPlayer3 > 0) {
				if (
					this.state.playerSchool[2] === this.props.currentSort ||
					this.props.currentSort === 'Expelliarmus'
				) {
					if (this.props.currentImage !== '') {
						/* Est-elle bien affiché ? */
						if (event.key === 'f' || event.key === 'F') {
							/* Vas-tu lu infliger des dégats ? */
							this.setState({
								cardeffectLB: this.props.effectLB,
								hpPlayer2: this.state.hpPlayer2 + this.props.dammage,
								hpPlayer1: this.state.hpPlayer1 + this.props.dammage,
								hpPlayer4: this.state.hpPlayer4 + this.props.dammage,
								dammageeffect1: this.props.dammage * this.state.comboFactor3 + ' !',
								comboFactor3: this.state.comboFactor3 + 1,
								dammageeffect2: this.props.dammage * this.state.comboFactor3 + ' !',
								dammageeffect4: this.props.dammage * this.state.comboFactor3 + ' !'
							});

							this.timeoutEffect1();
							this.timeoutEffect2();
							this.timeoutEffect4();
							/* As-tu gagné ? */
							this.isThereAWinner();
						}
					}
				} else if (
					/* As-tu clicker sur une mauvaise carte ? */
					(this.props.currentImage !== '' && event.key === 'f') ||
					(event.key === 'F' && this.props.currentSort !== 'Bieraubeurre')
				) {
					/* Cette décision va-t-elle te blesser ? */
					this.setState({ comboFactor3: 1 });
					this.setState({
						hpPlayer3: this.state.hpPlayer3 + this.props.dammage,
						dammageeffect3: this.props.dammage + ' !'
					});
					this.timeoutEffect3();
					/* Cette décision va-t-elle te tuer ? */
					this.isThereAWinner();
				}
			} else
				this.setState({
					hpPlayer3: '0',
					cardeffectLB: Vide
				});
			/* ______________________________________________________
         _____________________PLAYER 4_________________________  */
			/* Est-ce que la carte correspond à ton école ? */
			if (this.state.hpPlayer4 > 0) {
				if (
					this.state.playerSchool[3] === this.props.currentSort ||
					this.props.currentSort === 'Expelliarmus'
				) {
					if (this.props.currentImage !== '') {
						/* Est-elle bien affiché ? */
						if (event.key === 'j' || event.key === 'J') {
							/* Vas-tu lu infliger des dégats ? */
							this.setState({
								cardeffectRB: this.props.effectRB,
								hpPlayer2: this.state.hpPlayer2 + this.props.dammage,
								hpPlayer3: this.state.hpPlayer3 + this.props.dammage,
								hpPlayer1: this.state.hpPlayer1 + this.props.dammage,
								dammageeffect1: this.props.dammage * this.state.comboFactor4 + ' !',
								comboFactor4: this.state.comboFactor4 + 1,
								dammageeffect2: this.props.dammage * this.state.comboFactor4 + ' !',
								dammageeffect4: this.props.dammage * this.state.comboFactor4 + ' !'
							});

							this.timeoutEffect1();
							this.timeoutEffect2();
							this.timeoutEffect4();
							/* As-tu gagné ? */
							this.isThereAWinner();
						}
					}
				} else if (
					/* As-tu clicker sur une mauvaise carte ? */
					(this.props.currentImage !== '' && event.key === 'j') ||
					(event.key === 'J' && this.props.currentSort !== 'Bieraubeurre')
				) {
					/* Cette décision va-t-elle te blesser ? */
					this.setState({ comboFactor4: 1 });
					this.setState({
						hpPlayer4: this.state.hpPlayer4 + this.props.dammage,
						dammageeffect4: this.props.dammage + ' !'
					});
					this.timeoutEffect4();
					/* Cette décision va-t-elle te tuer ? */
					this.isThereAWinner();
				}
			} else
				this.setState({
					hpPlayer4: '0',
					cardeffectRB: Vide
				});
		}
	};

	/*  ____________________________________________________
      --------------BLOCK CARTE DEGAT FIN-----------------
      ____________________________________________________ */

	componentDidMount() {
		document.addEventListener('keydown', this.handleDecrement, false);
		document.addEventListener('keydown', this.carteSoin, false);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleDecrement, false);
		document.removeEventListener('keydown', this.carteSoin, false);
	}

	render() {
		const Filler = props => {
			return <div className="fillerLT" style={{ width: `${props.hpPlayer1}%` }} />;
		};
		const Filler1 = props => {
			return <div className="fillerRT" style={{ width: `${props.hpPlayer2}%` }} />;
		};
		const Filler2 = props => {
			return <div className="fillerLB" style={{ width: `${props.hpPlayer3}%` }} />;
		};
		const Filler3 = props => {
			return <div className="fillerRB" style={{ width: `${props.hpPlayer4}%` }} />;
		};

		return (
			<div>
				<div className="barLT">
					<div className="health-bar-lt">
						<Filler hpPlayer1={this.state.hpPlayer1} />
					</div>
					{this.state.hpPlayer1}/{this.state.maxLife}
				</div>
				<div className="barRT">
					<div className="health-bar-rt">
						<Filler1 hpPlayer2={this.state.hpPlayer2} />
					</div>
					{this.state.hpPlayer2}/{this.state.maxLife}
				</div>
				<div className="barLB">
					<div className="health-bar-lb">
						<Filler2 hpPlayer3={this.state.hpPlayer3} />
					</div>
					{this.state.hpPlayer3}/{this.state.maxLife}
				</div>
				<div className="barRB">
					<div className="health-bar-rb">
						<Filler3 hpPlayer4={this.state.hpPlayer4} />
					</div>
					{this.state.hpPlayer4}/{this.state.maxLife}
				</div>

				<WinnerPageMulti
					schoolWinner={this.state.schoolWinner}
					redirect={this.state.redirect}
					schoolL={this.props.schoolL}
					schoolR={this.props.schoolR}
					winnerName={this.state.winnerName}
					picture={this.state.picture}
				/>

				<img src={this.state.cardeffect} className="effectimage" alt="cardeffect" />

				{this.props.dammage > 0 ? (
					<div className="deLCoolM">{this.state.dammageeffect1}</div>
				) : (
					<div className="deLPasCoolM">{this.state.dammageeffect1}</div>
				)}
				{this.props.dammage > 0 ? (
					<div className="deRCoolM">{this.state.dammageeffect2}</div>
				) : (
					<div className="deRPasCoolM">{this.state.dammageeffect2}</div>
				)}
				{this.props.dammage > 0 ? (
					<div className="deLBCoolM">{this.state.dammageeffect3}</div>
				) : (
					<div className="deLBPasCoolM">{this.state.dammageeffect3}</div>
				)}
				{this.props.dammage > 0 ? (
					<div className="deRBCoolM">{this.state.dammageeffect4}</div>
				) : (
					<div className="deRBPasCoolM">{this.state.dammageeffect4}</div>
				)}

				<div className="combo1">{this.state.comboFactor1}</div>
				<div className="combo2">{this.state.comboFactor2}</div>
				<div className="combo3">{this.state.comboFactor3}</div>
				<div className="combo4">{this.state.comboFactor4}</div>
			</div>
		);
	}
}

export default HpMulti;
