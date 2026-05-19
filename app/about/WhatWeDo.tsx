// "use client";

// import React, { useEffect, useRef } from "react";

// import { Circle, Lightbulb, Target, Users } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Heading from "@/components/common/Heading";

// gsap.registerPlugin(ScrollTrigger);

// const WhatWeDo = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);

//   // ✅ TOP DATA (MAP USE HERE)
//   const leftData = [
//     {
//       icon: <Users size={80} />,
//       title: "Trusted by Leaders",
//       desc: "Partnered with NDMC, SDMC, BSES & many leading organizations.",
//     },
//     {
//       icon: <Lightbulb size={80} />,
//       title: "Impactful Approach",
//       desc: "Creative, engaging & result-driven performances.",
//     },
//     {
//       icon: <Target size={80} />,
//       title: "Pan India Reach",
//       desc: "Delivering campaigns across cities, towns & rural areas.",
//     },
  
//   ];

//   useEffect(() => {
//     if (!gridRef.current || !headingWrapRef.current) return;

//     gsap.from(headingWrapRef.current, {
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: headingWrapRef.current,
//         start: "top 80%",
//       },
//     });

//     gsap.from(gridRef.current.children, {
//       y: 80,
//       opacity: 0,
//       scale: 0.95,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: gridRef.current,
//         start: "top 85%",
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <div ref={headingWrapRef}>
//         <Heading title="What We Do"/>
//       </div>

//       <div
//         className=""
//         style={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           padding:"60px 0px",
//           gap: "35px",
//         }}
//       >
//         {/* GRID */}
//         <div ref={gridRef} className="responsiveGrid">
      
//             {leftData.map((item, index) => (
//               <div
//                 key={index}
         
//                 style={{
//                   display: "flex",
//                   gap: "18px",
//                   alignItems:"center",
//                 }}
//               >
//                 <div
//                   style={{
//                     color: "#F56A28",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {item.icon}
//                 </div>

//                 <div>
//                   <h3
//                     style={{
//                       color: "#000000",
//                       margin: 0,
//                       fontSize: "22px",
//                       fontWeight: 700,
//                     }}
//                   >
//                     {item.title}
//                   </h3>

//                   <p
//                     style={{
//                       color: "#000000",
//                       lineHeight: "1.5",
//                       fontSize: "14px",
//                     }}
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>


//       {/* CSS */}
//       <style jsx>{`
//         .responsiveGrid {
//           width: 100%;
//           display: grid;
//           grid-template-columns: repeat(1, 1fr);
//           gap:30px
//         }

//         .gridItem {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px 0px;
//           color: white;
//         }

//         .content {
//           text-align: center;
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }

//         .btn {
//           margin-top: 10px;
//           padding: 8px 14px;
//           border: none;
//           cursor: pointer;
//           background: black;
//           color: white;
//           border-radius: 6px;
//         }

//         @media (min-width: 1024px) {
//           .responsiveGrid {
//             grid-template-columns: repeat(3, 1fr);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WhatWeDo;



"use client";

import React, { useEffect, useRef } from "react";

import { Lightbulb, Target, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/components/common/Heading";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ TOP DATA (MAP USE HERE)
  const leftData = [
    {
      icon: <Users size={80} />,
      title: "Trusted by Leaders",
      desc: "Partnered with NDMC, SDMC, BSES & many leading organizations.",
    },
    {
      icon: <Lightbulb size={80} />,
      title: "Impactful Approach",
      desc: "Creative, engaging & result-driven performances.",
    },
    {
      icon: <Target size={80} />,
      title: "Pan India Reach",
      desc: "Delivering campaigns across cities, towns & rural areas.",
    },
  ];

  useEffect(() => {
    if (
      !gridRef.current ||
      !headingWrapRef.current ||
      !sectionRef.current
    )
      return;

    const ctx = gsap.context(() => {

      // HEADING ANIMATION
      gsap.fromTo(
        headingWrapRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          force3D: true,

          scrollTrigger: {
            trigger: headingWrapRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // GRID ITEMS ANIMATION
      gsap.fromTo(
        gridRef.current!.children,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          force3D: true,

          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <div ref={sectionRef}>
      <div ref={headingWrapRef}>
        <Heading title="What We Do" />
      </div>

      <div
        className="main-box"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "35px",
        }}
      >
        {/* GRID */}
        <div ref={gridRef} className="responsiveGrid">
          {leftData.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "18px",
                alignItems: "center",
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            >
              <div
                style={{
                  color: "#F56A28",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div>
                <h3
                  style={{
                    color: "#000000",
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#000000",
                    lineHeight: "1.5",
                    fontSize: "14px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .responsiveGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 30px;
        }

               .main-box {
          width: 100%;
        padding:0px 
        }

        .gridItem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0px;
          color: white;
        }

        .content {
          text-align: center;
          width: "100%";
          display: "flex";
          flex-direction: "column";
          align-items: "center";
          justify-content: "center";
        }

        .btn {
          margin-top: 10px;
          padding: 8px 14px;
          border: none;
          cursor: pointer;
          background: black;
          color: white;
          border-radius: 6px;
        }

        @media (min-width: 1024px) {
          .responsiveGrid {
            grid-template-columns: repeat(3, 1fr);
          }

                 .main-box {
          width: 100%;
        padding:0px 60px 60px 60px
        }
        }
      `}</style>
    </div>
  );
};

export default WhatWeDo;