import "./style.css";
import { useEffect, createContext, useState } from "react";
import { Link } from "react-router-dom";


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
      <section>{moviesList.map(({movie, i}:any) => (
        <section className="movies" key={i}>
          <Link to="/movies/detail/:id">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <h3>Ranking: {movie.vote_average}</h3>
          </Link>
        </section>
      ))}
        
      </section>
    </MoviesContext.Provider>
  );
}

