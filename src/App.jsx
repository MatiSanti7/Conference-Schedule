import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import CodeConduct from "./pages/CodeConduct";
import AM from "./pages/AccommodationMeals";
import CMS from "./pages/CMS";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/code-of-conduct" element={<CodeConduct />} />
        <Route path="/accommodation-meals" element={<AM />} />
        <Route path="/cms" element={<CMS />} />
      </Routes>
    </Router>
  );
}

export default App;
