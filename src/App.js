import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
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
        <div class="social-link">
          <span>
            <a
              href="https://github.com/keciasantos"
              target="_blank"
              title="GitHub page - Kécia Santos"
              alt="GitHub page"
            >
              <i class="fab fa-github-square"></i>
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/keciasantos/"
              target="_blank"
              title="Linkedin page - Kécia Santos"
              alt="Linkedin page"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
