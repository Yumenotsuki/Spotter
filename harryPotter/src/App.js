import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './Home';
import ChoiceDualOrMulti from './ChoiceDualOrMulti';
import WinnerPage from './Winner';
import WinnerPageMulti from './WinnerMulti';
import ChoiceCharacter from './ChoiceCharacter';
import ChoiceCharacterMulti from './ChoiceCharacterMulti';
import Game from './Game';
import GameMulti from './GameMulti';
import './css/App.css';
import './css/Winner.css';
import './css/ChoiceCharacter.css';
import './css/ChoiceCharacterMulti.css';
import './css/ChoiceDualOrMulti.css';
import './css/GameMulti.css';
import LibraryCard from './LibraryCardSolo';
import LibraryCardMulti from './LibraryCardMulti';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Acceuil.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			imageL: null,
			imageR: null,
			imageRB: null,
			imageLB: null,
			schoolL: null,
			schoolR: null,
			schoolLB: null,
			schoolRB: null,
			effectL: null,
			effectR: null,
			effectLB: null,
			effectRB: null,
			nameL: null,
			nameR: null
		};
	}
	//  les fonctions ci-dessous sont appellées dans ChoiceCharacter
	//dans l'arg on lui passe les données du tableau
	getPlayerLeft = (value, school, name, effect) => {
		this.setState({ imageL: value, schoolL: school, effectL: effect, nameL: name });
	};

	getPlayerRight = (value, school, name, effect) => {
		this.setState({ imageR: value, schoolR: school, effectR: effect, nameR: name });
	};

	getPlayerLeftBottom = (value, school, name, effect) => {
		this.setState({ imageLB: value, schoolLB: school, effectLB: effect, nameLB: name });
	};

	getPlayerRightBottom = (value, school, name, effect) => {
		this.setState({ imageRB: value, schoolRB: school, effectRB: effect, nameRB: name });
	};

	render() {
		return (
			<HashRouter>
				<div className="fondAccueil">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/pageOfVictory" component={WinnerPage} />
						<Route exact path="/pageOfVictoryMulti" component={WinnerPageMulti} />
						{/* <Route exact path="/pageGryffondor" component={Gryff}/>
            <Route exact path="/pageSerpentard" component={Serp}/>
            <Route exact path="/pageSerdaigle" component={Serd}/>
            <Route exact path="/pagePoufsouffle" component={Pouf}/> */}

						<Route
							path="/page-de-choicePerso"
							render={() => {
								return (
									<ChoiceCharacter
										//callback ChoiceCharacter(child => Parent)
										pedroLeft={this.getPlayerLeft}
										pedroRight={this.getPlayerRight}
									/>
								);
							}}
						/>
						<Route
							path="/page-de-choicePersoMulti"
							render={() => {
								return (
									<ChoiceCharacterMulti
										pedroLeft={this.getPlayerLeft}
										pedroRight={this.getPlayerRight}
										pedroLeftBottom={this.getPlayerLeftBottom}
										pedroRightBottom={this.getPlayerRightBottom}
									/>
								);
							}}
						/>
						<Route
							exact
							path="/page-de-Game"
							render={() => {
								return (
									<Game
										imageL={this.state.imageL}
										imageR={this.state.imageR}
										schoolL={this.state.schoolL}
										schoolR={this.state.schoolR}
										effectL={this.state.effectL}
										effectR={this.state.effectR}
										nameL={this.state.nameL}
										nameR={this.state.nameR}
									/>
								);
							}}
						/>
						<Route
							exact
							path="/page-de-GameMulti"
							render={() => {
								return (
									<GameMulti
										imageL={this.state.imageL}
										imageR={this.state.imageR}
										imageLB={this.state.imageLB}
										imageRB={this.state.imageRB}
										schoolL={this.state.schoolL}
										schoolR={this.state.schoolR}
										schoolLB={this.state.schoolLB}
										schoolRB={this.state.schoolRB}
										effectL={this.state.effectL}
										effectR={this.state.effectR}
										effectLB={this.state.effectLB}
										effectRB={this.state.effectRB}
										nameL={this.state.nameL}
										nameR={this.state.nameR}
										nameLB={this.state.nameLB}
										nameRB={this.state.nameRB}
									/>
								);
							}}
						/>
						<Route exact path="/page-de-ChoiceDualOrMulti" component={ChoiceDualOrMulti} />
						<Route exact path="/page-de-LibraryCard" component={LibraryCard} />
						<Route exact path="/page-de-LibraryCardBattle" component={LibraryCardMulti} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default App;
