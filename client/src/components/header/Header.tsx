import "./index.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {

  return  (
    <div className="Header">
        <header>
          <Link to="/">
            <h1>The most populars Movies and TV Shows</h1>
          </Link>
        </header>
        <Navbar />
    </div>
  );
}

export default Header;
