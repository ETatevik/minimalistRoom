import React from 'react';
import {NavLink} from "react-router-dom";
import {MENU, menuActiveClassName} from "../../constants";

function Navbar({show, onCloseNavbar}) {
    const showNavbar = show ? 'show': '';

    return (
        <nav className={showNavbar}>
            <ul className="flex aic">
                {
                    MENU.map(({title, id, path}) => {
                        return (
                            <li className="navitem" key={`${id}_${title}_navbar`}>
                                <NavLink onClick={onCloseNavbar} to={path} className={({isActive}) =>
                                    isActive ? menuActiveClassName : ''}>
                                    {title}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Navbar;