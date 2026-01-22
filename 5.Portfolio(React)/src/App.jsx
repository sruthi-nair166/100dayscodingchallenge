import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import QuoteMachine from "./assets/quote_machine.png";
import MarkdownPreviewer from "./assets/markdown_previewer.png";
import DrumMachine from "./assets/drum_machine.png";
import Calculator from "./assets/calculator.png";
import Pomodoro from "./assets/25+5_clock.png";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const projects = [
  {
    id: 1,
    title: "Quote Machine",
    desc: "A random quote generator that displays a new quote and changes the background color each time you click the 'New Quote' button.",
    image: QuoteMachine,
    alt: "preview of quote machine site",
    link: "https://codepen.io/bruhhh22211111/pen/RNwyppd",
  },
  {
    id: 2,
    title: "Markdown Previewer",
    desc: "A real-time Markdown preview tool that displays your formatted text below as you type.",
    image: MarkdownPreviewer,
    alt: "preview of markdown previewer site",
    link: "https://codepen.io/bruhhh22211111/pen/OPJdmxv",
  },
  {
    id: 3,
    title: "Drum Machine",
    desc: "An interactive web-based drum pad that plays different sounds when you press the corresponding buttons or keyboard keys. It includes visual feedback for each pad and displays the current sound being played.",
    image: DrumMachine,
    alt: "preview of drum machine site",
    link: "https://codepen.io/bruhhh22211111/pen/gbONgYL",
  },
  {
    id: 4,
    title: "Calculator",
    desc: "A fully functional calculator that supports basic arithmetic operations which handles both button clicks and keyboard input.",
    image: Calculator,
    alt: "preview of calculator site",
    link: "https://codepen.io/bruhhh22211111/pen/myyOPbG",
  },
  {
    id: 5,
    title: "25+5 Clock",
    desc: "A Pomodoro-style timer app with a 25-minute work session and a 5-minute break cycle. Users can start, pause, and reset the timer, as well as adjust session and break lengths.",
    image: Pomodoro,
    alt: "preview of 25+5 clock site",
    link: "https://codepen.io/bruhhh22211111/pen/MYYOXZV",
  },
];

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

        <section id="projects">
          <Projects projects={projects} />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
