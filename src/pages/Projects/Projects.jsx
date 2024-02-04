import "./Projects.scss";

const Projects = () => {
  return (
    <div className="flex containerProjects">
      <h1>Projects</h1>
      <div className="projects flex">
        <div className="cardProject">
          <div className="cardImage">
            <img src={img1} alt="photo" />
          </div>
          <div className="cardContent"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
