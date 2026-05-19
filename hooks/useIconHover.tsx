import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCallback } from "react";

export const useIconHover1 = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const enter = () => {
      gsap.to(el, {
        scale: 1.12,
        rotation: 10,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(el, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return ref;
};




export const useIconHover = () => {
  const setRef = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;

    const enter = () => {
      gsap.to(el, {
        scale: 1.12,
        rotation: 10,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(el, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return setRef;
};



export const useIconHover2 = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const enter = () => {
      gsap.to(el, {
        scale: 1.12,
        rotation: 10,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(el, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    el.onmouseenter = enter;
    el.onmouseleave = leave;

    return () => {
      el.onmouseenter = null;
      el.onmouseleave = null;
    };
  }, []);

  return ref;
};