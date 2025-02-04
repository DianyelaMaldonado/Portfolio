import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./MainHero.scss";
import "../../scss/main.scss";
import DecoratorLine from "./DecoratorLine";
import DChart from "./DChart";

export const MainHero = () => {
  const mouseFollowerRef = useRef(null);
  const heroTitleRef = useRef(null);
  const webDeveloperRef = useRef(null);
  const animatedLineRef = useRef(null);
  const [isHoveringWebDeveloper, setIsHoveringWebDeveloper] = useState(false);

  useEffect(() => {
    mouseFollowerAnimation();
    heroTitleAnimation();
    webDeveloperTextAnimation();
    dCharAnimation();
  }, []);

  // Animation stager for each letter in the hero title
  // This function animates each letter in the hero title individually with a slight delay between them.
  const heroTitleAnimation = () => {
    const heroTitle = heroTitleRef.current;
    if (!heroTitle) return;
    const heroTitleCharacters = heroTitle.querySelectorAll("span");

    const tl = gsap.timeline({ onComplete: lineAnimation });

    tl.to(heroTitleCharacters, {
      y: 0,
      stagger: 0.1,
      duration: 0.1,
      autoAlpha: 1,
    });
  };

  // Function for mouse follower animation
  // This function moves the mouseFollower element to follow the mouse position with a smooth animation.
  const mouseFollowerAnimation = () => {
    const mouseFollower = mouseFollowerRef.current;
    const webDeveloperElement = webDeveloperRef.current;

    if (!mouseFollower || !webDeveloperElement) return;

    gsap.set(mouseFollower, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

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

  // Function to animate the web developer text (typed effect)
  // This function animates the text by making each span fade in and move vertically, one after another.
  const webDeveloperTextAnimation = () => {
    const spans = document.querySelectorAll(".string-injected");
    gsap.fromTo(
      spans,
      { opacity: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power3.in-out",
        onComplete: () => {
          dCharAnimation();
        },
      }
    );
  };

  // Function to animate the SVG line (DecoratorLine)
  // This function animates the SVG line by changing the stroke dash offset to reveal the line progressively.
  const lineAnimation = () => {
    const line = animatedLineRef.current;
    if (!line) return;

    gsap.set(line, { strokeDasharray: 1000, strokeDashoffset: 1000 });

    gsap.to(line, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.out",
    });
  };

  // Function to animate the main 'D' character (DChart) fill color
  // This function animates the 'D' character's fill color and position with a smooth easing effect.
  const dCharAnimation = () => {
    const tl = gsap.timeline({ delay: 5 });

    tl.to("#d-fill", {
      fill: "#F0371A",
      duration: 1,
      x: 5,
      ease: "power1.in-out",
    }).to("#d-fill", {
      fill: "#F0371A",
      duration: 0.5,
      x: 0,
      y: 0,
      ease: "power1.in-out",
    });
  };

  // Detect mouse entering the "Web Developer" element
  // When the mouse enters the element, it triggers the state change to indicate hovering.
  const handleMouseEnter = () => {
    setIsHoveringWebDeveloper(true);
  };

  // Detect mouse leaving the "Web Developer" element
  // When the mouse leaves the element, it resets the hovering state.
  const handleMouseLeave = () => {
    setIsHoveringWebDeveloper(false);
  };

  // Description
  const aboutTextPresentation =
    "HiI'm Dianyela Maldonadobut you can call me Dian :)";
  const usingObjectAssign = [...aboutTextPresentation];

  // Function to line break text for presentation
  // This function breaks the input text into individual spans and adds line breaks at specific positions.
  const breakTitleText = (text) => {
    const chars = [...text];
    const newText = [];
    let counter = 0;
    const isMobile = window.innerWidth <= 765;

    const mobileBreakpoints = [1, 14, 23, 35];

    chars.forEach((char, index) => {
      newText.push(
        <span
          key={index}
          className={`is-bigger-sans string-injected ${
            ["D", ":", ")"].includes(char) ? "is-ff-red" : ""
          }`.trim()}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );

      if (isMobile) {
        if (mobileBreakpoints.includes(counter) && index !== chars.length - 1) {
          newText.push(<br key={`br-${index}`} />);
        }
      } else {
        if (counter === 1 && index !== chars.length - 1) {
          newText.push(<span key={`comma-${index}`}>, </span>);
          newText.push(<br key={`br-${index}`} />);
        } else if (counter === 23 && index !== chars.length - 1) {
          newText.push(<br key={`br-${index}`} />);
        }
      }

      counter++;
    });

    return newText;
  };

  return (
    <>
      <div className='main-hero'>
        <section className='overflow-hidden'>
          <div>
            <p className='is-cursive-code text-start pt-5'>&lt;html/&gt;</p>
            <p className='is-cursive-code text-start ms-5'>&lt;body/&gt;</p>
            <div className='d-flex justify-content-between align-items-center'>
              {/* left content */}
              <div className='info-left hide-on-large-and-down'>
                <DChart />
              </div>
              {/* Right content */}
              <div className='info-right loader-logo'>
                <div
                  ref={mouseFollowerRef}
                  className={`mouse-follower ${
                    isHoveringWebDeveloper ? "active" : ""
                  }`}
                ></div>
                <div
                  className='container d-flex flex-column no-maxwidth'
                  style={{ transition: "all 0.3s ease-in-out" }}
                >
                  <div className='loaders-wrapper d-flex flex-column justify-content-between'>
                    <div className='loader-text'>
                      <h1 ref={heroTitleRef} className='text-start mb-5 pt-5'>
                        {breakTitleText(usingObjectAssign)}
                      </h1>
                    </div>

                    <div className='is-Architects-daughter-container mt-5 text-end align-self-start'>
                      <p
                        ref={webDeveloperRef}
                        className='is-bigger-cursive is-Architects-daughter'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Web Developer
                      </p>
                      <span className='is-Architects-daughter-line'>
                        <DecoratorLine animatedLineRef={animatedLineRef} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className='is-cursive-code text-end'>&lt;html/&gt;</p>
        </section>
      </div>
    </>
  );
};
