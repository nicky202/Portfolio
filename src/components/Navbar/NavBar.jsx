import { Link } from "react-router-dom";
import "./NavBar.scss";
import { FaBarsStaggered } from "react-icons/fa6";

import cv from "../../assets/CV - Nicky Rabesoa.pdf";

const NavBar = () => {
  const handleOpen = () => {
    let x = document.querySelector(".topnav");
    x.className === "topnav"
      ? (x.className += " responsive")
      : (x.className = "topnav");
  };

  return (
    <nav className="flex">
      <h2>R. Nicky</h2>
      <button onClick={handleOpen}>
        <FaBarsStaggered size={20} className="bar" />
      </button>
      <ul className="topnav">
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
