import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Footer from "./components/Footer"

function App() {
	return (
		<Router>
			<Navbar />
      <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/experience" element = {<Experience />} />
      <Route path = "/projects" element = {<Projects />} />
      <Route path = "/education" element = {<Education />} />
      </Routes>
      <Footer />
		</Router>
	);
}

export default App;
