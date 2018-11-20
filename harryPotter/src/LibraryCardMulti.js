import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/LibraryCard.css';
class LibraryCardMulti extends Component {
	render() {
		return (
			<div className="bgLibrary">
				<NavLink to="/page-de-choicePersoMulti" className="LibraryButton">
					<button>Start</button>
				</NavLink>
			</div>
		);
	}
}

export default LibraryCardMulti;
