import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import ExampleProjects from "./components/ExampleProjects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route
          exact
          path="/exampleprojects"
          element={<ExampleProjects />}
        ></Route>
        {/* <Route path="/artigos" element={Artigos} /> */}
      </Routes>
    </div>
  );
}

export default App;
