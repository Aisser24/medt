import React from "react";
import Navbar from "../Navbar";
import MovieCards from "../MovieCards";
import Footer from "../Footer";
import content from "../../../content";

function Classics() {
    return (
        <>
            <Navbar site={content.links.classics}/>
            <h1 className="classicMoviesTitle">Classics</h1>
            <MovieCards 
                sortBy={"popularity.desc"}
                page={"1"}
                primaryReleaseDateLte={"2000-01-01"}
                voteAverageGte={""}
                voteCountGte={"1000"}
            />
            <Footer />
        </>
    )
}

export default Classics