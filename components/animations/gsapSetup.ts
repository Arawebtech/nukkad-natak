// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /* =========================
//    GLOBAL SCROLL ANIMATION
// ========================= */

// export const initGlobalGsap = () => {
//   // Cards / Boxes / Sections
//   gsap.utils.toArray<HTMLElement>(".gsap-box").forEach((el) => {
//     gsap.fromTo(
//       el,
//       {
//         y: 60,
//         opacity: 0,
//         scale: 0.95,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   });

//   // Headings
//   gsap.utils.toArray<HTMLElement>(".gsap-heading").forEach((el) => {
//     gsap.fromTo(
//       el,
//       {
//         y: 30,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 90%",
//         },
//       }
//     );
//   });

//   // Content paragraphs
//   gsap.utils.toArray<HTMLElement>(".gsap-text").forEach((el) => {
//     gsap.fromTo(
//       el,
//       {
//         y: 20,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         delay: 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 92%",
//         },
//       }
//     );
//   });

//   // Icons
//   gsap.utils.toArray<HTMLElement>(".gsap-icon").forEach((el) => {
//     el.addEventListener("mouseenter", () => {
//       gsap.to(el, {
//         scale: 1.12,
//         rotation: 10,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     });

//     el.addEventListener("mouseleave", () => {
//       gsap.to(el, {
//         scale: 1,
//         rotation: 0,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     });
//   });

//     // TEXT HOVER (smooth scale like icons but subtle)
//   gsap.utils.toArray<HTMLElement>(".gsap-hover-text").forEach((el) => {
//     const enter = () => {
//       gsap.to(el, {
//         scale: 1.03,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     };

//     const leave = () => {
//       gsap.to(el, {
//         scale: 1,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     };

//     el.addEventListener("mouseenter", enter);
//     el.addEventListener("mouseleave", leave);
//   });
// };





import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================
   GLOBAL SCROLL ANIMATION
========================= */

export const initGlobalGsap = () => {
  // Cards / Boxes / Sections
  gsap.utils.toArray<HTMLElement>(".gsap-box").forEach((el) => {
    gsap.fromTo(
      el,
      {
        y: 60,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  /* =========================
     STAGGER CARDS ANIMATION
     (one by one animation)
  ========================= */

gsap.utils.toArray<HTMLElement>(".gsap-stagger-wrap").forEach((wrapper) => {
  const items = wrapper.querySelectorAll(".gsap-stagger-item");

  gsap.fromTo(
    items,
    {
      y: 50,
      opacity: 0,
      scale: 0.95,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: wrapper,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
        once: false,
      },
    }
  );
});

  // Headings
  gsap.utils.toArray<HTMLElement>(".gsap-heading").forEach((el) => {
    gsap.fromTo(
      el,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      }
    );
  });

  // Content paragraphs
// Content paragraphs
gsap.utils.toArray<HTMLElement>(".gsap-text").forEach((el) => {
  gsap.fromTo(
    el,
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        toggleActions: "play none none reverse",
        // ya
        // toggleActions: "restart none restart none",

        // optional
        once: false,
      },
    }
  );
});

  // Icons
  gsap.utils.toArray<HTMLElement>(".gsap-icon").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        scale: 1.12,
        rotation: 10,
        duration: 0.4,
        ease: "power3.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    });
  });

  // TEXT HOVER
  gsap.utils.toArray<HTMLElement>(".gsap-hover-text").forEach((el) => {
    const enter = () => {
      gsap.to(el, {
        scale: 1.03,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
  });
};