import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import oneMovie from "./MoviesDetails";

// Crear context de genres
export const GenresContext = createContext(Genres);

// he pasado el props de movies details como parámetro a la función para que recoja la info de detalles de cada película por su id
function Genres({movieId}: any) {
  const { id }: any = useParams();
  const [genresList, setGenresList]: any = useState([]);

  // Recoger los nombre de los genres de la api
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
      )
      .then((res: any) => {
        console.log(res.data)
        //setGenresList(res.data);
      });
  }, []);

  const value: any = {
    genresList,
    setGenresList,
  };
  //función para cambiar los id por los nombres v3

  // función para cambiar los id por los nombres v2
  // let genreName:any = "";
  // if (genresList.genre_ids === 281214) {
  //   genreName = "Action, Adventure, Fantasy";
  // }

  // función para cambiar los id por los nombres v1
  // if (genresList.genre_ids === 28) {
  //    genreName = <p>Action</p>;
  //  } else if(genresList.genre_ids === 12){
  //    genreName = <p>Adventure</p>;
  //  } else if(genresList.genre_ids === 14){
  //    genreName = <p>Fantasy</p>;
  // }

  return (
    <GenresContext.Provider value={value}>
      <section className="detail-subcontainer">
         <p className="detail-info">Genres: {movieId}</p>

        {/* <p className="detail-info">Genres: {genresList.genres[0].name}</p> */}

        {/* <p className="detail-info">Genres: {genresList.genre_ids[0]}, {genresList.genre_ids[1]}, {genresList.genre_ids[2]}</p> */}

        {/* <p>Genres: {genreName}</p> */}

        {/*<p>{genresList.genre_ids[0]}</p>
        <p>{genresList.genre_ids[1]}</p>
        <p>{genresList.genre_ids[2]}</p>*/}
        {/* {genreName} */}

        {/* {genresList.map((genre: any, i: any) => (
          <section className="films-card" key={i}>
            <p className="detail-info">Genres: {genre.genre_ids}</p>
          </section>
        ))} */}
      </section>
    </GenresContext.Provider>
  );
}
export default Genres;
