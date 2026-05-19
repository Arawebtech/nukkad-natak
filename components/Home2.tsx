




// "use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useEffect, useRef, useState } from "react";
// import { HeadingUpdate } from "./common/HeadingUpdate";

// const Home2 = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   const [activeIndex, setActiveIndex] = useState(0);

//   // separate array
//   const campaigns = [1, 4, 3, 2, 1, 4, 3];

//   // AUTO SCROLL
//   useEffect(() => {
//     const container = scrollRef.current;

//     if (!container) return;

//     const interval = setInterval(() => {
//       const items = container.querySelectorAll(".gridItem");

//       if (!items.length) return;

//       const nextIndex = (activeIndex + 1) % items.length;

//       const nextItem = items[nextIndex] as HTMLElement;

//       container.scrollTo({
//         left: nextItem.offsetLeft - 20,
//         behavior: "smooth",
//       });

//       setActiveIndex(nextIndex);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   // MANUAL ARROWS
//   const scrollToItem = (index: number) => {
//     const container = scrollRef.current;

//     if (!container) return;

//     const items = container.querySelectorAll(".gridItem");

//     const item = items[index] as HTMLElement;

//     container.scrollTo({
//       left: item.offsetLeft - 20,
//       behavior: "smooth",
//     });

//     setActiveIndex(index);
//   };

//   const nextSlide = () => {
//     const next = (activeIndex + 1) % campaigns.length;
//     scrollToItem(next);
//   };

//   const prevSlide = () => {
//     const prev =
//       activeIndex === 0
//         ? campaigns.length - 1
//         : activeIndex - 1;

//     scrollToItem(prev);
//   };

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
       

//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",

//           gap: "0px",
//         }}
//       >
//         {/* HEADING */}
// {/* 
//         <h2
//           className=""
//           style={{
//             margin: 0,
//             textAlign: "center",
//             fontSize: "clamp(20px, 4vw, 42px)",
//             fontWeight: 800,
//             lineHeight: "1.3",
//           }}
//         >
//           Trusted Partner for Impactful{" "}
//           <span style={{ color: "#F26A21" }}>
            
//           </span>
//         </h2> */}

//            <div >
//                 <HeadingUpdate
//                   title="Our"
//                   color="black"
//                   title2={true}
//                   title2Text="Logo"
//                   mobileSize="25px"
//                   desktopSize="30px"
//                 />
//               </div>

//         {/* MOBILE ARROWS */}

//     <div className="mobileControls">
//   <button onClick={prevSlide}>
//     <ChevronLeft size={20} />
//   </button>

//   <button onClick={nextSlide}>
//     <ChevronRight size={20} />
//   </button>
// </div>

//         {/* GRID */}

//         <div
//           className="responsiveGrid"
//           ref={scrollRef}
//         >
//           {campaigns.map((item, index) => (
//             <div
//               key={index}
//               className="gridItem"
//             >
//               <img
//                 src={`/images/home${item}.png`}
//                 alt={`Campaign ${item}`}
//                 className="gridImage gsap-hover-text"
//               />
//             </div>
//           ))}
//         </div>

//         {/* DOTS */}

//         <div className="dotsWrapper">
//           {campaigns.map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${
//                 activeIndex === index ? "activeDot" : ""
//               }`}
//               onClick={() => scrollToItem(index)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* CSS */}

//       <style jsx>{`
//         .responsiveGrid {
//           width: 100%;
//           display: flex;
//           flex-wrap: nowrap;

//           justify-content: flex-start;
//           align-items: center;

//           gap: 40px;

//           overflow-x: auto;
//           overflow-y: hidden;

//           scroll-behavior: smooth;

//           scrollbar-width: none;
//         }

//         .responsiveGrid::-webkit-scrollbar {
//           display: none;
//         }

//         .gridItem {
//           width: calc(40% - 10px);

//           flex: 0 0 auto;

//           display: flex;
//           justify-content: flex-start;
//           align-items: center;
//         }

//         .gridImage {
//           width: 100%;
//           max-width: 220px;
//           height: 160px;

//           object-fit: contain;
//           display: block;

//           will-change: transform, opacity;
//           transform: translateZ(0);
//           backface-visibility: hidden;
//         }

//         .dotsWrapper {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;

//           margin-top: 18px;
//         }

//         .dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: #d1d1d1;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .activeDot {
//           width: 22px;
//           border-radius: 20px;
//           background: #f26a21;
//         }

//         .mobileControls {
//           width: 100%;

//           display: flex;
//           justify-content: flex-end;
//           gap: 10px;

//           padding: 12px 20px 0px 20px;
//         }

//         .mobileControls button {
//           width: 38px;
//           height: 38px;
//   display: flex;
//           justify-content: center;
//           align-items:center;
//           border: none;
//           border-radius: 50%;

//           background: #f26a21;
//           color: white;

//           font-size: 18px;
//           cursor: pointer;
//         }

//         @media (min-width: 1024px) {
//           .responsiveGrid {
//             gap: 0px;
//           }

//           .gridItem {
//             width: auto;
//           }

//           .gridImage {
//             width: 70%;
//             max-width: 220px;
//             height: 180px;

//             object-fit: contain;
//             display: block;

//             will-change: transform, opacity;
//             transform: translateZ(0);
//             backface-visibility: hidden;
//           }

//           .mobileControls {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home2;

"use client";

import React from "react";
import { HeadingUpdate } from "./common/HeadingUpdate";

const Home2 = () => {
  // TOP ROW
  const topRow = [1, 4, 3, 2, 1, 4, 3];

  // BOTTOM ROW
  const bottomRow = [3, 2, 1, 4, 2, 3, 1];

  return (
    <section className="logoSection">
      {/* HEADING */}
      <div>
        <HeadingUpdate
          title="Our"
          color="black"
          title2={true}
          title2Text="Client's"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      {/* TOP MARQUEE */}
      <div className="marqueeWrapper">
        <div className="marquee marqueeLeft">
          {[...topRow, ...topRow].map((item, index) => (
            <div key={index} className="logoCard">
              <img
                src={`/images/home${item}.png`}
                alt="logo"
                className="logoImage"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM MARQUEE */}
      <div className="marqueeWrapper secondRow">
        <div className="marquee marqueeRight">
          {[...bottomRow, ...bottomRow].map((item, index) => (
            <div key={index} className="logoCard">
              <img
                src={`/images/home${item}.png`}
                alt="logo"
                className="logoImage"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logoSection {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .marqueeWrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .secondRow {
          margin-top: -10px;
        }

        .marquee {
          display: flex;
          align-items: center;
          gap: 10px;
          width: max-content;
        }

        /* LEFT TO RIGHT */
        .marqueeLeft {
          animation: scrollLeft 18s linear infinite;
        }

        /* RIGHT TO LEFT */
        .marqueeRight {
          animation: scrollRight 18s linear infinite;
        }

        .logoCard {
          width: 180px;
          // height: 130px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 20px;

          // background: rgba(255, 255, 255, 0.7);

          // backdrop-filter: blur(10px);

          // border: 1px solid rgba(0, 0, 0, 0.06);

          transition: 0.4s ease;
        }

        .logoCard:hover {
          transform: translateY(-6px);
        }

        .logoImage {
          width: 75%;
          height: 75%;
          object-fit: contain;
        }

        /* LEFT */
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        /* RIGHT */
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0%);
          }
        }

        @media (max-width: 768px) {
          .marquee {
            gap: 1px;
          }

          .logoCard {
            width: 130px;
            // height: 95px;
            border-radius: 16px;
          }

          .logoImage {
            width: 70%;
            height: 70%;
          }

          .marqueeLeft,
          .marqueeRight {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
};

export default Home2;