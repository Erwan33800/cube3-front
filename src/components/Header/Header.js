import React from "react";
import random_user from "../../assets/random-user.png";
import Deconnexion from "./Deconnexion";
import "../../styles/Header/Header.css";

const Header = (props) => {
    return (
        //ecrire le code ici
        <div className="header-component">
            <h2>OnlySchool</h2>

            <div className="d-flex">
                <img src={random_user} alt="random_user" style={{borderRadius : 20, height : 40, width: 40, marginRight: '20px'}}/>
                <h2>Bonjour, Édith</h2>
            </div>
            <Deconnexion />
        </div>
    )
};

export default Header;