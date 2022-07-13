import React from "react";
import {NavLink} from "react-router-dom";

const ForgetPasswordC = (props) => {

    return (
        //ecrire le code ici
        <div className="right-part">
            <h1 className="name-app">OnlySchool</h1>
            <h1>Mot de passe oublié</h1>            
                
            <div className="form-switch">
                <form>
                    <input 
                        type="checkbox" 
                        name="roleUser"
                        className="roleUser-input form-check-input"
                        id="checkbox"
                    />
                    <label style={{paddingLeft: '10px'}} htmlFor="checkbox" for="flexSwitchCheckDefault" >Professeur</label>
                </form> 
            </div>

            <form className="d-flex flex-column align-items-center">
                <input 
                    type="text"
                    id="identifiant"
                    placeholder="Identifiant"
                    className="auth-input"
                    required
                />
                <input 
                    type="password"
                    id="password"
                    placeholder="Mot de passe"
                    className="auth-input"
                    required
                />
                <button className="auth-btn">
                    Nouveau mot de passe
                </button>
                <NavLink style={{fontSize: '14px'}} end to="/login" className="nav-link">Retour</NavLink>

            </form>
            
        </div>
    )
};

export default ForgetPasswordC;