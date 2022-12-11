import React from 'react';
import HeroSection from "./sectiones/HeroSection";
import InformationSection from "./sectiones/InformationSection";
import GalleryGridSection from "./sectiones/GalleryGridSection";
import ContactUsSection from "./sectiones/ContactUsSection";

function Home() {
    return (
        <>
            <HeroSection/>
            <InformationSection/>
            <GalleryGridSection/>
            <ContactUsSection/>
        </>
    );
}

export default Home;