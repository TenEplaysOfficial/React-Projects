import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';

const Counter = lazy(() => import('./pages/projects/Counter'));
const CountdownNewYear = lazy(
  () => import('./pages/projects/CountdownNewYear'),
);
const Calculator = lazy(() => import('./pages/projects/Calculator'));
const Todo = lazy(() => import('./pages/projects/Todo'));
const Toaster = lazy(() => import('./components/Toaster'));
const Toast = lazy(() => import('./pages/package/Toast'));
const FAQ = lazy(() => import('./pages/projects/FAQ'));
const ImageSlider = lazy(() => import('./pages/projects/ImageSlider'));
const CompoundComponent = lazy(
  () => import('./pages/projects/CompoundComponent'),
);

function App() {
  return (
    <Router>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Nav />
        <Suspense fallback={<h1 className="mt-10 text-center">Loading...</h1>}>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="countdown-newyear" element={<CountdownNewYear />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="todo" element={<Todo />} />
            <Route path="package/toast" element={<Toast />} />
            <Route path="accordion-faq" element={<FAQ />} />
            <Route path="image-slider" element={<ImageSlider />} />
            <Route path="compound-component" element={<CompoundComponent />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
