import "./style.css";
import { useEffect, createContext, useState } from "react";
import { Link } from "react-router-dom";

// Crear context de Tv shows
export const TvShowsContext = createContext(TvShows);

function TvShows() {
  const [TvShowsList, setTvShowsList] = useState([]);

  // Recoger los TV shows de la api
  const fetchTvShowsList = async (res:any) => {
    const response = await fetch(
      `http://api.themoviedb.org/3/tv/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const tvs = await response.json();
    setTvShowsList(tvs.results); //para que muestre los tv shows populares de la api
  };

  useEffect(() => {
    fetchTvShowsList(TvShows);
  }, []);

  const value:any = {
    TvShowsList,
    setTvShowsList,
  };

  return  (
    <div className="TvShows">
        <h1>I'm the TvShows</h1>
    </div>
  );
}

export default TvShows;