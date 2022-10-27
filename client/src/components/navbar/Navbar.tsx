import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";

function Navbar() {
  // mantener el color negro del botón activo al hacer click
  // const [activeMovie, setActiveMovie] = useState(false);
  // const [activeTvShow, setActiveTvShow] = useState(false);

  // const handleClickMovies = () => {
  //   setActiveMovie(!activeMovie);
  // };
  // const handleClickTvShows = () => {
  //   setActiveTvShow(!activeTvShow);
  // };

  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-active" to="/movies">
            <button {/*onClick={handleClickMovies}
        style={{ backgroundColor: activeMovie ? "black" : "white" }}*/}>
              <p className="menu-text">Movies</p>
            </button>
          </Link>
        </li>
        <li>
          <Link className="nav-active" to="/tvshows">
            <button {/*onClick={handleClickTvShows}
        style={{ backgroundColor: activeTvShow ? "black" : "white" }}*/}>
              <p className="menu-text">TV Shows</p>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
