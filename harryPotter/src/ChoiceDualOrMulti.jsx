import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';

class ChoiceDualOrMulti extends Component {
	render() {
		return (
			<div className="fondDualMulti">
				<img className="logo" src={logo} />
				<div className="textDual">
					<p className="TextDualDuel">Fight against a friend in dual mode !</p>
					<p className="TextDualDuel">Play a game of 4 in Battle Royal Mode !</p>
				</div>

				<NavLink to="/page-de-LibraryCard" className="btn1vs1">
					<button>Dual</button>
				</NavLink>
				<NavLink to="/page-de-LibraryCardBattle" className="btn1vs1">
					<button>Battle Royal</button>
				</NavLink>
			</div>
		);
	}
}

export default ChoiceDualOrMulti;
