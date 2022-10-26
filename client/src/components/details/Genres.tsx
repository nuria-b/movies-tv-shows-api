import "./style.css";
import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import oneMovie from "./MoviesDetails";

// Crear context de genres
export const GenresContext = createContext(Genres);

// he pasado el props de movies details como parámetro a la función para que recoja la info de detalles de cada película por su id
function Genres({genreId}: any) {
  const { id }: any = useParams();
  const [genresList, setGenresList]: any = useState([id]);

  // Recoger los nombre de los genres de la api
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
      )
      .then((res: any) => {
        // console.log(res.data)
        setGenresList(res.data);
      });
  }, []);

  const value: any = {
    genresList,
    setGenresList,
  };

  // función para cambiar los id por los nombres v2
  // let genreName:any = "";
    
  // if (genreId = 28) {
  //   genreName = "Action";
  // } else if(genreId = 12){
  //   genreName = "Adventure";
  // } else if(genreId = 14){
  //   genreName = "Fantasy";
  // }
  // console.log(genreId[0])

  // función para cambiar los id por los nombres v1
  // if (genreId === 28) {
  //    genreName = <p>Action</p>;
  //  } else if(genreId === 12){
  //    genreName = <p>Adventure</p>;
  //  } else if(genreId === 14){
  //    genreName = <p>Fantasy</p>;
  // }

  return (
    <GenresContext.Provider value={value}>
      <section className="detail-subcontainer">
         <p className="detail-info">Genres: {genreId}</p>
         {/* <p>{genreName}</p> */}
      </section>
    </GenresContext.Provider>
  );
}
export default Genres;
