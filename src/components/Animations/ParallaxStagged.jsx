import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxStagged = () => {
  const animatedStaggedContent = document.querySelectorAll(
    "[data-parallax-stagged-content]"
  );

  if (animatedStaggedContent.length) {
    animatedStaggedContent.forEach((parent) => {
      const duration =
        parseFloat(parent.dataset.parallaxStaggedContentDuration) || 0.75;
      const animationPercentStart =
        parent.dataset.parallaxAnimatedScrollStart || "0";
      const children = parent.querySelectorAll(
        "[data-parallax-stagged-content-item]"
      );

      const tlContent = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: `top bottom-=${animationPercentStart}`,
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      const delayDif = duration / children.length;

      children.forEach((element, index) => {
        gsap.set(element, {
          y: element.dataset.parallaxAnimatedStartValue || 100,
          autoAlpha: 0,
        });

        tlContent.to(
          element,
          {
            y: 0,
            autoAlpha: 1,
            duration: duration,
            delay: delayDif * index,
          },
          "start"
        );
      });
    });
  }
};
