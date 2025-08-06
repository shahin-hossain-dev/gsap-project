import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapTimeline = () => {
  //timeline diye multiple animation action akshathe kora jay
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 300,
      borderRadius: "50%",
      rotation: 360,
      ease: "back.inOut",
      duration: 2,
      rotation: 360,
    });
    timeline.to("#yellow-box", {
      y: 500,
      borderRadius: "10%",
      border: "10px solid red",
      duration: 2,
      ease: "back.inOut",
      scale: 2,
    });
    timeline.to("#yellow-box", {
      x: 600,
      borderRadius: "20px",
      rotation: 360,
      duration: 2,
      ease: "back.inOut",
      scale: 1,
    });
  });

  return (
    <div>
      <div>
        <div
          id="yellow-box"
          className="w-20 h-20 rounded-lg bg-yellow-500"
        ></div>
      </div>
    </div>
  );
};

export default GsapTimeline;
