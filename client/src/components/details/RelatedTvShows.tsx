import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { Link } from "react-router-dom";

// Crear context de related tv shows
export const RelatedTvContext = createContext(RelatedTvShows);

export default function RelatedTvShows({ tvId }: any) {
  const { id }: any = useParams();
  const [relatedTvShows, setRelatedTvShows]: any = useState([id]);

  // Coger los datos de related movies de la api
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${tvId}/similar?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1/movies/:id`
      )
      .then((res: any) => {
        setRelatedTvShows(res.data.results);
      });
  }, []);

  const value: any = {
    relatedTvShows,
    setRelatedTvShows,
  };

  return (
    <RelatedTvContext.Provider value={value}>
      <section className="detail-title-film">
        <h3 className="detail-title">Related TV shows</h3>
      </section>
      <section className="related-container">
        {relatedTvShows.slice(0, 4).map((related: any, i: any) => (
          <section key={i} className="related-card">
            {/*<Link to={`/tvshows/${tvId}`}>*/}
            <h2>{related.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${related.backdrop_path}`}
              alt={related.title}
              className="detail-image"
            />
            {/*</Link>*/}
          </section>
        ))}
      </section>
    </RelatedTvContext.Provider>
  );
}
