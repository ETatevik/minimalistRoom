import React from 'react';
import {MODE_TYPE} from "../../constants";
import ContactUsButton from "../ContactUsButton";
import {contactUsSectionContent} from "../../utils/config";

function ContactUsSection() {
    const {
        title,
        subTitle
    } = contactUsSectionContent;

    return (
        <section className="contact_us_wrapper">
            <div className="container">
                <div className="contact_box flex">
                    {title &&
                        <div className="contact_box-left">
                            <h3 className="contact_box-title">{title}</h3>
                        </div>}
                    <div className="contact_box-right">
                        {subTitle && <h4 className="contact_box-subtitle">{subTitle}</h4>}
                        <ContactUsButton mode={MODE_TYPE.LIGHT}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsSection;