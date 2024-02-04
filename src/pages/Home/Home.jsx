/* eslint-disable react/no-unescaped-entities */
import "./Home.scss";

import photo from "../../assets/photo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex containerHome">
      <div className="sectionDetails flex">
        <h1>Hey, I'm RABESOA Nicky</h1>
        <p>
          A Creative mind and Web Developer committed to bringing ideas to life
          in the digital realm.
        </p>
        <Link to="/projects">
          <button>projects</button>
        </Link>
      </div>
      <div className="sectionImage">
        <div className="image">
          <img src={photo} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
