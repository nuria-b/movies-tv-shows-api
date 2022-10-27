import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { Link } from "react-router-dom";

// Crear context de related movies
export const RelatedContext = createContext(RelatedMovies);

export default function RelatedMovies({ movieId }: any) {
  const { id }: any = useParams();
  const [relatedMovies, setRelatedMovies]: any = useState([id]);

  // Coger los datos de related movies de la api
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1/movies/:id`
      )
      .then((res: any) => {
        setRelatedMovies(res.data.results);
      });
  }, []);

  const value: any = {
    relatedMovies,
    setRelatedMovies,
  };

  return (
    <RelatedContext.Provider value={value}>
      <section className="detail-title-film">
        <h3 className="detail-title">Related movies</h3>
      </section>
      <section className="related-container">
        {relatedMovies.slice(0, 4).map((related: any, i: any) => (
          <section key={i} className="related-card">
            {/*<Link to={`/movies/${movieId}`}>*/}
            <h2>{related.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${related.backdrop_path}`}
              alt={related.title}
              className="detail-image"
            />
            {/*</Link>*/}
          </section>
        ))}
      </section>
    </RelatedContext.Provider>
  );
}
