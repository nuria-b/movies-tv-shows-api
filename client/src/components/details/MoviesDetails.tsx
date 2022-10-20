import "./style.css";
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
function MoviesDetails() {
  const {id}: any = useParams()
  const [oneMovie, setOneMovie] = useState([id])
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    axios.get( `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1/movies/:id`)
      .then((res:any) => {
        //console.log(res.data.results[id])
        setOneMovie(res.data.results[id]);
        setLoading(false)
      })
  }, [])
  //const findMovies = oneMovie.filter(movies => movies.title === id);
  if (loading) return <section>Cargando...</section>
  return  (
    <section className="MoviesDetails">
        <h1>{oneMovie.title}</h1>
    </section>
  );
}
export default MoviesDetails;