import { Link } from "react-router-dom";

function Home() {
  const projectData = [
    {
      title: "Counter",
      description: "The Counter Project is a simple yet engaging application built using React that demonstrates the fundamentals of state management and user interaction. This project allows users to increment, decrement, and reset a counter, providing a hands-on experience with React's powerful component-based architecture.",
      link: "project-counter",
    },

    {
      title: "To-do list",
      description: "This is To-do list project",
      link: "project-todolist",
    },
  ];

  return (
    <>
      <h1 className="title-big">Projects</h1>
      <div className="projects-item">
        {projectData.map((details, i) => {
          return (
            <div key={i} className="project-card">
              <h2 className="title-mid">{details.title}</h2>
              <p className="description">{details.description}</p>
              <Link to={details.link} className="button">
                View
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
