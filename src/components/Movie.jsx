import React from "react";
import content from "../../content";
import { nanoid } from "nanoid";


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


function Movie({response, handleClick}) {
    const style = {
        background: `url("${content.apiImageUrl}${response.poster_path}")`,
        backgroundRepeat: "noRepeat",
        backgroundAttatchment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"  
    }

    return (
        <div className="movie" onClick={() => handleClick(response.id)}>
            <div className="image" style={style}>
                <div className="date">
                    {response.release_date}
                </div>
                <div className="genres">
                    {
                        response.genres.map((genre, index) => {
                            const styleGenre = {
                                background: content.movie.genres.find((colorGenre) => colorGenre.id === genre.id).color
                            }


                            return (
                                <div key={nanoid()} className={`genre`} style={styleGenre}>
                                    {genre.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="description">
                <div className="title">
                    <h3>{response.title}</h3>
                    <p>{response.tagline}</p>
                </div>
                <div className="rating">
                    <div className="ratingsIcon">
                        {content.movie.ratingsIcon}
                    </div>
                    <div className="voting">
                        {Math.floor(response.vote_average * 10)}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie