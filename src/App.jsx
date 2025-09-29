import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WorkingSteps from "./components/WorkingSteps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="font-primary overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingSteps />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
