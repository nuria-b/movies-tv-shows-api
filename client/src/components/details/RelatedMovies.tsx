import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Crear context de related movies
export const RelatedContext = createContext(RelatedMovies);

function RelatedMovies({movieId}: any) {
  const { id }: any = useParams();
  const [loading, setLoading]: any = useState(false);
  const [relatedMovies, setRelatedMovies]: any = useState([id]);

  // Coger los datos de related movies de la api
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1/movies/:id` 
      )
      .then((res: any) => {
        setRelatedMovies(res.data.results);
        setLoading(false);
      });
  }, []);

  const value: any = {
    relatedMovies,
    setRelatedMovies,
  };

  if (loading) return <section>Cargando...</section>;

  return (
    <RelatedContext.Provider value={value}>
      <section className="related-container">
        <h2 className="related-title">Related movies: </h2>
        {relatedMovies.slice(0, 4).map((related: any, i: any) => (
          <section key={i} className="related-subcontainer">
            <p className="related-info">{related.title}</p>
            <img
            src={`https://image.tmdb.org/t/p/w500${related.backdrop_path}`}
            alt={related.title}
            className="detail-image"
          />
          </section>
        ))}
      </section>
    </RelatedContext.Provider>
  );
}
export default RelatedMovies;
