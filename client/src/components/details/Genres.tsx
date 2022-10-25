import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Crear context de genres
export const GenresContext = createContext(Genres);

function Genres() {
  const { id }: any = useParams();
  const [genresList, setGenresList]: any = useState([]);

  // Recoger los genres de la api v1
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US/`
  //     )
  //     .then((res: any) => {
  //       //console.log(res.data.results[id])
  //       setGenresList(res.data.results[id]);
  //     });
  // }, []);

  // Recoger los genres de la api v2
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1/movies/:id`
      )
      .then((res: any) => {
        //console.log(res.data.results[id])
        setGenresList(res.data.results[id]);
      });
  }, []);

  const value: any = {
    genresList,
    setGenresList,
  };
  //función para cambiar los id por los nombres v3 

  // función para cambiar los id por los nombres v2
  // let genreName:any = "";
  // if (genresList.genre_ids === 28) {
  //   genreName = "Action, Adventure, Fantasy";
  // }

  // función para cambiar los id por los nombres v1
  // if (genresList.genre_ids = 28) {
  //   genreName = <p>Action</p>;
  //  } else if(genresList.genre_ids = 12){
  //    genreName = <p>Adventure</p>;
  //  } else if(genresList.genre_ids = 14){
  //    genreName = <p>Fantasy</p>;
  // }

  return (
    <GenresContext.Provider value={value}>
      <section className="detail-subcontainer">

        {/* <p>Genres: {genresList.name}</p> */}

        <p className="detail-info">Genres: {genresList.genre_ids}</p>

        {/* <p className="detail-info">Genres: {genresList.genre_ids[0]}, {genresList.genre_ids[1]}, {genresList.genre_ids[2]}</p> */}

        {/* <p>Genres: {genreName}</p> */}

        {/*<p>{genresList.genre_ids[0]}</p>
        <p>{genresList.genre_ids[1]}</p>
        <p>{genresList.genre_ids[2]}</p>*/}
        {/*{genreName}*/}
      </section>
    </GenresContext.Provider>
  );
}
export default Genres;
