import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Genres() {
    const [genresList, setGenresList] = useState([]);
  
    // Recoger las movies de la api
    
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
    
    return (
        <p>Genres:
          {genresList.genres &&
            genresList.genres.slice(0, 5).map((genre:any, i:any) => (
              <span key={i} className="genres-item">
                {genre.name}
              </span>
            ))
          }
        </p>
    );
  }
  export default Genres;