import "./index.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Movies from "./components/films/Movies";
import TvShows from "./components/films/TvShows";
import MoviesDetails from "./components/details/MoviesDetails";
import TvShowsDetails from "./components/details/TvShowsDetails";
import { BrowserRouter as Routes, Route } from "react-router-dom";

export default function App() {

  return  (
    <div className="App">
      <Header />
      {/*<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
        <Route path="/tvshows/:id" element={<TvShowsDetails />} />
      </Routes>*/}
    </div>
  );
}
