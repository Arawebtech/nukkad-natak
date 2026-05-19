import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const horizontalScroll = (
  section: HTMLElement,
  container: HTMLElement
) => {
  if (window.innerWidth < 768) return;

  gsap.to(container, {
    x: () =>
      -(
        container.scrollWidth -
        window.innerWidth +
        100
      ),

    ease: "none",

    scrollTrigger: {
      trigger: section,
      start: "top top",

      end: () =>
        `+=${container.scrollWidth}`,

      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });
};