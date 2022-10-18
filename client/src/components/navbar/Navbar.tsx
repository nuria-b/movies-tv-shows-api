import { Link } from "react-router-dom";
import Movies from "../films/Movies";
import TvShows from "../films/TvShows";
import "./style.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="Nav-active" to="/movies">
            <button>
              <p className="menu-text">Movies</p>
            </button>
          </Link>
        </li>
        <li>
          <Link className="Nav-active" to="/tvshows">
            <button>
              <p className="menu-text">TV Shows</p>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
