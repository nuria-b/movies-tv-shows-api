import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedMovies from "./RelatedMovies";
//import Genres from "./Genres";

// Crear context de genres
//export const GenresContext = createContext(MoviesDetails);

function MoviesDetails() {
  const { id }: any = useParams();
  const [oneMovie, setOneMovie]: any = useState([id]);
  const [loading, setLoading]: any = useState(false);
  const [genresList, setGenresList]: any = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1/movies/:id`
      )
      .then((res: any) => {
        //console.log(res.data.results[id])
        setOneMovie(res.data.results[id]);
        setLoading(false);
      });
  }, []);

  // Recoger los genres de la api v2
  /*
  const { genres=[] }:any = oneMovie;
  
  genres.forEach((genre:any) => {
    if (genre.id === true) {
      //return genre.name;
      console.log(genre.name);
    }
  });
  */

  // Recoger los genres de la api v1
  /*
  const fetchGenresList = async (res: any) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
    );
    const genres = await response.json();
    setGenresList(genres.results); //mostrar los genres
  };

  useEffect(() => {
    fetchGenresList(genresList);
  }, []);
  */
  const value: any = {
    genresList,
    setGenresList,
  };

  // prueba para recoger info de genres
  /*
  const dataGenres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];
  */

  if (loading) return <section>Cargando...</section>;

  return (

    <section className="details-background">
      
      <p>Id: {oneMovie.id}</p>
      <section className="detail-container">
        <div className="detail-subcontainer">
          <h1 className="detail-title">Title: {oneMovie.title}</h1>
          <img
          src={`https://image.tmdb.org/t/p/w500${oneMovie.backdrop_path}`}
          alt={oneMovie.title}  className="detail-image"
          />
        </div>
        <div className="detail-subcontainer">
          {/*}
            <GenresContext.Provider value={value}>
            <div>
              {genresList.slice(0, 4).map((genres: any, i: any) => (
                <p key={i}>{oneMovie.genre}</p>
              ))}
            </div>
            </GenresContext.Provider>
          */}
        </div>
        <div className="detail-subcontainer">
          <p className="detail-info">Release date: {oneMovie.release_date}</p>
          <p className="detail-info">Duration (mins): {oneMovie.runtime}</p>
          <p className="detail-info">Overview: {oneMovie.overview}</p>
          <p className="detail-info">Vote average: {oneMovie.vote_average}</p>
          <p className="detail-info">Vote count: {oneMovie.vote_count}</p>
        </div>
      </section>

      <RelatedMovies />

    </section>
  );
}
export default MoviesDetails;
