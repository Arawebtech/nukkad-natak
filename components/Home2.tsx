
// "use client";

// import React, {
//   useEffect,
//   useMemo,
//   useRef,
// } from "react";

// import gsap from "gsap";
// import { HeadingUpdate } from "./common/HeadingUpdate";

// const Home2 = () => {
//   // ONLY ADD HERE
//   const logos = [
//     {
//       img: "/icons/1.png",
//       alt: "Indian Railways",
//     },
//     {
//       img: "/icons/2.png",
//       alt: "Tata Motors",
//     },
//     {
//       img: "/icons/3.png",
//       alt: "Bharat Potroleum",
//     },
//     {
//       img: "/icons/4.png",
//       alt: "Petroleum and Natural Gas",
//     },
//     {
//       img: "/icons/5.png",
//       alt: "BSES Rajdhani Power Limited",
//     },
//     {
//       img: "/icons/6.png",
//       alt: "Confederation of indian Industry",
//     },
//     {
//       img: "/icons/7.png",
//       alt: "Delhi Police",
//     },
//     {
//       img: "/icons/8.png",
//       alt: "Hindustan Petroleum",
//     },
//     {
//       img: "/icons/9.png",
//       alt: "Honda",
//     },
//     {
//       img: "/icons/10.png",
//       alt: "Indian Post",
//     },
//     {
//       img: "/icons/11.png",
//       alt: "Indian Oil",
//     },
//     {
//       img: "/icons/12.png",
//       alt: "Mother Dairy",
//     },
//     {
//       img: "/icons/13.png",
//       alt: "Ministry of jal shakti",
//     },
//     {
//       img: "/icons/14.png",
//       alt: "Micro,Small Medium Enterprises",
//     },
//     {
//       img: "/icons/15.png",
//       alt: "N B C C",
//     },
//     {
//       img: "/icons/16.png",
//       alt: "NPCC",
//     },
//     {
//       img: "/icons/17.png",
//       alt: "Oil India Limited",
//     },
//     {
//       img: "/icons/18.png",
//       alt: "Bureau Of Indian Standards",
//     },
//     {
//       img: "/icons/19.png",
//       alt: "PCRA",
//     },
//     {
//       img: "/icons/20.png",
//       alt: "Sab Padhe Sab Badhe",
//     },
//         {
//       img: "/icons/21.png",
//       alt: "Municipal coporation of delhi",
//     },
//          {
//       img: "/icons/22.png",
//       alt: "N S D C",
//     },
//          {
//       img: "/icons/23.png",
//       alt: "Gajia Bad",
//     },
//   ];

//   // AUTO SPLIT ROWS
//   const rows = useMemo(() => {
//     const chunkSize = 12;

//     const result = [];

//     for (
//       let i = 0;
//       i < logos.length;
//       i += chunkSize
//     ) {
//       result.push(
//         logos.slice(
//           i,
//           i + chunkSize
//         )
//       );
//     }

//     return result;
//   }, [logos]);

//   const marqueeRefs =
//     useRef<
//       (
//         HTMLDivElement | null
//       )[]
//     >([]);

//   useEffect(() => {
//     marqueeRefs.current.forEach(
//       (row, index) => {
//         if (!row) return;

//         // LEFT TO RIGHT
//         if (index % 2 === 0) {
//           gsap.to(row, {
//             xPercent: -50,
//             duration: 15,
//             ease: "none",
//             repeat: -1,
//           });
//         }

//         // RIGHT TO LEFT
//         else {
//           gsap.fromTo(
//             row,
//             {
//               xPercent: -50,
//             },
//             {
//               xPercent: 0,
//               duration: 15,
//               ease: "none",
//               repeat: -1,
//             }
//           );
//         }
//       }
//     );
//   }, [rows]);

//   return (
// <>
//       {/* HEADING */}
//       <div>
//         <HeadingUpdate
//           title="Trusted By"
//           color="black"
//           title2={true}
//           title2Text="Industry Leaders"
//           mobileSize="25px"
//           desktopSize="30px"
//         />
//       </div>
//     <section className="logoSection">

//       {/* ROWS */}
//       {rows.map(
//         (row, rowIndex) => (
//           <div
//             key={rowIndex}
//             className="marqueeWrapper"
//           >
//             <div
//               ref={(el) => {
//                 marqueeRefs.current[
//                   rowIndex
//                 ] = el;
//               }}
//               className="marquee"
//             >
//               {[...row, ...row].map(
//                 (
//                   item,
//                   index
//                 ) => (
//                   <div
//                     key={index}
//                     className="logoCard"
//                   >
//                     <img
//                       src={item.img}
//                       alt={item.alt}
//                       className="logoImage"
//                     />
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         )
//       )}

//       <style jsx>{`
//         .logoSection {
//           width: 100%;
//           overflow: hidden;

//           display: flex;
//           flex-direction: column;
//   gap: 14px;
//         }

//         .marqueeWrapper {
//           width: 100%;
//           overflow: hidden;

//           position: relative;
//         }

//         .marquee {
//           display: flex;
//           align-items: center;

//           gap: 10px;

//           width: max-content;
//         }

//         // .logoCard {
//         //   width: 136px;
//         //   height: 117px;

//         //   flex-shrink: 0;

//         //   display: flex;
//         //   align-items: center;
//         //   justify-content: center;

//         //   transition: 0.3s ease;
//         // }

//         .logoCard {
//   width: 136px;
//   height: 117px;

//   flex-shrink: 0;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   background: #fff; /* WHITE BACKGROUND */

//   border-radius: 14px;
// padding:0px 10px;
//   transition: 0.3s ease;
// }

//         .logoCard:hover {
//           transform: translateY(-4px);
//         }

//         .logoImage {
//           width: 100%;
//           height: 100%;

//           object-fit: contain;

//           display: block;
//         }

//         @media (max-width: 768px) {
//           .logoSection {
//             gap: 14px;
//           }

//           .logoCard {
//             width: 100px;
//             height: 85px;
//           }
//         }
//       `}</style>
//     </section>

// </>
//   );
// };

// export default Home2;


"use client";

import React, {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { HeadingUpdate } from "./common/HeadingUpdate";

// ✅ Move logos outside component
// const logos = [
//   { img: "/clients/1.png", alt: "Indian Railways" },
//   { img: "/clients/2.png", alt: "Tata Motors" },
//   { img: "/clients/3.png", alt: "Bharat Potroleum" },
//   { img: "/clients/4.png", alt: "Petroleum and Natural Gas" },
//   { img: "/clients/5.png", alt: "BSES Rajdhani Power Limited" },
//   { img: "/clients/6.png", alt: "Confederation of Indian Industry" },
//   { img: "/clients/7.png", alt: "Delhi Police" },
//   { img: "/clients/8.png", alt: "Hindustan Petroleum" },
//   { img: "/clients/9.png", alt: "Honda" },
//   { img: "/clients/10.png", alt: "Indian Post" },
//   { img: "/clients/11.png", alt: "Indian Oil" },
//   { img: "/clients/12.png", alt: "Mother Dairy" },
//   { img: "/clients/13.png", alt: "Ministry of Jal Shakti" },
//   { img: "/clients/14.png", alt: "Micro, Small Medium Enterprises" },
//   { img: "/clients/15.png", alt: "NBCC" },
//   { img: "/clients/16.png", alt: "NPCC" },
//   { img: "/clients/17.png", alt: "Oil India Limited" },
//   { img: "/clients/18.png", alt: "Bureau Of Indian Standards" },
//   { img: "/clients/19.png", alt: "PCRA" },
//   { img: "/clients/20.png", alt: "Sab Padhe Sab Badhe" },
//   { img: "/clients/21.png", alt: "Municipal Corporation of Delhi" },
//   { img: "/clients/22.png", alt: "NSDC" },
//   { img: "/clients/23.png", alt: "Ghaziabad" },
// ];
const logos = [
  {
    img: "/clients/govtClients/indianrailways.png",
    alt: "Indian Railways — nukkad natak client",
  },
  {
    img: "/clients/pvtClients/tatamotors.png",
    alt: "Tata Motors — nukkad natak client",
  },
  {
    img: "/clients/pvtClients/bharatpetroleum.png",
    alt: "Bharat Petroleum — nukkad natak client",
  },
  {
    img: "/clients/govtClients/ministryofpetroleumandnaturalgas.png",
    alt: "Ministry of Petroleum and Natural Gas — nukkad natak client",
  },
  {
    img: "/clients/pvtClients/bses.png",
    alt: "BSES Rajdhani Power Limited — nukkad natak client",
  },
  {
    img: "/clients/pvtClients/cii.png",
    alt: "Confederation of Indian Industry (CII) — nukkad natak client",
  },
  {
    img: "/clients/govtClients/delhipolice.png",
    alt: "Delhi Police — nukkad natak client",
  },
  {
    img: "/clients/pvtClients/hindustanpetroleum.png",
    alt: "Hindustan Petroleum — nukkad natak client",
  },
  {
    img: "/clients/pvtClients/honda.png",
    alt: "Honda — nukkad natak client",
  },
  {
    img: "/clients/govtClients/indiapost.png",
    alt: "India Post — nukkad natak client",
  },
  {
    img: "/clients/govtClients/indianoil.png",
    alt: "Indian Oil — nukkad natak client",
  },
  {
    img: "/clients/pvtClients/motherdairy.png",
    alt: "Mother Dairy — nukkad natak client",
  },
  {
    img: "/clients/govtClients/ministryofjalshakti.png",
    alt: "Ministry of Jal Shakti — nukkad natak client",
  },
  {
    img: "/clients/govtClients/msme.png",
    alt: "Micro, Small & Medium Enterprises (MSME) — nukkad natak client",
  },
  {
    img: "/clients/govtClients/nbcc.png",
    alt: "NBCC — nukkad natak client",
  },
  {
    img: "/clients/govtClients/npcc.png",
    alt: "NPCC — nukkad natak client",
  },
  {
    img: "/clients/govtClients/oilindialimited.png",
    alt: "Oil India Limited — nukkad natak client",
  },
  {
    img: "/clients/govtClients/bureauofindianstadards.png",
    alt: "Bureau of Indian Standards (BIS) — nukkad natak client",
  },
  {
    img: "/clients/govtClients/pcra.png",
    alt: "Petroleum Conservation Research Association (PCRA) — nukkad natak client",
  },
  {
    img: "/clients/govtClients/sarvashikshaabhiyan.png",
    alt: "Sarva Shiksha Abhiyan — nukkad natak client",
  },
  {
    img: "/clients/govtClients/municipalcorporationofdelhi.png",
    alt: "Municipal Corporation of Delhi — nukkad natak client",
  },
  {
    img: "/clients/pvtClients/nsdc.png",
    alt: "National Skill Development Corporation (NSDC) — nukkad natak client",
  },
  {
    img: "/clients/govtClients/ghaziabadnagarnigam.png",
    alt: "Ghaziabad Nagar Nigam — nukkad natak client",
  },
  // {
  //   img: "/clients/govtClients/csdc.png",
  //   alt: "Construction Skill Development Council (CSDC) — nukkad natak client",
  // },
];

const Home2 = () => {
  const [isReady, setIsReady] = useState(false);

  const marqueeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ Split logos into rows
  const rows = useMemo(() => {
    const chunkSize = 12;
    const result = [];

    for (let i = 0; i < logos.length; i += chunkSize) {
      result.push(logos.slice(i, i + chunkSize));
    }

    return result;
  }, []);

  // ✅ Prevent flicker on reload
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      marqueeRefs.current.forEach((row, index) => {
        if (!row) return;

        if (index % 2 === 0) {
          gsap.set(row, { xPercent: 0 });

          gsap.to(row, {
            xPercent: -50,
            duration: 15,
            ease: "none",
            repeat: -1,
          });
        } else {
          gsap.set(row, { xPercent: -50 });

          gsap.to(row, {
            xPercent: 0,
            duration: 15,
            ease: "none",
            repeat: -1,
          });
        }
      });

      setIsReady(true);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div>
        <HeadingUpdate
          title="Trusted By"
          color="black"
          title2={true}
          title2Text="Industry Leaders"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      <section
        className="logoSection"
        style={{
          visibility: isReady ? "visible" : "hidden",
        }}
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="marqueeWrapper">
            <div
              ref={(el) => {
                marqueeRefs.current[rowIndex] = el;
              }}
              className="marquee"
            >
              {[...row, ...row].map((item, index) => (
                <div key={index} className="logoCard">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="logoImage"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <style jsx>{`
          .logoSection {
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .marqueeWrapper {
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .marquee {
            display: flex;
            align-items: center;
            gap: 10px;
            width: max-content;

            will-change: transform;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
          }

          .logoCard {
            width: 136px;
            height: 117px;

            flex-shrink: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #fff;
            border-radius: 14px;

            padding: 0 10px;

            transition: transform 0.3s ease;

            backface-visibility: hidden;
            transform: translateZ(0);
          }

          .logoCard:hover {
            transform: translateY(-4px);
          }

          .logoImage {
            width: 100%;
            height: 100%;

            object-fit: contain;
            display: block;
          }

          @media (max-width: 768px) {
            .logoSection {
              gap: 14px;
            }

            .logoCard {
              width: 100px;
              height: 85px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Home2;