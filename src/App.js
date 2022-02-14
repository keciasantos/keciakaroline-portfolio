import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Homepage />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            Kécia Santos
          </a>{" "}
          and is{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
