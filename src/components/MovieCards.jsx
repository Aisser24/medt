import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import content from "../../content";
import MovieDetails from "./MovieDetails";
import { nanoid } from "nanoid";

function MovieCards({
    sortBy,
    page, 
    primaryReleaseDateLte, 
    primaryReleaseDateGte,
    voteAverageGte,
    voteCountGte
}) {
    const [movieList, setMovieList] = useState([])
    const [movies, setMovies] = useState([])
    const [currentMovie, setCurrentMovie] = useState(null)
    const [currentPage, setCurrentPage] = useState(page)


    useEffect(() => {
        async function getData () {
            const res = await fetch(`${content.new.apiLink}?include_adult=false&include_video=false&language=en-US${"&page="+currentPage}${"&primary_release_date." + (primaryReleaseDateGte ? "gte=" + primaryReleaseDateGte : "lte=" + primaryReleaseDateLte)}${"&sort_by="+sortBy}${"&vote_average.gte="+voteAverageGte + "&vote_count.gte=" + voteCountGte}&api_key=${content.apiKey}`)

            console.log(`${content.new.apiLink}?include_adult=false&include_video=false&language=en-US${"&page="+currentPage}${"&primary_release_date." + (primaryReleaseDateGte ? "gte=" + primaryReleaseDateGte : "lte=" + primaryReleaseDateLte)}${"&sort_by="+sortBy}${"&vote_average.gte="+voteAverageGte + "&vote_count.gte=" + voteCountGte}&api_key=${content.apiKey}`)

            const apiData = await res.json()
            setMovieList(apiData.results)
        }

        getData()
    }, [currentPage])

    useEffect(() => {
        const fetchData = async () => {
          const responses = [];
          for (const obj of movieList) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${obj.id}?api_key=${content.apiKey}`);
            const data = await response.json()
            responses.push(data);
          }
          setMovies(responses);
        };
      
        fetchData();
    }, [movieList]);

    function handleClick(id) {
        !currentMovie ? setCurrentMovie(movies.find(movie => movie.id === id)) : 
        setCurrentMovie(null)
    }

    function changePage(next) {
        next === true
        ?
        setCurrentPage(prevCurrentPage => parseInt(prevCurrentPage, 10) + 1) 
        : 
        setCurrentPage(prevCurrentPage => prevCurrentPage > 1 ? parseInt(prevCurrentPage, 10) - 1 : prevCurrentPage)
        // console.log(currentPage, next)
    }

    return (
        <>
            {
                currentMovie && 
                <MovieDetails response={currentMovie} handleClick={handleClick}/>
            }

            {
                currentMovie === null &&
                <section className="movies-section">
                    <div className="mainMoviesContent">
                        {
                            movies.map((movie, index) => {
                                return (
                                    <Movie response={movie} handleClick={handleClick} key={nanoid()}/>
                                )
                            })
                        }
                    </div>
                    <div className="pageSwitchers">
                        <button onClick={() => changePage(false)} className="prevBtn">Prev.</button>
                        <p className="pageCounter">
                            {currentPage}
                        </p>
                        <button onClick={() => changePage(true)} className="nextBtn">Next</button>
                    </div>
                </section>
            }
        </>
    )
}

export default MovieCards