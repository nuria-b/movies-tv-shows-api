import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedTvShows from "./RelatedTvShows";
import Genres from "./Genres";

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
    <section className="detail-background">
      <section className="detail-title-film">
        <h2 className="detail-title">{oneTv.name}</h2>
      </section>
      <section  className="detail-container">
        <div className="detail-card">
          <img src={`https://image.tmdb.org/t/p/w500${oneTv.backdrop_path}`} alt={oneTv.name} />
        </div>
        <div className="detail-subcontainer">
          <Genres genreId={oneTv.genre_ids} />
          <p className="info-peq"><span className="title-info">First air date: </span>{oneTv.first_air_date}</p>
          <p className="info-peq"><span className="title-info">Number of episodes: </span>{oneTv.number_of_episodes}</p>
          <p className="info-peq"><span className="title-info">Number of seasons: </span>{oneTv.number_of_seasons}</p>
          <p className="info-peq"><span className="title-info">Vote average: </span>{oneTv.vote_average}</p>
          <p className="info-peq"><span className="title-info">Vote count: </span> {oneTv.vote_count}</p>
        </div>
        <div className="detail-subcontainer overview">
          <p><span className="title-info">Overview:</span> {oneTv.overview}</p>
        </div>
      </section>
      <section>
      <RelatedTvShows tvId={oneTv.id} />
      </section>
    </section>
  );
}

export default TvShowsDetails;
