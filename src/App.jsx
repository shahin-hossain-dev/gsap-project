import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div>
      <div className="flex-center">
        <p>Name center</p>
      </div>
    </div>
  );
}

export default App;
