import "./style.css";
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function MoviesDetails() {
  const {id} = useParams()
  const [oneMovie, setOneMovie] = useState([])
  const [loading, setLoading] = useState(false)

  const GetMovieById = {   
    async getOneMovie(id:any){ 
        setLoading(true)
       const result = await axios.get (`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US/movies/${id}`)
       .then(res => {
        console.log(res.data)
        setOneMovie(res.data);
        setLoading(false)
      }) 
    }
  }

  /*useEffect(() => {
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      .then(res => {
        console.log(res.data)
        setOneMovie(res.data);
        setLoading(false)
      })
  }, [])*/

  useEffect(() => {
    GetMovieById.getOneMovie(id).then((res:any) => {
      let movie = res;
      setOneMovie(movie);
    });
  }, []);

  //const findMovies = oneMovie.filter(movies => movies.title === id);

  if (loading) return <section>Cargando...</section>

  return  (
    <section className="MoviesDetails">
        <h1>I'm the movie detail{/*{oneMovie.title}*/}</h1>
    </section>
  );
}

export default MoviesDetails;