import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import content from "../../../content";

function About() {
    const styles = {
        main: {
            background: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, .9)), url("${content.about.aboutUsSection.backgroundImageUrl}")`,
            backgroundRepeat: "noRepeat",
            backgroundAttatchment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover"  
        }
    }

    return (
        <div>
            <Navbar site={content.links.about}/>
            <main style={styles.main} className="aboutMain">
                <div className="about--wrapper">
                    <h1>{content.about.aboutUsSection.sectionTitle}</h1>
                    <p className="aboutText">{content.about.aboutUsSection.sectionContent}</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About