import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Todolist from "./components/Todolist/Todolist.jsx";
import QuizApp from "./components/QuizApp/QuizApp.jsx";
import RockPaperScissors from "./components/Rock-Paper-Scissors/RockPaperScissors.jsx";
import Calculator from "./components/Calculator/Calculator.jsx";

const router = createBrowserRouter([
  {
    path: "/React-Projects/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"project-Calculator",
        element:<Calculator/>
      },
      {
        path: "project-rock-paper-scissors",
        element: <RockPaperScissors />,
      },
      {
        path: "project-quizapp",
        element: <QuizApp />,
      },
      {
        path: "project-todolist",
        element: <Todolist />,
      },
      {
        path: "project-counter",
        element: <Counter />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
