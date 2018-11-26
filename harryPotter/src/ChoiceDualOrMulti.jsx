import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import { Container, Row, Col } from 'reactstrap';
class ChoiceDualOrMulti extends Component {
	render() {
		return (
			<Container className="fondDualMulti">
				<img className="logo" src={logo} alt="logoWelcome" />
				<div className="textDual">
					<p className="TextDualDuel">Fight against a friend in dual mode !</p>
					<p className="TextDualDuel">Play a game of 4 in Battle Royal Mode !</p>
				</div>
				<Row>
					<Col xs="6" sm="6">
						<NavLink to="/page-de-LibraryCard" className="btn1vs1">
							<button>Dual</button>
						</NavLink>
					</Col>

					<Col xs="6" sm="6">
						<NavLink to="/page-de-LibraryCardBattle" className="btn1vs1">
							<button>Battle Royal</button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ChoiceDualOrMulti;
