import React from "react";
import {NavLink} from "react-router-dom";

const LoginComponent = (props) => {

    return (
        //ecrire le code ici
        <div className="right-part">
            <h1 className="name-app">OnlySchool</h1>
            <h1>Se connecter</h1>            
                
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
                    Connexion
                </button>
                <NavLink style={{fontSize: '14px'}} end to="/forget-password" className="nav-link">Mot de passe oublié</NavLink>

            </form>
            
        </div>
    )
};

export default LoginComponent;