import React from 'react';
import {footerContent} from "../../utils/config";

function SocialLinks() {
    const {
        socialLinksTitle,
        socialLinks
    } = footerContent;

    return (
        <div className="social_box">
            {socialLinksTitle && <h3 className="social_links_title">{socialLinksTitle}</h3>}
            {socialLinks?.length > 0 &&
                <ul className="flex social_links">
                    {socialLinks.map(({id, title, url, icon}) => {
                        const iconUrl = require(`../../${icon}`);

                        return (
                            <li key={`${id}__${title}__${url}`}>
                                <a href={url} title={title} target="_blank">
                                    {iconUrl && <img src={iconUrl} alt={title}/>}
                                </a>
                            </li>)
                    })}
                </ul>
            }
        </div>
    );
}

export default SocialLinks;