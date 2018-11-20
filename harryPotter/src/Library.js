import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div className="accueilFond">
        <div className="intro">
          <p>
            Ta famille s'étant fait capturer par les sbires de Voldemort, tu vas
            devoir gagner la Coupe de feu afin de pouvoir les libérer.
          </p>
          <p>
            Pour cela, tu vas devoir utiliser les cartes sorts apparaissant à
            l'écran pour vaincre ton adversaire. Soit le premier a appuyer sur
            la touche qui t'es attribuée afin de pouvoir faire des dégâts à ton
            adversaire.
          </p>

          <NavLink to="/page-de-choicePerso" className="btnContinuer">
            <button> Continuer </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
