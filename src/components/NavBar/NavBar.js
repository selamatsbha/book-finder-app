import { Fragment } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Fragment>
      <div className="nav">
        <h3>Book Finder</h3>
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/book">
              Books
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/add-book"
            >
              Add-Book
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default NavBar;
