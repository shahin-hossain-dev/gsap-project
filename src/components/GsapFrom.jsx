import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapFrom = () => {
  // gsap.from() হলো ২য় স্থান থেকে ১ম স্থানের দিকে আসে। ডিক্লিয়ার করা position থেকে 0 position এ আসবে।

  useGSAP(() => {
    gsap.from("#green-box", {
      x: 300,
      repeat: -1,
      yoyo: true,
      duration: 2, //2 sec
      rotation: 360,
      ease: "expo.in",
    });
  }, []);
  return (
    <div>
      <div id="green-box" className="w-20 h-20 rounded-lg bg-green-500"></div>
    </div>
  );
};

export default GsapFrom;
