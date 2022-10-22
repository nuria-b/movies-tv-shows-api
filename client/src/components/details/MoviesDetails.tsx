import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Genres from "./Genres";

function MoviesDetails() {
  const { id }: any = useParams();
  const [oneMovie, setOneMovie] = useState([id]);
  const [loading, setLoading] = useState(false);
  //const [genresList, setGenresList] = useState([]);

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
        //setGenresList(res.data.results[id]);
        setLoading(false);
      });
  }, []);

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

  if (loading) return <section>Cargando...</section>;

  return (
    <section className="FilmsDetails">
      <h1>Title: {oneMovie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${oneMovie.backdrop_path}`}
        alt={oneMovie.title}
      />
      <div>{dataGenres.map((g)=>{
	        return <Genres genre={g}/>
        })}
      </div>
      <p>Release date: {oneMovie.release_date}</p>
      <p>Duration (mins): {oneMovie.runtime}</p>
      <p>Overview: {oneMovie.overview}</p>
      <p>Vote average: {oneMovie.vote_average}</p>
      <p>Vote count: {oneMovie.vote_count}</p>
      <section>Related movies:</section>
    </section>
  );
}
export default MoviesDetails;
