import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <h1>Movies & TV Shows</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
