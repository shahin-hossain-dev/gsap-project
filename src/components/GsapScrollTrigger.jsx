import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  const helloBox = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      gsap.to(helloBox.current, {
        x: 500,
        scale: 2,
        rotation: 360,
        scrollTrigger: {
          trigger: helloBox.current,
          scrub: true,
          start: "bottom bottom", // object bottom যখন screen এর bottom এ hit করবে তখন scroll trigger start হবে।
          end: "top 20%", // object top যখন screen এর viewport এর প্রথম 20% এ hit করবে তখন scroll trigger off হবে।
        },
      });

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 400 * (boxes.indexOf(box) + 4),
          scale: 1.5,
          rotation: 360,
          borderRadius: "100%",

          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <div>
      <div className="min-h-screen">
        <h2 className="text-center py-5 text-white">
          Scroll trigger to the down
        </h2>
      </div>
      <div ref={scrollRef} className="min-h-screen ">
        <div className="stagger-box w-20 h-20 bg-rose-500 rounded z-10 "></div>
        <div className="stagger-box w-20 h-20 bg-yellow-400 rounded z-10 "></div>
      </div>
      <div className="h-screen ">
        <div ref={helloBox} className=" bg-yellow-300 rounded w-20 h-20"></div>
      </div>
      <div className="min-h-screen">
        <h2 className="text-center py-5 text-white">
          Scroll trigger to the top
        </h2>
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
