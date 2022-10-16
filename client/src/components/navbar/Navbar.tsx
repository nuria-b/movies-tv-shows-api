import { Link } from "react-router-dom";
import Movies from "../films/Movies";
import TvShows from "../films/TvShows";
import style from "./style.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <button>
            <Link className="Nav-active" to="/movies">
              <p className="menu">Movies</p>
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link className="Nav-active" to="/tvshows">
              <p className="menu">TV Shows</p>
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;