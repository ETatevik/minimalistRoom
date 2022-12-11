import React, {useState} from 'react';
import Navbar from "./Navbar";
import Logo from "../Logo";
import {NavLink} from "react-router-dom";
import {menuActiveClassName, MODE_TYPE} from "../../constants";
import ContactUsButton from "../ContactUsButton";

function Header() {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const onToggleNavbar = () => {
        setToggleNavbar(!toggleNavbar);
    }
    const onCloseNavbar = () => {
        setToggleNavbar(false);
    }

    return (
        <header>
            <div className="container">
                <div className="navbar flex aic">
                    <NavLink onClick={onCloseNavbar} to="/" className={({isActive}) =>
                        isActive ? menuActiveClassName : ''}>
                        <Logo/>
                    </NavLink>
                    <div className="navbar_right ml-auto flex aic">
                        <Navbar show={toggleNavbar} onCloseNavbar={onCloseNavbar}/>
                        <button type="button" className={`btn btn_burger ${toggleNavbar ? 'active' : ''}`}  onClick={onToggleNavbar}>
                            <i className="burger_item"></i>
                        </button>
                        <ContactUsButton mode={MODE_TYPE.DARK} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;