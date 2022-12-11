import React from 'react';
import {informationSectionContent} from "../../utils/config";
import {customDateFormat} from "../../utils/help";

function InformationSection() {
    return (
        <section className="info_section">
            <div className="container">
                <div className="info_grid flex row">
                    {informationSectionContent.map(({id, title, descriptions, date, tag}) => {
                        return (
                            <div key={`${id}_${title}_infoSection`} className="info_card col col-md-6">
                                {title && <h2 className="info_card-title">{title}</h2>}
                                {descriptions?.length > 0 && <div className="description info_card-description">
                                    {descriptions.map((item, index) => <p key={`${id}_${index}_${title}`}>{item}</p>)}
                                </div>}
                                {(date || tag)  && <div className="info_card-more">
                                    {date && <span>{customDateFormat(date)}</span>}
                                    {tag && <span>{tag}</span>}
                                </div>}
                            </div>)
                    })}
                </div>
            </div>
        </section>
    );
}

export default InformationSection;