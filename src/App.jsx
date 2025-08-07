import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </div>
  );
}

export default App;
