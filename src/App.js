import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import ExampleProjects from "./components/ExampleProjects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route
          exact
          path="/exampleprojects#homepage"
          element={<ExampleProjects />}
        ></Route>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
