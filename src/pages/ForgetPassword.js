import React from "react";
import LeftPart from "../components/Login/LeftPart";
import ForgetPasswordC from "../components/Login/ForgetPasswordC";
import "../styles/Auth/Auth.css";

const ForgetPassword = (props) => {
    return (
        //ecrire le code ici
        <div className="auth-component" >
            <LeftPart />
            <ForgetPasswordC />
        </div>        
    )
};

export default ForgetPassword;