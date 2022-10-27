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
    <section className="detail-background">
      <section className="detail-title-film">
        <h2 className="detail-title">{oneMovie.title}</h2>
      </section>

      <section className="detail-container">
        <div className="detail-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${oneMovie.backdrop_path}`}
            alt={oneMovie.title}
            className="detail-image"
          />
        </div>
        <div className="detail-subcontainer">
          <Genres genreId={oneMovie.genre_ids} />
          <p className="info-peq">
            <span className="title-info">Release date:</span>{" "}
            {oneMovie.release_date}
          </p>
          <p className="info-peq">
            <span className="title-info">Vote average: </span>
            {oneMovie.vote_average}
          </p>
          <p className="info-peq">
            <span className="title-info">Vote count: </span>
            {oneMovie.vote_count}
          </p>
        </div>
        <div className="detail-subcontainer overview">
          <p className="detail-info">
            <span className="title-info">Overview: </span>
            {oneMovie.overview}
          </p>
        </div>
      </section>
      <RelatedMovies movieId={oneMovie.id} />
    </section>
  );
}
export default MoviesDetails;
