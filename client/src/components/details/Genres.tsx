import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Genres(props:any) {

  //const [genresList, setGenresList] = useState([]);

  // Recoger los genres de la api
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
    <p>{props.genres.name}</p>
  );
}
export default Genres;
