import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
