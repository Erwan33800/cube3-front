import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Deconnexion() {

    return (
        <>
            <button
                className="deconnexion-btn"
            >
                <FontAwesomeIcon icon={faLock} />
            </button>
        </>
    );
}

export default Deconnexion;