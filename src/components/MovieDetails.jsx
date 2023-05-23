import React from "react";
import content from "../../content";

// const response = {
//     adult: false,
//     backdrop_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     belongs_to_collection: null,
//     budget: 165000000,
//     genres: [
//         {
//             id: 12, 
//             name: "Adventure"
//         }, 
//         {
//             id: 18, 
//             name: "Drama"
//         },
//         {
//             id: 878, 
//             name: "Science Fiction"
//         }
//     ],
//     homepage: "http://www.interstellarmovie.net/",
//     id: 157336,
//     imdb_id: "tt0816692",
//     original_language: "en",
//     original_title: "Interstellar",
//     overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel an…",
//     popularity: 141.988,
//     poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
//     production_companies: [
//         Object, 
//         Object, 
//         Object
//     ],
//     production_countries: [
//         {
//             iso_3166_1: "GB", 
//             name: "United Kingdom"
//         }, 
//         {
//             iso_3166_1: "US", 
//             name: "United States of America"
//         }
//     ],
//     release_date: "2014-11-05",
//     revenue: 701729206,
//     runtime: 169,
//     spoken_languages: [
//         {
//             english_name: "English", 
//             iso_639_1: "en", 
//             name: "English"
//         }
//     ],
//     status: "Released",
//     tagline: "Mankind was born on Earth. It was never meant to die here.",
//     title: "Interstellar",
//     video: false,
//     vote_average: 8.401,
//     vote_count: 31393,
// }

function MovieDetails ({response, handleClick}) {
    const style = {
        detailsContainer: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, .9)), url("${content.apiImageUrl}${response.backdrop_path}")`,
            backgroundRepeat: "noRepeat",
            backgroundAttatchment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover"  
        }
    }

    return (
        <div className="detailsContainer" style={style.detailsContainer}>
            <div className="back" onClick={handleClick}>
                <div className="backIcon">
                {content.movieDetails.backArrow}
                </div>
                Back
            </div>
            <div className="detailsWrapper">
            <div className="poster">
                <img src={`${content.apiImageUrl}${response.poster_path}`} alt={`${response.title} Poster`} />
            </div>
            <div className="detailsText">
                <div className="detailsTitle">
                    <div className="detailsMainTitle">
                        <h1>{response.title}</h1>
                        <p>{response.tagline}</p>
                    </div>
                    <div className="detailsMeta">
                        <ul>
                            <li>Release: {response.release_date}</li>
                            <li>Runtime: {response.runtime} min</li>
                        </ul>
                    </div>
                </div>
                <div className="detailsDesc">
                    {response.overview}
                </div>
                <div className="detailsGenres">
                    {
                        response.genres.map((genre, index) => {
                            const styleGenre = {
                                background: content.movie.genres.find((colorGenre) => colorGenre.id === genre.id).color
                            }


                            return (
                                <div key={index} className={`genre`} style={styleGenre}>
                                    {genre.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default MovieDetails