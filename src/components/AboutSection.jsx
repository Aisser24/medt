import React from "react";
import content from "../../content";
import { Link } from "react-router-dom";

function AboutSection() {
    return (
        <section className="about-section">
            <div className="wrapper">
                <h2>{content.home.aboutSection.title}</h2>
                <p>
                    {
                        content.home.aboutSection.content
                    }
                </p>
                {/* <button className="">{content.home.aboutSection.buttonText}</button> */}

                <Link to={content.home.aboutSection.buttonTarget} className="about--btn">{content.home.aboutSection.buttonText}</Link>
            </div>
        </section>
    )
}

export default AboutSection