import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutSection from "../AboutSection";
import ContactForm from "../contactForm";
import Footer from "../Footer";

function Home() {
    return (
        <>
            <Navbar site={"/"}/>
            <Hero />
            <AboutSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home