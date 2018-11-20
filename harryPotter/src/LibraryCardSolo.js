import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/LibraryCard.css';
class LibraryCard extends Component {
	render() {
		return (
			<div className="bgLibrary">
				<NavLink to="/page-de-choicePerso" className="LibraryButton">
					<button>Start</button>
				</NavLink>
			</div>
		);
	}
}

export default LibraryCard;
