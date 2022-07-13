import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Menu = (props) => {
    return (
        //ecrire le code ici
        <div className="menu-component">

            <div>
                <div className="menu-card">
                    <a href="/moyenne">
                        <div className="bgc-card">
                            14.6
                        </div>
                        <h2>Moyenne générale</h2>
                    </a>
                </div>
                <div className="menu-card">
                    <a href="/retards">
                        <div className="bgc-card">
                            Maths
                        </div>
                        <h2>Prochain Cours</h2>
                    </a>
                </div>
            </div>

            <div>
                <div className="menu-card">
                    <a href="/retards">
                        <div className="bgc-card2">
                            <div>
                                16
                                <p className="cours-card2">Maths</p>
                            </div>
                            <div>
                                12
                                <p className="cours-card2">EPS</p>
                            </div>
                            <div>
                                13.5
                                <p className="cours-card2">SVT</p>
                            </div>
                        </div>
                        <h2>Retards injustifiés</h2>
                    </a>
                
                </div>
            </div>

            <div>
                <div className="menu-card">
                    <a href="/retards">
                        <div className="bgc-card">
                            1
                        </div>
                        <h2>Retards injustifiés</h2>
                    </a>
                </div>
                <div className="menu-card">
                    <a href="/pt">
                        <div className="bgc-card">
                            <FontAwesomeIcon icon={faUserGraduate} />
                        </div>
                        <h2>Mes notes</h2>
                    </a>
                </div>
            </div>
            
            <div>
                <div className="menu-card">
                    <a href="/pt">
                        <div className="bgc-card">
                            1
                        </div>
                        <h2>Agenda de la semaine</h2>
                    </a>
                </div>
                <div className="menu-card">
                    <a href="/pt">
                        <div className="bgc-card">
                            <FontAwesomeIcon icon={faGear} />
                        </div>
                        <h2>Réglages</h2>
                    </a>
                </div>
            </div>
            

            
        </div>
    )
};

export default Menu;