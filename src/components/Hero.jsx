import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroTextSplit = new SplitText(".title", { type: "chars, words" }); //split character by character
    const paragraph = new SplitText(".subtitle", { type: "lines" }); //split line by line

    heroTextSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // hero text animate
    gsap.from(heroTextSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: {
        each: 0.06,
      },
    });
    //paragraph animate
    gsap.from(paragraph.lines, {
      opacity: 0,
      duration: 1.5,
      yPercent: 100,
      delay: 1,
      ease: "expo.out",
      stagger: {
        each: "0.05",
      },
    });

    // left-right left animated
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".left-leaf", { y: -300 }, 0)
      .to(".right-leaf", { y: 290 }, 0);

    const startVideo = isMobile ? "top 50%" : "center 64%";
    const endVideo = isMobile ? "120% top" : "bottom top";

    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startVideo,
        end: endVideo,
        scrub: true,
        // pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
