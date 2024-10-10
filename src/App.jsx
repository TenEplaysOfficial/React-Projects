import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-counter" element={<Counter />} />
    </Routes>
  );
}

export default App;
