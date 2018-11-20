import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/App.css";
import "./css/Winner.css";

class WinnerPageMulti extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

    return (
      <div >
      {this.props.redirect ? (
					<div className="backgroundBlur">
					<div className={'backgroundBgVictory' + this.props.schoolWinner}>
						{' '}
						<div className="endGame">
							<div>
								<img className="redimention" src={this.props.picture} />
							</div>
						</div>
							<p className='MessageVictory'>Well played {this.props.winnerName}</p>
							<NavLink to="/page-de-choiceDualOrMulti" className="btnEnd">
								<button> Continue </button>
							</NavLink>
						
						
					</div>
					</div>
				) : (
					<div />
				)}
    </div>
        )
      }
    }

    export default WinnerPageMulti;
