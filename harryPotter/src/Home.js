import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoWelcome from './img/logoWelcome.png';
import './css/Acceuil.css';
class Home extends Component {
	render() {
		return (
			<div className="accueilFond">
				<img className="logoWelcome" src={logoWelcome} />
				<div className="intros">
					<p>
						Your family has been captured by Voldemort's henchmen. You have to get the goblet of fire to
						release them.
					</p>
					<p>
						To do that, you have to use spell cards which come up on the screen, to defeat your foes. Be the
						first one to press on your own key, to smash your enemies.
					</p>

					{/*<NavLink to="/page-de-choicePerso" className="btnContinuer">
            <button> Continuer </button>
          </NavLink>
          <NavLink to="/page-de-choicePersoMulti" className="btnContinuer">
            <button> Multi</button>
          </NavLink>*/}

					<NavLink to="/page-de-choiceDualOrMulti" className="btnContinuer">
						<button> Continue </button>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Home;
