import { Link } from "react-router-dom";
import { projectData } from "../Data/ProjectsData";

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="title-big">Projects</h1>
        <div className="projects-item">
          {projectData.map((details, i) => {
            return (
              <div key={i} className="project-card">
                <h2 className="title-mid reduce-font">{details.title}</h2>
                <p className="description">{details.description}</p>
                <Link to={details.link} className="button">
                  View
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
