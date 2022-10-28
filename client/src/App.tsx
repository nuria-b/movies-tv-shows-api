import React from "react";
import "./style.css";
//import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Movies from "./components/home/Movies";
import TvShows from "./components/home/TvShows";
import MoviesDetails from "./components/details/MoviesDetails";
import TvShowsDetails from "./components/details/TvShowsDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import InnerContent from "./components/InnerContent";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to="movies" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route>
            <Route path="/movies/:id" element={<MoviesDetails />} />
            <Route path="/tvshows/:id" element={<TvShowsDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
