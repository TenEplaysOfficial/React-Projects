import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./components/Counter/Counter";
import Todolist from "./components/Todolist/Todolist";
import NotFound from "./NotFound";
import QuizApp from "./components/QuizApp/QuizApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="project-counter" element={<Counter />} />
      <Route path="project-todolist" element={<Todolist />} />
      <Route path="project-quizapp" element={<QuizApp />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
