import React from 'react';
import './css/App.css';
import WinnerPage from './Winner';

class Hp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hpPlayer1: 100,
			hpPlayer2: 100,
			percentage: 100,
			dammage: '',
			redirect: false,
			player1School: this.props.schoolL,
			player2School: this.props.schoolR,
			dammageeffectL: null,
			dammageeffectR: null,
			cardeffect: '',
			schoolWinner: '',
			comboFactor1: 1,
			comboFactor2: 1,
			winnerName: '',
			picture: ''
		};
	}

	handleDecrement = event => {
		/*  ____________________________________________________
        --------------BLOCK CARTE SOIN DEBUT----------------
        ____________________________________________________ */
		if (this.props.currentSort === 'Bieraubeurre') {
			if (event.key === 's' || event.key === 'S') {
				if (this.state.hpPlayer1 === 100) {
					return;
				} else if (this.state.hpPlayer1 + this.props.dammage * this.state.comboFactor1 > 100) {
					this.setState({
						hpPlayer1: 100
					});
				} else {
					this.setState({
						hpPlayer1: this.state.hpPlayer1 + this.props.dammage * this.state.comboFactor1,
						dammageeffectL: '+' + this.props.dammage * this.state.comboFactor1 + ' !'
					});
					setTimeout(() => {
						this.setState({
							dammageeffectL: ''
						});
					}, 200);
				}
			}
			if (event.key === 'l' || event.key === 'L') {
				if (this.state.hpPlayer2 === 100) {
					return;
				} else if (this.state.hpPlayer2 + this.props.dammage * this.state.comboFactor2 > 100) {
					this.setState({
						hpPlayer2: 100
					});
				} else {
					this.setState({
						hpPlayer2: this.state.hpPlayer2 + this.props.dammage * this.state.comboFactor2,
						dammageeffectR: '+' + this.props.dammage * this.state.comboFactor2 + ' !'
					});
					setTimeout(() => {
						this.setState({
							dammageeffectR: ''
						});
					}, 500);
				}
			}
		} else {
			/*  ____________________________________________________
          ---------------BLOCK CARTE SOIN FIN-----------------
          ____________________________________________________ */

			/*  ____________________________________________________
          --------------BLOCK CARTE DEGAT DEBUT-----------------
          ____________________________________________________ */
			/* ______________________________________________________
         __________________PLAYER LEFT_________________________  */
			/* Est-ce que la carte correspond à ton école ? */
			if (this.state.player1School === this.props.currentSort || this.props.currentSort === 'Expelliarmus') {
				if ((this.props.currentImage !== '' && event.key === 's') || event.key === 'S') {
					/* Est-elle bien affiché ? */
					if (this.state.hpPlayer2 <= -this.props.dammage * this.state.comboFactor1) {
						/* Vas-tu tuer le joueur 2 ? */
						this.setState({
							redirect: true,
							dammageeffectR: this.props.dammage + ' !',
							schoolWinner: this.state.player1School,
							winnerName: this.props.nameL,
							picture: this.props.imageL
						});
						//this.props.isReDirect(!this.state.redirect);
						setTimeout(() => {
							this.setState({
								dammageeffectR: ''
							});
						}, 500);
					} else if (event.key === 's' || event.key === 'S') {
						/* Vas-tu lu infliger des dégats sans le tuer ? */
						this.setState({
							hpPlayer2: this.state.hpPlayer2 + this.props.dammage * this.state.comboFactor1,
							dammageeffectR: this.props.dammage * this.state.comboFactor1 + ' !',
							comboFactor1: this.state.comboFactor1 + 1
						});
						setTimeout(() => {
							this.setState({
								dammageeffectR: ''
							});
						}, 500);
					}
				}
			} else if (
				/* As-tu clicker sur une mauvaise carte ? */
				(this.props.currentImage !== '' && event.key === 's') ||
				(event.key === 'S' && this.props.currentSort !== 'Bieraubeurre')
			) {
				this.setState({ comboFactor1: 1 });
				if (this.state.hpPlayer1 <= -this.props.dammage) {
					/* Cette décision va-t-elle te tuer ? */
					this.setState({
						hpPlayer1: this.state.hpPlayer1 + this.props.dammage,
						redirect: true,
						dammageeffectL: this.props.dammage + ' !',
						schoolWinner: this.state.player2School,
						winnerName: this.props.nameR,
						picture: this.props.imageR
					});
					//this.props.isReDirect(!this.state.redirect);
					setTimeout(() => {
						this.setState({
							dammageeffectL: ''
						});
					}, 500);
				}
				/* Cette décision va-t-elle plutôt te blesser ? */
				this.setState({
					hpPlayer1: this.state.hpPlayer1 + this.props.dammage,
					dammageeffectL: this.props.dammage + ' !'
				});

				setTimeout(() => {
					this.setState({
						dammageeffectL: ''
					});
				}, 500);
			}
			/* ____________________________________________________
         _______________PLAYER RIGHT_________________________  */
			/* Est-ce que la carte correspond à ton école ? */
			if (this.state.player2School === this.props.currentSort || this.props.currentSort === 'Expelliarmus') {
				if ((this.props.currentImage !== '' && event.key === 'l') || event.key === 'L') {
					/* Est-elle bien affiché ? */
					if (this.state.hpPlayer1 <= -this.props.dammage * this.state.comboFactor2) {
						/* Vas-tu tuer le joueur 1 ? */
						this.setState({
							redirect: true,
							dammageeffectR: this.props.dammage + ' !',
							schoolWinner: this.state.player2School,
							winnerName: this.props.nameR,
							picture: this.props.imageR
						});
						//this.props.isReDirect(!this.state.redirect);
						setTimeout(() => {
							this.setState({
								dammageeffectR: ''
							});
						}, 500);
					} else if (event.key === 'l' || event.key === 'L') {
						/* Vas-tu lu infliger des dégats sans le tuer ? */
						this.setState({
							hpPlayer1: this.state.hpPlayer1 + this.props.dammage * this.state.comboFactor2,
							dammageeffectL: this.props.dammage * this.state.comboFactor2 + ' !',
							comboFactor2: this.state.comboFactor2 + 1
						});
						setTimeout(() => {
							this.setState({
								dammageeffectL: ''
							});
						}, 500);
					}
				}
			} else if (
				/* As-tu clicker sur une mauvaise carte ? */
				(this.props.currentImage !== '' && event.key === 'l') ||
				(event.key === 'L' && this.props.currentSort !== 'Bieraubeurre')
			) {
				this.setState({ comboFactor2: 1 });
				if (this.state.hpPlayer2 <= -this.props.dammage) {
					/* Cette décision va-t-elle te tuer ? */
					this.setState({
						hpPlayer2: this.state.hpPlayer2 + this.props.dammage,
						redirect: true,
						dammageeffectR: this.props.dammage + ' !',
						schoolWinner: this.state.player1School,
						winnerName: this.props.nameL,
						picture: this.props.imageL
					});
					// this.props.isReDirect(!this.state.redirect);
					setTimeout(() => {
						this.setState({
							dammageeffectR: ''
						});
					}, 500);
				}
				/* Cette décision va-t-elle plutôt te blesser ? */
				this.setState({
					hpPlayer2: this.state.hpPlayer2 + this.props.dammage,
					dammageeffectR: this.props.dammage + ' !'
				});
				setTimeout(() => {
					this.setState({
						dammageeffectR: ''
					});
				}, 500);
			}
		}
	};
	/*  ____________________________________________________
      --------------BLOCK CARTE DEGAT FIN-----------------
      ____________________________________________________ */

	componentDidMount() {
		document.addEventListener('keydown', this.handleDecrement, false);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleDecrement, false);
	}

	//redirect = () => this.state.redirect ? <Redirect to='/' /> : ""

	render() {
		const Filler = props => {
			return <div className="filler" style={{ width: `${props.hpPlayer2}%` }} />;
		};
		const Filler1 = props => {
			return <div className="filler1" style={{ width: `${props.hpPlayer1}%` }} />;
		};
		const Player2 = this.state.hpPlayer1 ? 'barLeft' : 'barLeft';
		const Player1 = this.state.hpPlayer2 ? 'barRight' : 'barRight';
		return (
			<div>
				<WinnerPage
					schoolWinner={this.state.schoolWinner}
					redirect={this.state.redirect}
					schoolL={this.props.schoolL}
					schoolR={this.props.schoolR}
					winnerName={this.state.winnerName}
					picture={this.state.picture}
				/>

				{this.props.dammage > 0 ? (
					<div className="deLCool">{this.state.dammageeffectL}</div>
				) : (
					<div className="deLPasCool">{this.state.dammageeffectL}</div>
				)}
				{this.props.dammage > 0 ? (
					<div className="deRCool">{this.state.dammageeffectR}</div>
				) : (
					<div className="deRPasCool">{this.state.dammageeffectR}</div>
				)}
				<div className="combo1">{this.state.comboFactor1}</div>
				<div className="combo2">{this.state.comboFactor2}</div>
				<div className={Player1}>
					<div className="health-bar">
						<Filler hpPlayer2={this.state.hpPlayer2} />
					</div>
					{this.state.hpPlayer2}
					/100
				</div>
				<div className={Player2}>
					<div className="health-bar">
						<Filler1 hpPlayer1={this.state.hpPlayer1} />
					</div>
					{this.state.hpPlayer1}
					/100
				</div>
			</div>
		);
	}
}

export default Hp;
