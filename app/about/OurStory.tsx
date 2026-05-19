// "use client";

// import Heading2 from "@/components/common/Heading2";
// import React, { useEffect, useRef } from "react";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const OurStory = () => {
//   const sectionRef = useRef(null);

//   const titleRef = useRef(null);
//   const para1Ref = useRef(null);
//   const para2Ref = useRef(null);

//   const imageWrapRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 🔥 TITLE
//       gsap.from(titleRef.current, {
//         opacity: 0,
//         y: 80,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 85%",
//         },
//       });

//       // 🔥 PARA 1
//       gsap.from(para1Ref.current, {
//         opacity: 0,
//         y: 60,
//         duration: 1,
//         delay: 0.1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: para1Ref.current,
//           start: "top 90%",
//         },
//       });

//       // 🔥 PARA 2
//       gsap.from(para2Ref.current, {
//         opacity: 0,
//         y: 60,
//         duration: 1,
//         delay: 0.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: para2Ref.current,
//           start: "top 90%",
//         },
//       });

//       // 🔥 IMAGE RIGHT TO LEFT REVEAL
//       gsap.from(imageWrapRef.current, {
//         clipPath: "inset(0 100% 0 0)",
//         duration: 1.6,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: imageWrapRef.current,
//           start: "top 85%",
//         },
//       });

//       // 🔥 IMAGE SMOOTH SCALE
//       gsap.from(imageRef.current, {
//         scale: 1.2,
//         duration: 1.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 85%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: "20px",
//         padding: "40px 0px",
//         flexWrap: "wrap",
//       }}
//     >
//       {/* LEFT CONTENT */}
//       <div
//         style={{
//           flex: "1",
//           minWidth: "300px",
//         }}
//       >
//         {/* TITLE */}
//         <div ref={titleRef}>
//           <Heading2 title="Our Story" color="black" />
//         </div>

//         {/* TEXT 1 */}
//         <p
//           ref={para1Ref}
//           style={{
//             fontWeight: 600,
//             fontSize: 24,
//             marginBottom: "10px",
//             marginTop: "20px",
//             lineHeight: "1.5",
//           }}
//         >
//           WI Events was founded with a simple belief – powerful messages
//           delivered the right way can spark awareness and drive action.
//         </p>

//         {/* TEXT 2 */}
//         <p
//           ref={para2Ref}
//           style={{
//             color: "#666",
//             lineHeight: "1.8",
//             fontSize: "18px",
//           }}
//         >
//           Street plays have the unique ability to connect directly with people
//           in their own language, in their own space. Over the years, we have
//           partnered with government bodies, corporates, NGOs and educational
//           institutions to communicate messages that matter.
//         </p>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div
//         ref={imageWrapRef}
//         style={{
//           flex: "1",
//           minWidth: "300px",
//           overflow: "hidden",
//           borderRadius: "20px",
//         }}
//       >
//         <img
//           ref={imageRef}
//           src="/images/about1.png"
//           alt="story"
//           style={{
//             width: "100%",
//             height: "auto",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />
//       </div>

//       {/* MOBILE */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           p {
//             font-size: 16px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default OurStory;

"use client";

import Heading2 from "@/components/common/Heading2";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const para1Ref = useRef<HTMLParagraphElement | null>(null);
  const para2Ref = useRef<HTMLParagraphElement | null>(null);

  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TITLE
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      });

      // PARA 1
      gsap.from(para1Ref.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top bottom-=80",
          toggleActions: "play none none none",
        },
      });

      // PARA 2
      gsap.from(para2Ref.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para2Ref.current,
          start: "top bottom-=80",
          toggleActions: "play none none none",
        },
      });

      // IMAGE REVEAL
      gsap.from(imageWrapRef.current, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      });

      // IMAGE SCALE
      gsap.from(imageRef.current, {
        scale: 1.15,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
        padding: "0px 0px 60px 0px",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          flex: "1",
          minWidth: "300px",
        }}
      >

        <div ref={titleRef}>
          <Heading2 title="Our" color="black" title2={true} title2Text="Story" />
        </div>

        <p
          ref={para1Ref}
          style={{
            fontWeight: 600,
            fontSize: "16px",
            marginBottom: "10px",
            marginTop: "24px",
            lineHeight: "1.5",
          }}
        >
          WI Events was founded with a simple belief – powerful messages
          delivered the right way can spark awareness and drive action.
        </p>

        <p
          ref={para2Ref}
          style={{
            color: "#666",
            lineHeight: "1.8",
            fontSize: "12px",
          }}
        >
          Street plays have the unique ability to connect directly with people
          in their own language, in their own space. Over the years, we have
          partnered with government bodies, corporates, NGOs and educational
          institutions to communicate messages that matter.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        ref={imageWrapRef}
        style={{
          flex: "1",
          minWidth: "300px",
          overflow: "hidden",
          borderRadius: "20px",
        }}
      >
        <img
          ref={imageRef}
          src="/images/about1.png"
          alt="story"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurStory;