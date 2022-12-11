import React from 'react';
import Logo from "../Logo";
import {MENU_ACTIVE_CLASS_NAME} from "../../constants";
import {NavLink} from "react-router-dom";
import {footerContent} from "../../utils/config";
import SendEmail from "./SendEmail";
import SocialLinks from "./SocialLinks";

function Footer() {
    const {
        title
    } = footerContent;

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="footer_box-left">
                            <NavLink to="/" className={({isActive}) =>
                                isActive ? MENU_ACTIVE_CLASS_NAME : ''}>
                                <Logo/>
                            </NavLink>
                            {title && <h2 className="footer_box_title">{title}</h2>}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="footer_box-right">
                            <SendEmail/>
                            <SocialLinks/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;