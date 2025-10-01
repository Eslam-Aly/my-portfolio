import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WorkingSteps from "./components/WorkingSteps";
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
      <WorkingSteps />
      <Publications />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
