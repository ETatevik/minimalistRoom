import React from 'react';
import {heroSectionContent} from "../../utils/config";

function HeroSection() {
    const {
        title,
        description,
        picture,
        picture_alt
    } = heroSectionContent;
    const pictureUrl = require(`../../${picture}`);

    return (
        <section className="hero_section">
            <div className="container text-center">
                {title && <h1 className="hero_title">{title}</h1>}
                {description &&
                    <div className="description hero_description">
                        <p>{description}</p>
                    </div>}
                {pictureUrl && <div className="hero_picture">
                    <img src={pictureUrl} alt={picture_alt}/>
                </div>}
            </div>
        </section>
    );
}

export default HeroSection;