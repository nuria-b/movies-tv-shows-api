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

  // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1

  // Recoger las movies relacionadas de la api v1 ---> falta cambiar 436270 por el id de la movie -> ${oneMovie.id} ??

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1/movies/:id` //coge la movie id de la app, no de la api
      )
      .then((res: any) => {
        // console.log(res.data.results)
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
        <p className="related-title">Related movies: </p>
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
