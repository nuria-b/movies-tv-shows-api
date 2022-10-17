import "./style.css";
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function MoviesDetails() {
  const {id} = useParams()
  const [oneMovie, setOneMovie] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`)
      .then(res => {
        console.log(res.data)
        setOneMovie(res.data);
        setLoading(false)
      })
  }, [])

  return  (
    <div className="MoviesDetails">
        <h1>I'm the MoviesDetails</h1>
    </div>
  );
}

export default MoviesDetails;