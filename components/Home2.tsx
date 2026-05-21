

// "use client";

// import React from "react";
// import { HeadingUpdate } from "./common/HeadingUpdate";

// const Home2 = () => {
//   // TOP ROW
//   const topRow = [1, 2, 3, 4, 5, 6, 7,8,9,10];

//   // BOTTOM ROW
//   const bottomRow = [11,12, 13, 14, 15, 16, 17,18,19,20];

//   return (
//     <section className="logoSection">
//       {/* HEADING */}
//       <div>
//         <HeadingUpdate
//           title="Our"
//           color="black"
//           title2={true}
//           title2Text="Client's"
//           mobileSize="25px"
//           desktopSize="30px"
//         />
//       </div>

//       {/* TOP MARQUEE */}
//       <div className="marqueeWrapper">
//         <div className="marquee marqueeLeft">
//           {[...topRow, ...topRow].map((item, index) => (
//             <div key={index} className="logoCard">
//               <img
//                 src={`/icons/${item}.png`}
//                 alt="logo"
//                 className="logoImage"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* BOTTOM MARQUEE */}
//       <div className="marqueeWrapper secondRow">
//         <div className="marquee marqueeRight">
//           {[...bottomRow, ...bottomRow].map((item, index) => (
//             <div key={index} className="logoCard">
//               <img
//                 src={`/icons/${item}.png`}
//                 alt="logo"
//                 className="logoImage"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .logoSection {
//           width: 100%;
//           overflow: hidden;
//           padding: 20px 0;
//           display: flex;
//           flex-direction: column;
//           gap: 25px;
//         }

//         .marqueeWrapper {
//           width: 100%;
//           overflow: hidden;
//           position: relative;
//         }

//         .secondRow {
//           margin-top: -10px;
//         }

//         .marquee {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           width: max-content;
//         }

//         /* LEFT TO RIGHT */
//         .marqueeLeft {
//           animation: scrollLeft 18s linear infinite;
//         }

//         /* RIGHT TO LEFT */
//         .marqueeRight {
//           animation: scrollRight 18s linear infinite;
//         }

//         .logoCard {
//           width: 180px;
//           // height: 130px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           flex-shrink: 0;

//           border-radius: 20px;

//           // background: rgba(255, 255, 255, 0.7);

//           // backdrop-filter: blur(10px);

//           // border: 1px solid rgba(0, 0, 0, 0.06);

//           transition: 0.4s ease;
//         }

//         .logoCard:hover {
//           transform: translateY(-6px);
//         }

//         .logoImage {
//           width: 75%;
//           height: 75%;
//           object-fit: contain;
//         }

//         /* LEFT */
//         @keyframes scrollLeft {
//           0% {
//             transform: translateX(0%);
//           }

//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         /* RIGHT */
//         @keyframes scrollRight {
//           0% {
//             transform: translateX(-50%);
//           }

//           100% {
//             transform: translateX(0%);
//           }
//         }

//         @media (max-width: 768px) {
//           .marquee {
//             gap: 1px;
//           }

//           .logoCard {
//             width: 130px;
//             // height: 95px;
//             border-radius: 16px;
//           }

//           .logoImage {
//             width: 70%;
//             height: 70%;
//           }

//           .marqueeLeft,
//           .marqueeRight {
//             animation-duration: 12s;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Home2;

"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
} from "react";

import gsap from "gsap";
import { HeadingUpdate } from "./common/HeadingUpdate";

const Home2 = () => {
  // ONLY ADD HERE
  const logos = [
    {
      img: "/icons/1.png",
      alt: "Client Logo 1",
    },
    {
      img: "/icons/2.png",
      alt: "Client Logo 2",
    },
    {
      img: "/icons/3.png",
      alt: "Client Logo 3",
    },
    {
      img: "/icons/4.png",
      alt: "Client Logo 4",
    },
    {
      img: "/icons/5.png",
      alt: "Client Logo 5",
    },
    {
      img: "/icons/6.png",
      alt: "Client Logo 6",
    },
    {
      img: "/icons/7.png",
      alt: "Client Logo 7",
    },
    {
      img: "/icons/8.png",
      alt: "Client Logo 8",
    },
    {
      img: "/icons/9.png",
      alt: "Client Logo 9",
    },
    {
      img: "/icons/10.png",
      alt: "Client Logo 10",
    },
    {
      img: "/icons/11.png",
      alt: "Client Logo 11",
    },
    {
      img: "/icons/12.png",
      alt: "Client Logo 12",
    },
    {
      img: "/icons/13.png",
      alt: "Client Logo 13",
    },
    {
      img: "/icons/14.png",
      alt: "Client Logo 14",
    },
    {
      img: "/icons/15.png",
      alt: "Client Logo 15",
    },
    {
      img: "/icons/16.png",
      alt: "Client Logo 16",
    },
    {
      img: "/icons/17.png",
      alt: "Client Logo 17",
    },
    {
      img: "/icons/18.png",
      alt: "Client Logo 18",
    },
    {
      img: "/icons/19.png",
      alt: "Client Logo 19",
    },
    {
      img: "/icons/20.png",
      alt: "Client Logo 20",
    },
        {
      img: "/icons/21.png",
      alt: "Client Logo 21",
    },
  ];

  // AUTO SPLIT ROWS
  const rows = useMemo(() => {
    const chunkSize = 11;

    const result = [];

    for (
      let i = 0;
      i < logos.length;
      i += chunkSize
    ) {
      result.push(
        logos.slice(
          i,
          i + chunkSize
        )
      );
    }

    return result;
  }, [logos]);

  const marqueeRefs =
    useRef<
      (
        HTMLDivElement | null
      )[]
    >([]);

  useEffect(() => {
    marqueeRefs.current.forEach(
      (row, index) => {
        if (!row) return;

        // LEFT TO RIGHT
        if (index % 2 === 0) {
          gsap.to(row, {
            xPercent: -50,
            duration: 15,
            ease: "none",
            repeat: -1,
          });
        }

        // RIGHT TO LEFT
        else {
          gsap.fromTo(
            row,
            {
              xPercent: -50,
            },
            {
              xPercent: 0,
              duration: 15,
              ease: "none",
              repeat: -1,
            }
          );
        }
      }
    );
  }, [rows]);

  return (
<>
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
    <section className="logoSection">

      {/* ROWS */}
      {rows.map(
        (row, rowIndex) => (
          <div
            key={rowIndex}
            className="marqueeWrapper"
          >
            <div
              ref={(el) => {
                marqueeRefs.current[
                  rowIndex
                ] = el;
              }}
              className="marquee"
            >
              {[...row, ...row].map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={index}
                    className="logoCard"
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="logoImage"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}

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
        }

        // .logoCard {
        //   width: 136px;
        //   height: 117px;

        //   flex-shrink: 0;

        //   display: flex;
        //   align-items: center;
        //   justify-content: center;

        //   transition: 0.3s ease;
        // }

        .logoCard {
  width: 136px;
  height: 117px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff; /* WHITE BACKGROUND */

  border-radius: 14px;
padding:0px 10px;
  transition: 0.3s ease;
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