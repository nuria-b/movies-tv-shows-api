import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Crear context de genres
export const GenresContext = createContext(Genres);

function Genres() {
  const { id }: any = useParams();
  const [genresList, setGenresList]: any = useState([]);
  const [loading, setLoading]: any = useState(false);

  // Recoger los genres de la api v2
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
        setGenresList(res.data.results[id]);
        setLoading(false);
      });
  }, []);

  if (loading) return <section>Cargando...</section>;
  const value: any = {
    genresList,
    setGenresList,
  };

  // prueba con array de objetos para recoger info de genres
  const dataGenres: any = [
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

  return (
    <GenresContext.Provider value={value}>
      <section className="detail-subcontainer">
        <p className="detail-info">Genres: </p>
          <section className="genres-subcontainer">
            <p className="detail-info">{genresList.genre_ids}</p>
          </section>
      </section>
    </GenresContext.Provider>
  );
}
export default Genres;
