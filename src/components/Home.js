import React from 'react';
import HeroSection from "./sectiones/HeroSection";
import InformationSection from "./sectiones/InformationSection";
import GalleryGridSection from "./sectiones/GalleryGridSection";
import ContactUsSection from "./sectiones/ContactUsSection";

function Home() {
    return (
        <article className="home_wrapper">
            <HeroSection/>
            <InformationSection/>
            <GalleryGridSection/>
            <ContactUsSection/>
        </article>
    );
}

export default Home;