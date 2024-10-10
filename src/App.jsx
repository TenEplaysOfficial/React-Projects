import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./components/Counter/Counter";
import Todolist from "./components/Todolist/Todolist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-counter" element={<Counter />} />
      <Route path="/project-todolist" element={<Todolist />} />
    </Routes>
  );
}

export default App;
