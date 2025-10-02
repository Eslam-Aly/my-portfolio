import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Publications from "./components/Publications";

function App() {
  return (
    <main className="font-primary overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
