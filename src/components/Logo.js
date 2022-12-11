import React from 'react';
import {translations} from "../utils/config";
import mainLogo from "../assets/images/icons/logo.svg";
function Logo() {
    return (
        <span className="main_logo">
            <img  src={mainLogo} alt={translations.BRAND}/>
        </span>
    );
}

export default Logo;