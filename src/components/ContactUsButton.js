import React from 'react';
import {onHandlerContactUs} from "../utils/help";
import {translations} from "../utils/config";

function ContactUsButton({mode}) {
    return (
        <button type="button" onClick={onHandlerContactUs} className={`btn btn_${mode} btn_contact_us`}>
            {translations.CONTACT_US}
        </button>
    );
}

export default ContactUsButton;