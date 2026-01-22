import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <section id="intro">
          <Intro />
        </section>
      </main>
    </>
  );
}

export default App;
