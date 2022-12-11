import React from 'react';
import Navbar from "./Navbar";
import Logo from "../Logo";
import {NavLink} from "react-router-dom";
import {menuActiveClassName} from "../../constants";

function Header() {
    return (
        <header>
            <NavLink to="/" className={({isActive}) =>
                isActive ? menuActiveClassName : ''}>
                <Logo/>
            </NavLink>
            <Navbar/>
        </header>
    );
}

export default Header;