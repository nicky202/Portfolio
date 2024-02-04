import { Link } from "react-router-dom";
import "./NavBar.scss";

import cv from "../../assets/CV - Nicky Rabesoa.pdf";

const NavBar = () => {
  return (
    <nav className="flex">
      <h2>R. Nicky</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href={cv}>Resume</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
