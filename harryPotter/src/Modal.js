import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/App.css';
import './css/Winner.css';

class Modale extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				{this.props.pause ? (
					<div className="backgroundModale">
						{' '}
						<p className="Ppause">Pause...</p>
						<p className="Pause">Press escape to return to select game </p>
						<div className="btnContinue">
							<button onClick={() => this.props.changePause()}>Back </button>
						</div>
						<NavLink to="/page-de-ChoiceDualOrMulti">
							<button className="btnReturnToC">
								{' '}
								Return to
								<br /> characters selection screen{' '}
							</button>
						</NavLink>
					</div>
				) : (
					<div />
				)}
			</div>
		);
	}
}

export default Modale;
