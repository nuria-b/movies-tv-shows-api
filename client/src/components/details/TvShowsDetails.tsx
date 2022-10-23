import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TvShowsDetails() {
  const { id }: any = useParams();
  const [oneTv, setOneTv]: any = useState([id]);
  const [loading, setLoading]: any = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://api.themoviedb.org/3/tv/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US/tvshows/:id`
      )
      .then((res: any) => {
        //console.log(res.data.results[id])
        setOneTv(res.data.results[id]);
        setLoading(false);
      });
  }, []);

  if (loading) return <section>Cargando...</section>;

  return (
    <section className="FilmsDetails">
      <h1>Title: {oneTv.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${oneTv.backdrop_path}`}
        alt={oneTv.title}
      />
      <p>
        Genres:
        {/*{oneTv.genres &&
          oneTv.genres.slice(0, 5).map((genre:any, i:any) => (
            <span key={i} className="genres__item">
              {genre.name}
            </span>
          ))
        }*/}
      </p>
      <p>First air date: {oneTv.first_air_date}</p>
      <p>Number of episodes: {oneTv.number_of_episodes}</p>
      <p>Number of seasons: {oneTv.number_of_seasons}</p>
      <p>Overview: {oneTv.overview}</p>
      <p>Vote average: {oneTv.vote_average}</p>
      <p>Vote count: {oneTv.vote_count}</p>
      <p>Web: {oneTv.homepage}</p>
      <section>Related tv shows:</section>
    </section>
  );
}

export default TvShowsDetails;
