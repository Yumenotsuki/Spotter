import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/App.css';
import './css/Winner.css';

class WinnerPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				{this.props.redirect ? (
					<div className="backgroundBlur1">
						<div className={'backgroundBgVictory' + this.props.schoolWinner}>
							{' '}
							<div className="endGame">
								<div>
									<img className="redimention" src={this.props.picture} alt={this.props.winnerName} />
								</div>
							</div>
							<p className="MessageVictory">Well played {this.props.winnerName}</p>
							<NavLink to="/page-de-choiceDualOrMulti" className="btnEnd">
								<button> Continue </button>
							</NavLink>
						</div>
					</div>
				) : (
					<div />
				)}
			</div>
		);
	}
}

export default WinnerPage;
