import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Genres() {
  // haciendo prueba para recoger info de genres
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
  //    const [genresList, setGenresList] = useState([]);

  // Recoger las movies de la api
  /*    
    const fetchGenresList = async (res: any) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
      );
      const genres = await response.json();
      setGenresList(genres.results); //mostrar los genres
    };
  
    useEffect(() => {
      fetchGenresList(Genres);
    }, []);
    
    const value: any = {
      genresList,
      setGenresList,
    };
    */

  return (
    <div>
      {dataGenres.map((genre:any, i:any) => {
        <span key={i} className="genres-item">
          {genre.name}
        </span>;
      })}
      {/*{genresList.genres &&
            genresList.genres.slice(0, 5).map((genre:any, i:any) => (
              <span key={i} className="genres-item">
                {genre.name}
              </span>
            ))
          }*/}
    </div>
  );
}
export default Genres;
