import React from 'react';
import {gallerySectionContent} from "../../utils/config";

function GalleryGridSection() {
    return (
        <section className="gallery_section">
            <div className="container">
                {gallerySectionContent?.length > 0 &&
                    <div className="gallery_grid row">
                        {gallerySectionContent.map(({id, url, alt, isFull}) => {
                            const pictureUrl = require(`../../${url}`);
                            const classnames = `col-12 ${!isFull ? 'col-md-6' : ''}`;

                            return pictureUrl ? (
                                <div key={`galleryImg_${id}_${alt}`} className={classnames}>
                                    <img src={pictureUrl} alt={alt}/>
                                </div>) : null
                        })
                        }
                    </div>}
            </div>
        </section>
    );
}

export default GalleryGridSection;