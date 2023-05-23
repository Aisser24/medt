import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutSection from "../AboutSection";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import content from "../../../content";

function Home() {
    return (
        <>
            <Navbar site={content.links.home}/>
            <Hero />
            <AboutSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home