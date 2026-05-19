import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const parallax = (
  element: HTMLElement,
  yValue: number = -20
) => {
  gsap.to(element, {
    yPercent: yValue,
    ease: "none",

    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
  });
};