import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
    </div>
  );
}

export default App;
