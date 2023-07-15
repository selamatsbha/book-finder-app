import { Fragment } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Fragment>
      <div className="nav">
        <h4>Book Finder</h4>
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
