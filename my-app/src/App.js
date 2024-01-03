import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import './App.css'; // assuming you are using CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/experience" element = {<Experience />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/education" element = {<Education />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;