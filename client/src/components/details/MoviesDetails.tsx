import "./style.css";
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Container, Box } from "@mui/material";

function MoviesDetails() {
  const {id}: any = useParams()
  const [oneMovie, setOneMovie] = useState([id])
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    axios.get( `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1/movies/:id`)
      .then((res:any) => {
        //console.log(res.data.results[id])
        setOneMovie(res.data.results[id]);
        setLoading(false)
      })
  }, [])

  if (loading) return <section>Cargando...</section>

  return  (

    <section className="MoviesDetails">
        <h1>Title: {oneMovie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${oneMovie.backdrop_path}`} alt={oneMovie.title} />
        <p>Genres:</p>
        <p>Release date: {oneMovie.release_date}</p>
        <p>Duration (mins): {oneMovie.runtime}</p>
        <p>Overview: {oneMovie.overview}</p>
        <p>Votes: {oneMovie.vote_average}</p>
        <p>Favourites: {oneMovie.vote_count}</p>
        <section>Related movies:</section>
    </section>
    
  );
}
export default MoviesDetails;
