import "./App.css";
import "./assets/css/style.css";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Home />
      <div class="footer">
        <a href="#">Terms of use</a>
        <a href="#">Privacy &amp; cookies</a>
        <a
          href="#"
          style={{
            letterSpacing: "3px",
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          ...
        </a>
      </div>
    </div>
  );
}

export default App;
