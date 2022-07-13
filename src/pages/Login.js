import React from "react";
import LeftPart from "../components/Login/LeftPart";
import LoginComponent from "../components/Login/LoginC";
import "../styles/Auth/Auth.css";

const Login = (props) => {
    return (
        //ecrire le code ici
        <div className="auth-component" >
            <LeftPart />
            <LoginComponent />
        </div>        
    )
};

export default Login;