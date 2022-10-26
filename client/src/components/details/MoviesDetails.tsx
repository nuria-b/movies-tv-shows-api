import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedMovies from "./RelatedMovies";
import Genres from "./Genres";

function MoviesDetails() {
  const { id }: any = useParams();
  const [oneMovie, setOneMovie]: any = useState([id]);
  const [loading, setLoading]: any = useState(false);

  // recoger los movies details de la api
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

  if (loading) return <section>Cargando...</section>;

  return (
    <section className="details-background">
      <p>Id: {oneMovie.id}</p>
      <section className="detail-container">
        <div className="detail-subcontainer">
          <h1 className="detail-title">Title: {oneMovie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${oneMovie.backdrop_path}`}
            alt={oneMovie.title}
            className="detail-image"
          />
        </div>
        <Genres movieId={oneMovie.genre_ids} />
        <div className="detail-subcontainer">
          <p className="detail-info">Release date: {oneMovie.release_date}</p>
          <p className="detail-info">Overview: {oneMovie.overview}</p>
          <p className="detail-info">Vote average: {oneMovie.vote_average}</p>
          <p className="detail-info">Vote count: {oneMovie.vote_count}</p>
        </div>
      </section>
      {/* <RelatedMovies /> */}
    </section>
  );
}
export default MoviesDetails;
