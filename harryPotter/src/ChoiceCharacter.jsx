import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import carteGryffondor from './img/carte_Gryffondor.jpg';
import carteSerpentard from './img/carte_Serpentard.jpg';
import carteSerdaigle from './img/carte_Serdaigle.jpg';
import cartePoufsouffle from './img/carte_Poufsouffle.png';
import Gryfeffect from './img/Geffect.png';
import Serpeffect from './img/Seffect.png';
import Serdeffect from './img/SEeffect.png';
import Poufeffect from './img/Peffect.png';
import GinnyPortrait from './img/ginny.jpg';
import LeePortrait from './img/lee.jpg';
import PansyPortrait from './img/pansy.jpg';
import GoylePortrait from './img/goyle.jpg';
import ChoPortrait from './img/cho.jpeg';
import MichaelPortrait from './img/michael.jpg';
import HannahPortrait from './img/hannah.png';
import ErniePortrait from './img/ernie.jpg';
import { Container, Row, Col } from 'reactstrap';

const characters = [
	{
		name: 'Ginny',
		school: 'Gryffondor',
		imagesort: carteGryffondor,
		image: GinnyPortrait,
		/* "https://images.ctfassets.net/bxd3o8b291gf/3AlTt150x280UeQ24M4wmO/4843afd8458298d51291036734e6999a/GinnyWeasley_WB_F5_GinnyWeasleyPointingWand_Still_080615_Land.jpg?w=320&h=320&fit=thumb&f=center&q=85", */
		cardeffect: Gryfeffect
	},
	{
		name: 'Lee',
		school: 'Gryffondor',
		imagesort: carteGryffondor,
		image: LeePortrait,
		/* "https://vignette.wikia.nocookie.net/harrypotter/images/e/e8/Lee_Jordan.jpg/revision/latest?cb=20100121154759&path-prefix=fr", */
		cardeffect: Gryfeffect
	},
	{
		name: 'Pansy',
		school: 'Serpentard',
		imagesort: carteSerpentard,
		image: PansyPortrait,
		/*       "https://img.buzzfeed.com/buzzfeed-static/static/2015-08/3/12/enhanced/webdr01/original-grid-image-13819-1438619305-2.jpg?crop=521:781;17,0&downsize=400:*&output-format=auto&output-quality=auto",*/ cardeffect: Serpeffect
	},
	{
		name: 'Goyle',
		school: 'Serpentard',
		imagesort: carteSerpentard,
		image: GoylePortrait,
		/*  "http://images6.fanpop.com/image/polls/1520000/1520135_1446274079948_full.jpg?v=1446274090", */
		cardeffect: Serpeffect
	},
	{
		name: 'Cho',
		school: 'Serdaigle',
		imagesort: carteSerdaigle,
		image: ChoPortrait,
		/*     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQUbct6RXUulHF1NlJt-I-3-o6vpVth257KssBUbFsIBjUecQ", */
		cardeffect: Serdeffect
	},
	{
		name: 'Michael',
		school: 'Serdaigle',
		imagesort: carteSerdaigle,
		image: MichaelPortrait,
		/*  "https://vignette.wikia.nocookie.net/harrypotter/images/e/e5/Michael_Corner.jpg/revision/latest?cb=20101104174315&path-prefix=fr", */
		cardeffect: Serdeffect
	},
	{
		name: 'Hannah',
		school: 'Poufsouffle',
		imagesort: cartePoufsouffle,
		image: HannahPortrait,
		/*       "https://vignette.wikia.nocookie.net/p__/images/4/4d/Hannah_Abbott.png/revision/latest?cb=20120714215041&path-prefix=protagonist",*/

		cardeffect: Poufeffect
	},
	{
		name: 'Ernie',
		school: 'Poufsouffle',
		imagesort: cartePoufsouffle,
		image: ErniePortrait,
		/*       "https://vignette.wikia.nocookie.net/harrypotter/images/a/aa/Ernie_Macmillan.jpg/revision/latest?cb=20100121135621&path-prefix=fr",*/

		cardeffect: Poufeffect
	}
];

class ChoiceCharacter extends Component {
	constructor() {
		super();
		this.state = {
			name: null,
			nameL: null,
			nameR: null,
			image: null,
			imageL: null,
			imageR: null,
			school: null,
			schoolL: null,
			schoolR: null,
			imagesortL: null,
			imagesortR: null,
			effectL: null,
			effectR: null
		};
	}

	// fonction qui determine la selection du 1er puis du 2eme perso
	handleProfilChange = indexCharacter => {
		if (this.state.imageL === null) {
			this.givePlayerLeft(
				characters[indexCharacter].image,
				characters[indexCharacter].school,
				characters[indexCharacter].name,
				characters[indexCharacter].cardeffect
			);

			this.setState({
				imageL: characters[indexCharacter].image,
				schoolL: characters[indexCharacter].school,
				nameL: characters[indexCharacter].name,
				imagesortL: characters[indexCharacter].imagesort,
				effectL: characters[indexCharacter].cardeffect
			});
		} else {
			if (this.state.nameL !== characters[indexCharacter].name) {
				this.givePlayerRight(
					characters[indexCharacter].image,
					characters[indexCharacter].school,
					characters[indexCharacter].name,
					characters[indexCharacter].cardeffect
				);

				this.setState({
					imageR: characters[indexCharacter].image,
					schoolR: characters[indexCharacter].school,
					nameR: characters[indexCharacter].name,
					imagesortR: characters[indexCharacter].imagesort,
					effectR: characters[indexCharacter].cardeffect
				});
			} else return;
		}
	};

	resetFunction = () => {
		this.setState({
			imageL: null,
			nameL: null,
			imageR: null,
			nameR: null,
			schoolL: null,
			schoolR: null,
			effectL: null,
			effectR: null,
			imagesortL: null,
			imagesortR: null
		});
	};

	// fonctions qui appellent les callback (App)
	givePlayerRight = (image, school, name, effect) => {
		this.props.pedroRight(image, school, name, effect);
	};
	givePlayerLeft = (image, school, name, effect) => {
		this.props.pedroLeft(image, school, name, effect);
	};

	render() {
		return (
			<div className="choicePage">
				<Container className="ContainerChoicePage">
					<div className="blocLeft">
						<div className="carteLeft">
							<img src={this.state.imagesortL} alt={this.state.nameL} />
							<br />
							<div className="imageChoice">
								<img src={this.state.imageL} alt={this.state.nameL} />
							</div>
						</div>

						<p className="nameChoice">{this.state.nameL}</p>
					</div>

					<div className="blocRight">
						<div className="carteRight">
							<img src={this.state.imagesortR} alt={this.state.nameR} />
							<br />
							<div className="imageChoice">
								<img src={this.state.imageR} alt={this.state.nameR} />
							</div>
						</div>
						<p className="nameChoice">{this.state.nameR}</p>
					</div>

					<Row className="blocCenter">
						{characters.map((character, index) => (
							<Col key={index} xs="3" sm="3" md="3" className="oneCharacter">
								<button
									className={'btnCharacter' + character.school}
									onClick={() => this.handleProfilChange(index)}
								>
									<img src={character.image} alt={character.name} />

									<p className="nameCarte">{character.name}</p>
									<br />
								</button>
							</Col>
						))}
					</Row>

					<div />

					{/*Lien pour commencer la partie*/}
					<div className="btnStart">
						<NavLink to="/page-de-Game">
							<button> Start</button>
						</NavLink>
					</div>
					<div className="btnReset">
						<button onClick={this.resetFunction}> Reset</button>;
					</div>
				</Container>
			</div>
		);
	}
}

export default ChoiceCharacter;
