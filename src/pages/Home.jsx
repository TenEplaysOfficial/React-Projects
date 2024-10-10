import { Link } from "react-router-dom";

function Home() {
  const projectData = [
    // Desc 300 char
    {
      title: "To-do list",
      description:
        "The Todo List component allows users to manage tasks effectively. It features an input field for adding new tasks and a Submit button. Users can view tasks in a list, with a Remove button for each task. Tasks are stored in local storage for persistence, and duplicates are prevented with an alert, ensuring an organized user experience.",
      link: "project-todolist",
    },

    {
      title: "Counter",
      description:
        "The Counter Project is a React app that teaches state management and user interaction. Users can increment, decrement, and reset a counter, demonstrating React's component-based structure. It showcases state handling with hooks, allowing real-time updates and responsive UIs, helping users grasp core React concepts.",
      link: "project-counter",
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
