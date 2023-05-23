import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MovieCards from "../MovieCards";


function Classics() {
    console.log(Date.now())

    return (
        <>
            <Navbar site={"/new-movies"}/>
            <h1 className="newMoviesTitle">New Movies</h1>
            <MovieCards 
                sortBy={"primary_release_date.desc"} 
                page={"1"} 
                primaryReleaseDateLte={"2023-05-22"}
                voteAverageGte={"5"}
                voteCountGte={"50"}
            />
            <Footer />
        </>
    )
}

export default Classics