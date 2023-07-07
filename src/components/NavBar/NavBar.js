import { Fragment } from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <Fragment>
      <div className="nav">
        <i class="fas fa-file"></i>
        <ul>
          <li>Home</li>
          <li>Books</li>
          <li>Add-Book</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default NavBar;
