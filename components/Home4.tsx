// "use client";

// import React, { useEffect, useRef } from "react";
// import Heading from "./common/Heading";
// import { Circle } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home4 = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);

//   // ✅ TOP DATA (MAP USE HERE)
// const items = [
//   {
//     image: "/images/home9.png",
//     bgImage: "/images/homeblack1.png",
//     title: "Swachh Bharat Drive",
//     buttonTitle: "View More",
//     icon: <Circle size={14} />,
//   },
//   {
//     image: "/images/home10.png",
//     bgImage: "/images/homeblack1.png",
//     title: "BSES Energy Awareness",
//     buttonTitle: "View More",
//     icon: <Circle size={14} />,
//   },
//   {
//     image: "/images/home11.png",
//     bgImage: "/images/homeblack1.png",
//     title: "Election Awareness Drive",
//     buttonTitle: "View More",
//     icon: <Circle size={14} />,
//   },
// ];

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
//         <Heading title="Our Recent Campaigns"/>
//       </div>

//       <div
//         className="website-container"
//         style={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "35px",
//         }}
//       >
//         {/* GRID */}
//         <div ref={gridRef} className="responsiveGrid">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="gridItem"
//               style={{
      
//                 borderRadius: "12px",
//               }}
//             >
//               <div className="content ">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     objectFit: "contain",
//                   }}
//                 />

//                 <div style={{
//                       backgroundImage: `url(${item.bgImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 display:"flex",
//                 alignItems:"center",
//                 justifyContent:"space-around",
//                 padding:"10px 20px",
//                 width:"100%"
//                 }}>


//                    <div className="" style={{
//                     fontSize:"18px",
//                     fontWeight:"bold"
//                    }}>
//                      {item.title}
//                    </div>
//                <div className="main-background-primary flex items-center" style={{
//            fontSize:"11px",
//            fontWeight:"700",
//            padding:"6px 10px",
//            borderRadius:"4px",
//            letterSpacing:"1px",
//            display: "flex", alignItems: "center", gap: "6px"

//                }}>
          
//   {item.icon}
//   <button>{item.buttonTitle}</button>
// </div>
//                </div>

//                 </div>
//               </div>
   
//           ))}
//         </div>
//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .responsiveGrid {
//           width: 100%;
//           display: grid;
//           grid-template-columns: repeat(1, 1fr);
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

// export default Home4;

"use client";

import React, { useEffect, useRef } from "react";

import { Circle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "./common/HeadingUpdate";

gsap.registerPlugin(ScrollTrigger);

const Home4 = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // DATA
  const items = [
    {
      image: "/images/home9.png",
      bgImage: "/images/homeblack1.png",
      title: "Swachh Bharat Drive",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
    },
    {
      image: "/images/home10.png",
      bgImage: "/images/homeblack1.png",
          title: "Swachh Bharat Drive",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
    },
    {
      image: "/images/home11.png",
      bgImage: "/images/homeblack1.png",
           title: "Swachh Bharat Drive",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
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
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
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
    y: 70,
    opacity: 0,
    scale: 0.96,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.18,
    ease: "power2.out",
    force3D: true,

    scrollTrigger: {
      trigger: gridRef.current,
      start: "top 88%",
      once: true,
    },
  }
);
   // ENTRY ANIMATION
      gsap.fromTo(
        ".gridItem",
        {
          y: 60,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",

          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

   
      gsap.utils.toArray<HTMLElement>(".gridItem").forEach((card) => {
        gsap.to(card, {
          scale: 1.01,
          duration: 0.4,
          ease: "power2.out",

          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: 1,

            onEnter: () => {
              gsap.to(card, {
                scale: 1.01,
                duration: 0.4,
                ease: "power2.out",
              });
            },

            onLeave: () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.1,
                ease: "power2.out",
              });
            },

            onEnterBack: () => {
              gsap.to(card, {
                scale: 1.01,
                duration: 0.4,
                ease: "power2.out",
              });
            },

            onLeaveBack: () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            },
          },
        });
      });


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
    className="main-box"
    >
      {/* HEADING */}
      <div ref={headingWrapRef}>
      

          <HeadingUpdate
                    title="Our Recent"
                    color="black"
                    title2={true}
                    title2Text="Campaigns"
                    mobileSize="25px"
                    desktopSize="30px"
                  />
      </div>

      <div
        className=""
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {/* GRID */}
        <div ref={gridRef} className="responsiveGrid">
          {items.map((item, index) => (
            <div
              key={index}
              className="gridItem"
            >
              <div className="content">
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

               
                <div
                  className="bottomBox"
                  style={{
                    backgroundImage: `url("/images/download.svg")`,
                    backgroundColor:"#000000"
                  }}
                >
                  {/* TITLE */}
                  <div className="title">
                    {item.title}
                  </div>

                  {/* BUTTON */}
                  <div className="main-background-primary buttonWrap">
                    {item.icon}

                    <button className="btn">
                      {item.buttonTitle}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <style jsx>{`
        .responsiveGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
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
          color: white;

          will-change: transform, opacity;
        }

        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 16px;

          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .bottomBox {
          width: 100%;
          background-size: cover;
          background-position: center;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 16px;

          padding: 16px 20px;
          flex-wrap: wrap;
        }

  .title {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;

}

        .buttonWrap {
          display: flex;
          align-items: center;
          gap: 6px;

          padding: 8px 12px;
          border-radius: 6px;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;

          cursor: pointer;
          transition: all 0.3s ease;
        }

        .buttonWrap:hover {
          transform: translateY(-2px);
        }

        .btn {
          background: transparent;
          border: none;
          outline: none;
          color: inherit;
          font-size: inherit;
          font-weight: inherit;
          cursor: pointer;
          white-space:nowrap
        }

        @media (min-width: 768px) {
          .bottomBox {
            flex-wrap: nowrap;
          }
            
        }

        @media (min-width: 1024px) {
          .responsiveGrid {
            grid-template-columns: repeat(3, 1fr);
          }
                   .main-box {
          width: 100%;
        padding:0px 60px 0px 60px
        }

        }
      `}</style>
    </div>
  );
};

export default Home4;