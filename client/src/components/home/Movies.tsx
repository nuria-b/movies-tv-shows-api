import "./style.css";
import { useEffect, createContext, useState } from "react";
import { Link } from "react-router-dom";

// Crear context de Movies
export const MoviesContext = createContext(Movies);

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Recoger las movies de la api
  const fetchMoviesList = async (res: any) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const movies = await response.json();
    setMoviesList(movies.results); //mostrar las movies
  };

  useEffect(() => {
    fetchMoviesList(Movies);
  }, []);
  
  const value: any = {
    moviesList,
    setMoviesList,
  };

  // Estilo para el contenedor del slider

  return (
    <MoviesContext.Provider value={value}>
      <section className="films-container">
        {moviesList.map((movie: any, i: any) => (
          <section className="films-card" key={i}>
            <Link to={`/movies/${i}`}>
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
