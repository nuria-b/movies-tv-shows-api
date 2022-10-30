import "./style.css";
import { useEffect, createContext, useState } from "react";
import { Link } from "react-router-dom";

// Crear context de Movies
export const MoviesContext = createContext(Movies);

export default function Movies({ movieId }: any) {
  const [moviesList, setMoviesList]: any = useState([]);
  // const [currentIndex, setCurrentIndex]:any = useState(0);

  // Recoger las movies de la api
  const fetchMoviesList = async (res: any) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const movies = await response.json();
    setMoviesList(movies.results); //mostrar las movies
    // console.log(`https://image.tmdb.org/t/p/w500${movies.results[0].backdrop_path}`);
  };

  useEffect(() => {
    fetchMoviesList(Movies);
  }, []);

  const value: any = {
    moviesList,
    setMoviesList,
  };

  // Recoger las imágenes
  // const slides = [
  //   { url: "https://image.tmdb.org/t/p/w500/y5Z0WesTjvn59jP6yo459eUsbli.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/aTovumsNlDjof7YVoU5nW2RHaYn.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/mMA2YNddowV8MZtxpbn0a7Yilum.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/ttkibtcAjoilW1PbTIFy9U9YOdB.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/2iGUavwv86Hubv3V5Iq4qEQXDfE.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/aIkG2V4UXrfkxMdJZmq30xO0QQr.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/60UN7vvcWWggLe0Uz9EFZJx718P.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/mjV9gpXO2R2SOYI4ChJZiu6F1OE.jpg"},
  //   { url: "https://image.tmdb.org/t/p/w500/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg"},
  // ];

  // Ir atrás o adelante en el slider
  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? moviesList.length - 1 : currentIndex - 1;
  //   console.log(newIndex)
  //   setCurrentIndex(newIndex);
  // };
  // const goToNext = () => {
  //   const isLastSlide = currentIndex === moviesList.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   console.log(newIndex)
  //   setCurrentIndex(newIndex);
  // };
  // const slideStylesWidthBackground:any = {
  //   backgroundImage: `https://api.themoviedb.org/3/movie/${[currentIndex]}/images?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
  // };
  // console.log(slideStylesWidthBackground)
  // https://api.themoviedb.org/3/movie/${[currentIndex]}/images?api_key=${import.meta.env.VITE_API_KEY}&language=en-US
  // https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${import.meta.env.VITE_API_KEY}&language=en-US

  return (
    <MoviesContext.Provider value={value}>
      <section>
        {/* <section>
          <div onClick={goToPrevious} className="left-arrow">
            ❰
          </div>
          <div onClick={goToNext} className="right-arrow">
            ❱
          </div>
        </section>
        <div style={slideStylesWidthBackground}></div> */}

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
      </section>
    </MoviesContext.Provider>
  );
}
