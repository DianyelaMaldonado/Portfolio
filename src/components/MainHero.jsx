import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./MainHero.css";
import "../css/global.css";

export const MainHero = () => {
  const mouseFollowerRef = useRef(null);
  const heroTitleRef = useRef(null);
  const webDeveloperRef = useRef(null);
  const animatedLineRef = useRef(null);
  const [isHoveringWebDeveloper, setIsHoveringWebDeveloper] = useState(false);

  useEffect(() => {
    mouseFollowerAnimation();
    heroTitleAnimation();
    dCharAnimation();
    webDeveloperTextAnimation();
  }, []);

  const heroTitleAnimation = () => {
    const heroTitle = heroTitleRef.current;
    if (!heroTitle) return;
    const heroTitleCharacters = heroTitle.querySelectorAll("span");

    // Use a GSAP Timeline to chain animations
    const tl = gsap.timeline({ onComplete: lineAnimation }); // lineAnimation will run after the entire timeline finishes

    tl.to(heroTitleCharacters, {
      y: 0,
      stagger: 0.1,
      duration: 0.1,
      autoAlpha: 1,
    });
  };

  const mouseFollowerAnimation = () => {
    const mouseFollower = mouseFollowerRef.current;
    const webDeveloperElement = webDeveloperRef.current;

    if (!mouseFollower || !webDeveloperElement) return;

    gsap.set(mouseFollower, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      // Animation Smooth
      window.requestAnimationFrame(() => {
        gsap.to(mouseFollower, {
          x: mouseX,
          y: mouseY,
          duration: 0.6,
          ease: "power1.easeOut",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  };

  // Animation of the text
  const webDeveloperTextAnimation = () => {
    // Get the span elements
    const spans = document.querySelectorAll(".string-injected");

    // Animate the spans with GSAP
    gsap.fromTo(
      spans,
      { opacity: 0, y: -20 }, // Start from a hidden state
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1, // Adjust the time between each span
        ease: "power3.out",
        onComplete: () => {
          // When the span animation finishes, execute the line animation
          lineAnimation();
        },
      }
    );
  };

  // Line animation
  const lineAnimation = () => {
    const line = animatedLineRef.current;
    if (!line) return;

    // Make sure the line is hidden at first
    gsap.set(line, { strokeDasharray: 1000, strokeDashoffset: 1000 }); // Line is invisible

    // Now, animate the line to draw it
    gsap.to(line, {
      strokeDashoffset: 0,
      duration: 2, // Duration of the line animation
      ease: "power1.out",
    });
  };

  const dCharAnimation = () => {
    gsap.to("#d-fill", {
      fill: "#F0371A",
      duration: 0.1,
      delay: 2.75,
      ease: "power1.out",
    });
  };

  const handleMouseEnter = () => {
    setIsHoveringWebDeveloper(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringWebDeveloper(false);
  };

  const aboutTextPresentation =
    "Hi I'm Dianyela Maldonado but you can call me Dian :)";
  const usingObjectAssign = [...aboutTextPresentation];

  return (
    <>
      <div className='main-hero'>
        <section className='overflow-hidden'>
          <div
            ref={mouseFollowerRef}
            className={`mouse-follower ${
              isHoveringWebDeveloper ? "active" : ""
            }`}
          ></div>
          <div
            className='container d-flex justify-content-center flex-column'
            style={{ transition: "all 0.3s ease-in-out" }}
          >
            <div className='loaders-wrapper d-flex flex-column justify-content-between align-items-center'>
              <div className='loader-text'>
                <p className='is-cursive-code text-start'>&lt;html/&gt;</p>
                <p className='is-cursive-code text-start ms-5'>&lt;body/&gt;</p>
                <h1 ref={heroTitleRef}>
                  {usingObjectAssign.map((char, index) => (
                    <span
                      key={index}
                      className={`is-bigger-sans string-injected ${
                        ["D", ":", ")"].includes(char) ? "is-ff-red" : ""
                      }`.trim()}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
              </div>

              <div className='is-Architects-daughter-container pt-5'>
                <p
                  ref={webDeveloperRef}
                  className='is-bigger-cursive is-Architects-daughter'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Web Developer
                </p>

                <span className='is-Architects-daughter-line'>
                  <svg
                    width='80%'
                    height='34'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    ref={animatedLineRef} // The reference is now associated
                  >
                    <path
                      d='M2 14.411C41.65 2.88838 82.8588 1.89248 125.672 2.00799C176.445 2.14498 220.424 11.0124 268.252 21.3016C297.277 27.5457 325.635 31.6271 356.496 31.7753C373.875 31.8588 392.247 32.7564 409.312 30.2594C422.69 28.3019 434.895 24.2271 448 21.8529'
                      stroke='#F0371A'
                      strokeWidth='3'
                      strokeLinecap='round'
                      className='line-animation'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <p className='is-cursive-code text-end'>&lt;html/&gt;</p>
        </section>
      </div>
    </>
  );
};
