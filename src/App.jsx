import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-black h-dvh"></div>
    </div>
  );
}

export default App;
