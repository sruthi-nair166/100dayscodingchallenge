import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";

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

        <section id="about">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;
