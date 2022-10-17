import "./style.css";
import { useEffect, createContext, useState } from "react";

// Crear context de Movies y Tv shows
export const MoviesContext = createContext(Movies);

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  // Fetch para recoger las películas populares de la api
  const fetchMoviesList = async (res:any) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const movies = await response.json();
    setMoviesList(movies.results); //para que muestre las películas populares de la api
    };

    useEffect(() => {
      fetchMoviesList(Movies);
    }, []);

    const value:any = {
      moviesList,
      setMoviesList,
    };
  
  return (
    <MoviesContext.Provider value={value}>
      <section className="Movies">
          <h1>I'm the Movies</h1>
      </section>
    </MoviesContext.Provider>
  );
}

