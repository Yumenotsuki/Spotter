import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import carteGryffondor from "./img/carte_Gryffondor.jpg";
import carteSerpentard from "./img/carte_Serpentard.jpg";
import carteSerdaigle from "./img/carte_Serdaigle.jpg";
import cartePoufsouffle from "./img/carte_Poufsouffle.png";
import Gryfeffect from "./img/Geffect.png";
import Serpeffect from "./img/Seffect.png";
import Serdeffect from "./img/SEeffect.png";
import Poufeffect from "./img/Peffect.png";
import GinnyPortrait from "./img/ginny.jpg";
import LeePortrait from "./img/lee.jpg";
import PansyPortrait from "./img/pansy.jpg";
import GoylePortrait from "./img/goyle.jpg";
import ChoPortrait from "./img/cho.jpeg";
import MichaelPortrait from "./img/michael.jpg";
import HannahPortrait from "./img/hannah.png";
import ErniePortrait from "./img/ernie.jpg";

const charactersMulti = [
  {
    name: "Ginny",
    school: "Gryffondor",
    imagesort: carteGryffondor,
    image: GinnyPortrait,
    /* "https://images.ctfassets.net/bxd3o8b291gf/3AlTt150x280UeQ24M4wmO/4843afd8458298d51291036734e6999a/GinnyWeasley_WB_F5_GinnyWeasleyPointingWand_Still_080615_Land.jpg?w=320&h=320&fit=thumb&f=center&q=85", */
    cardeffect: Gryfeffect
  },
  {
    name: "Lee",
    school: "Gryffondor",
    imagesort: carteGryffondor,
    image: LeePortrait,
    /* "https://vignette.wikia.nocookie.net/harrypotter/images/e/e8/Lee_Jordan.jpg/revision/latest?cb=20100121154759&path-prefix=fr", */
    cardeffect: Gryfeffect
  },
  {
    name: "Pansy",
    school: "Serpentard",
    imagesort: carteSerpentard,
    image: PansyPortrait,
    /*       "https://img.buzzfeed.com/buzzfeed-static/static/2015-08/3/12/enhanced/webdr01/original-grid-image-13819-1438619305-2.jpg?crop=521:781;17,0&downsize=400:*&output-format=auto&output-quality=auto",*/ cardeffect: Serpeffect
  },
  {
    name: "Goyle",
    school: "Serpentard",
    imagesort: carteSerpentard,
    image: GoylePortrait,
    /*  "http://images6.fanpop.com/image/polls/1520000/1520135_1446274079948_full.jpg?v=1446274090", */
    cardeffect: Serpeffect
  },
  {
    name: "Cho",
    school: "Serdaigle",
    imagesort: carteSerdaigle,
    image: ChoPortrait,
    /*     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQUbct6RXUulHF1NlJt-I-3-o6vpVth257KssBUbFsIBjUecQ", */
    cardeffect: Serdeffect
  },
  {
    name: "Michael",
    school: "Serdaigle",
    imagesort: carteSerdaigle,
    image: MichaelPortrait,
    /*  "https://vignette.wikia.nocookie.net/harrypotter/images/e/e5/Michael_Corner.jpg/revision/latest?cb=20101104174315&path-prefix=fr", */
    cardeffect: Serdeffect
  },
  {
    name: "Hannah",
    school: "Poufsouffle",
    imagesort: cartePoufsouffle,
    image: HannahPortrait,
    /*       "https://vignette.wikia.nocookie.net/p__/images/4/4d/Hannah_Abbott.png/revision/latest?cb=20120714215041&path-prefix=protagonist",*/
    cardeffect: Poufeffect
  },
  {
    name: "Ernie",
    school: "Poufsouffle",
    imagesort: cartePoufsouffle,
    image: ErniePortrait,
    /*       "https://vignette.wikia.nocookie.net/harrypotter/images/a/aa/Ernie_Macmillan.jpg/revision/latest?cb=20100121135621&path-prefix=fr",*/
    cardeffect: Poufeffect
  }
];

class ChoiceCharacterMulti extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      nameL: null,
      nameR: null,
      nameLB: null,
      nameRB: null,
      image: null,
      imageL: null,
      imageR: null,
      imageLB: null,
      imageRB: null,
      school: null,
      schoolL: null,
      schoolR: null,
      schoolLB: null,
      schoolRB: null,
      imagesortL: null,
      imagesortR: null,
      imagesortLB: null,
      imagesortRB: null,
      effectL: null,
      effectR: null,
      effectLB: null,
      effectRB: null
    };
  }

  // fonction qui determine la selection du 1er puis du 2eme perso
  handleProfilChange = indexCharacter => {
    if (this.state.imageL === null) {
      this.givePlayerLeft(
        charactersMulti[indexCharacter].image,
        charactersMulti[indexCharacter].school,
        charactersMulti[indexCharacter].name,
        charactersMulti[indexCharacter].cardeffect
      );

      this.setState({
        imageL: charactersMulti[indexCharacter].image,
        schoolL: charactersMulti[indexCharacter].school,
        nameL: charactersMulti[indexCharacter].name,
        imagesortL: charactersMulti[indexCharacter].imagesort,
        effectL: charactersMulti[indexCharacter].cardeffect
      });
    } else if (
      this.state.nameL !== charactersMulti[indexCharacter].name &&
      this.state.imageR === null
    ) {
      this.givePlayerRight(
        charactersMulti[indexCharacter].image,
        charactersMulti[indexCharacter].school,
        charactersMulti[indexCharacter].name,
        charactersMulti[indexCharacter].cardeffect
      );

      this.setState({
        imageR: charactersMulti[indexCharacter].image,
        schoolR: charactersMulti[indexCharacter].school,
        nameR: charactersMulti[indexCharacter].name,
        imagesortR: charactersMulti[indexCharacter].imagesort,
        effectR: charactersMulti[indexCharacter].cardeffect
      });
    } else if (
      this.state.imageLB === null &&
      this.state.nameL !== charactersMulti[indexCharacter].name &&
      this.state.nameR !== charactersMulti[indexCharacter].name
    ) {
      this.givePlayerLeftBottom(
        charactersMulti[indexCharacter].image,
        charactersMulti[indexCharacter].school,
        charactersMulti[indexCharacter].name,
        charactersMulti[indexCharacter].cardeffect
      );

      this.setState({
        imageLB: charactersMulti[indexCharacter].image,
        schoolLB: charactersMulti[indexCharacter].school,
        nameLB: charactersMulti[indexCharacter].name,
        imagesortLB: charactersMulti[indexCharacter].imagesort,
        effectLB: charactersMulti[indexCharacter].cardeffect
      });
    } else {
      if (
        this.state.nameLB !== charactersMulti[indexCharacter].name &&
        this.state.nameL !== charactersMulti[indexCharacter].name &&
        this.state.nameR !== charactersMulti[indexCharacter].name
      ) {
        this.givePlayerRightBottom(
          charactersMulti[indexCharacter].image,
          charactersMulti[indexCharacter].school,
          charactersMulti[indexCharacter].name,
          charactersMulti[indexCharacter].cardeffect
        );

        this.setState({
          imageRB: charactersMulti[indexCharacter].image,
          schoolRB: charactersMulti[indexCharacter].school,
          nameRB: charactersMulti[indexCharacter].name,
          imagesortRB: charactersMulti[indexCharacter].imagesort,
          effectRB: charactersMulti[indexCharacter].cardeffect
        });
      } else return;
    }
  };

  resetFunction = () => {
    this.setState({
      imageL: null,
      imageR: null,
      imageLB: null,
      imageRB: null,
      nameL: null,
      nameR: null,
      nameLB: null,
      nameRB: null,
      schoolL: null,
      schoolR: null,
      schoolLB: null,
      schoolRB: null,
      effectL: null,
      effectR: null,
      effectLB: null,
      effectRB: null,
      imagesortL: null,
      imagesortR: null,
      imagesortLB: null,
      imagesortRB: null
    });
  };

  // fonctions qui appellent les callback (App)
  givePlayerRight = (image, school, name, effect) => {
    this.props.pedroRight(image, school, name, effect);
  };
  givePlayerLeft = (image, school, name, effect) => {
    this.props.pedroLeft(image, school, name, effect);
  };
  givePlayerLeftBottom = (image, school, name, effect) => {
    this.props.pedroLeftBottom(image, school, name, effect);
  };

  givePlayerRightBottom = (image, school, name, effect) => {
    this.props.pedroRightBottom(image, school, name, effect);
  };

  render() {
    return (
      <div className="choicePageMulti">
        <div className="blocLeftMulti">
          <div className="choiceLT">
            <div className="imageName">
              <p className="nameChoiceLeft">{this.state.nameL}</p>
              <img src={this.state.imageL} alt="" />
            </div>
            <img className="houseImgLeft" src={this.state.imagesortL} alt="" />
          </div>
          <div className="choiceLT">
            <div className="imageName">
              <p className="nameChoiceLeft">{this.state.nameLB}</p>
              <img src={this.state.imageLB} alt="" />
            </div>
            <img className="houseImgLeft" src={this.state.imagesortLB} alt="" />
          </div>
        </div>
        <div className="blocRightMulti">
          <div className="choiceRB">
            <img className="houseImgRight" src={this.state.imagesortR} alt="" />
            <div className="imageName">
              <p className="nameChoiceLeft">{this.state.nameR}</p>
              <img src={this.state.imageR} alt="" />
            </div>
          </div>
          <div className="choiceRB">
            <img
              className="houseImgRight"
              src={this.state.imagesortRB}
              alt=""
            />{" "}
            <div className="imageName">
              <p className="nameChoiceLeft">{this.state.nameRB}</p>
              <img src={this.state.imageRB} alt="" />
            </div>
          </div>
        </div>

        {/*           <div className="carteLeftMulti">
            <img className="characterLeft" src={this.state.imageL} alt="" />
            <img className="houseImgLeft" src={this.state.imagesortL} alt="" />
          </div>
          <br />
          <p className="nameChoiceLeft">{this.state.nameL}</p>
        </div>
        <div className="blocLeftBottom">
          <div className="carteLeftBottom">
            <img
              className="characterLeftBottom"
              src={this.state.imageLB}
              alt=""
            />
            <img
              className="houseImgLeftBottom"
              src={this.state.imagesortLB}
              alt=""
            />
          </div>
          <br />
          <p className="nameChoiceLeftBottom">{this.state.nameLB}</p> */}

        {/*         <div className="blocRightMulti">
          <div className="carteRightMulti">
            <img className="houseImgRight" src={this.state.imagesortR} alt="" />
            <img className="characterRight" src={this.state.imageR} alt="" />
          </div>
          <br />
          <p className="nameChoiceRight">{this.state.nameR}</p>
        </div>
        <div className="blocRightBottom">
          <div className="carteRightBottom">
            <img
              className="houseImgRightBottom"
              src={this.state.imagesortRB}
              alt=""
            />
            <img
              className="characterRightBottom"
              src={this.state.imageRB}
              alt=""
            />
          </div>
          <br />
          <p className="nameChoiceRightBottom">{this.state.nameRB}</p>
        </div> */}
        <div className="blocCenterMulti">
          {charactersMulti.map((character, index) => (
            <div className="oneCharacterMulti">
              <button
                className={"btnCharacterMulti" + character.school}
                onClick={() => this.handleProfilChange(index)}
              >
                <img src={character.image} />

                <p className="nameChoiceCenter">{character.name}</p>
                <br />
              </button>
            </div>
          ))}
        </div>
        <div />
        {/*Lien pour revenir à l'accueil*/}


        {/*Lien pour commencer la partie*/}
        <div className="btnStartMulti">
          <NavLink to="/page-de-GameMulti">
            <button> Start</button>
          </NavLink>
        </div>
        <div className="btnResetMulti">
          <button onClick={this.resetFunction}> Reset</button>
        </div>
      </div>
    );
  }
}

export default ChoiceCharacterMulti;
