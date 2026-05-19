import gsap from "gsap";

export const textReveal = (element: any) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 1,
    }
  );
};