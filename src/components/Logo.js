import React from 'react';
import {translations} from "../utils/config";
import mainLogo from "../assets/images/icons/logo.svg";
function Logo() {
    return (
        <div className="main_logo">
            <img  src={mainLogo} alt={translations.BRAND}/>
        </div>
    );
}

export default Logo;