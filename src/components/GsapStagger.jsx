import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  const tl = gsap.timeline({ repeat: -1 });
  useGSAP(() => {
    // tl.to(".stagger-box", {
    //   scale: 0.1,
    //   stagger: {
    //     each: 0.1,
    //     from: "end",
    //   },
    // }).to(
    //   ".stagger-box",
    //   {
    //     scale: 1,

    //     stagger: {
    //       from: "end",
    //       each: 0.1,
    //     },
    //   },
    //   0.5
    // );

    gsap.to(".stagger-box", {
      y: 300,
      rotation: 360,
      yoyo: true,
      duration: 1,
      repeat: -1,
      scale: 0.1,
      stagger: {
        each: 0.1,
        from: "end",
      },
    });
  }, []);

  return (
    <div className="flex gap-2">
      <div className="stagger-box w-20 h-20 bg-sky-50 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-100 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-200 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-300 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-400 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-500 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
      <div className="stagger-box w-20 h-20 bg-sky-600 rounded-2"></div>
    </div>
  );
};

export default GsapStagger;
