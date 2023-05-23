import React from "react";
import Navbar from "../Navbar";
import MovieCards from "../MovieCards";
import Footer from "../Footer";
import content from "../../../content";

function Upcoming() {
    return (
        <>
            <Navbar site={content.links.upcoming}/>
            <h1 className="upcomingMoviesTitle">Upcoming Movies</h1>
            <MovieCards 
                sortBy={"popularity.desc"}
                page={"1"}
                primaryReleaseDateGte={"2023-05-22"}
                voteAverageGte={""}
                voteCountGte={""}
            />
            <Footer />
        </>
    )
}

export default Upcoming