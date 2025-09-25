import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="font-primary overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default App;
