import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Crear context de genres
export const GenresContext = createContext(Genres);

function Genres(props: any) {
  const [genresList, setGenresList]: any = useState([]);
  const [loading, setLoading]: any = useState(false);

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
  const dataGenres: any = [
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

  return (
    <GenresContext.Provider value={value}>
      <section className="detail-subcontainer">
        <p className="detail-info">Genres: </p>
        {dataGenres.slice(0, 4).map((genres: any, i: any) => (
          <section key={i} className="genres-subcontainer">
            <p className="detail-info">{genres.name}</p>
          </section>
        ))}
      </section>
    </GenresContext.Provider>
  );
}
export default Genres;
