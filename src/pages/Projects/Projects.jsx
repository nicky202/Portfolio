import "./Projects.scss";
import Card from "../../components/Card/Card";

import img1 from "../../assets/dversity.png";
import img2 from "../../assets/1.png";
import img3 from "../../assets/2.png";

import img4 from "../../assets/7.png";
import img5 from "../../assets/8.png";

import img6 from "../../assets/4.png";
import img7 from "../../assets/5.png";
import img8 from "../../assets/6.png";

import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";

const data1 = [img1, img2, img3];
const data2 = [img4, img5];
const data3 = [img6, img7, img8];
const data4 = [img9, img10, img11];

const Projects = () => {
  return (
    <div className="flex containerProjects">
      <h1>Projects</h1>
      <div className="projects flex">
        <Card
          img={data1}
          title="D-versity"
          link="https://github.com/assanscofe/Front-D-Versity.git"
          web=""
          techno={["ReactJs", "Mui/Material", "Javascript"]}
        />
        <Card
          img={data2}
          title="Travel Agency"
          link="https://github.com/nicky202/Travel-agency.git"
          techno={["NextJs", "Tailwind", "Daisyui", "Typescript"]}
          web=""
        />
        <Card
          img={data3}
          title="LandingPage-Fylo"
          link="https://github.com/nicky202/Landing-Page-Fylo.git"
          techno={["Html", "Css", "Javascript"]}
          web="https://classy-marigold-0f8591.netlify.app"
        />
        <Card
          img={data4}
          title="LandingPage-Clipboard"
          link="https://github.com/nicky202/Clipboard_landing_page.git"
          techno={["Html", "Css"]}
          web="https://nicky202.github.io/Clipboard_landing_page"
        />
      </div>
    </div>
  );
};

export default Projects;
