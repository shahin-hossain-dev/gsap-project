import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // gsap.to() হলো ১ম স্থান থেকে ২য় স্থানের দিকে যায়। অথাৎ 0 position থেকে declare করা position পর্যন্ত যাবে।

  useGSAP(() => {
    gsap.to(
      "#blue-box",
      {
        x: 250,
        repeat: -1, //-1 mean infinite
        yoyo: true,
        duration: 2,
        rotation: 360,
        ease: "power2.inOut",
        // stagger: 0.1,
      },
      []
    );
  });
  return (
    <div>
      <div id="blue-box" className="w-20 h-20 rounded-lg bg-blue-500"></div>
    </div>
  );
};

export default GsapTo;
