import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#gsap-text", {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      ".para",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.4,
        stagger: 0.1,
      }
    );
  });

  return (
    <div className="p-5 mx-auto text-white w-[50%]">
      <h2 id="gsap-text" className="text-3xl mb-4 opacity-0 translate-y-10">
        GSAP Text{" "}
      </h2>
      <div className="space-y-3">
        <p className="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sunt
          mollitia? Quas iste nisi ratione, sint enim necessitatibus adipisci
          ullam.
        </p>
        <p className="para">
          Modi alias animi nisi incidunt cum aliquam ipsam. Adipisci, est.
          Voluptas, vitae saepe consequatur molestiae voluptates fugit cum odit
          sequi!
        </p>
        <p className="para">
          Deleniti quis, aspernatur laboriosam quam sed unde iusto earum saepe
          itaque necessitatibus, exercitationem distinctio dicta autem, corrupti
          perspiciatis porro amet!
        </p>
      </div>
    </div>
  );
};

export default GsapText;
