import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#purple-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "10%",
      },
      {
        x: 250,
        repeat: -1, //-1 mean infinite
        yoyo: true,
        duration: 2,
        rotation: 360,
        borderRadius: "100%",
        ease: "bounce.inOut",
        // stagger: 0.1,
      },
      []
    );
  });

  return (
    <div>
      <div>
        <div
          id="purple-box"
          className="w-20 h-20 rounded-lg bg-purple-500"
        ></div>
      </div>
    </div>
  );
};

export default GsapFromTo;
