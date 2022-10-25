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
  let genreName = "";

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

  if (loading) return <p>Cargando...</p>;

  const value: any = {
    genresList,
    setGenresList,
  };

  // función para cambiar los id por los nombres
  if (genresList.genre_ids === 28) {
    let genreName = <p>Action</p>;
  } else {
    let genreName = <p></p>;
}

  return (
    <GenresContext.Provider value={value}>
      <section className="detail-subcontainer">
        <p className="detail-info">Genres: </p>
        <p>{genresList.genre_ids[0]}</p>
        <p>{genresList.genre_ids[1]}</p>
        <p>{genresList.genre_ids[2]}</p>
        {genreName}
      </section>
    </GenresContext.Provider>
  );
}
export default Genres;
