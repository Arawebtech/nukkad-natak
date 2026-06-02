// export const HeadingUpdate = ({
//   title = "About",
//   color = "black",
//   title2 = false,
//   title2Text = "Us",

import { AnimateText } from "../animations/AnimateText";

//   // 👇 NEW: responsive size control
//   mobileSize = "20px",
//   desktopSize = "40px",
// }) => {
//   return (
//     <div className="heading-wrapper">
//       {/* LEFT ICON */}
//       <div className="heading-icon">
//         <img
//           src="/images/heading-icon.png"
//           alt="Heading Icon"
//         />
//       </div>

//       {/* TITLE */}
//       <h2 className=""
//         style={{
//           margin: 0,
//           fontSize: `clamp(${mobileSize}, 5vw, ${desktopSize})`,
//           fontWeight: 800,
//           color: color,
//           whiteSpace:"nowrap",
//           lineHeight: 1.1,
//         }}
//       >
//         {title}{" "}
//         {title2 && (
//           <span style={{ color: "#EB631D" }}>
//             {title2Text}
//           </span>
//         )}
//       </h2>

//       {/* RIGHT ICON */}
//       <div className="heading-icon right-icon">
//         <img
//           src="/images/heading-icon.png"
//           alt="Heading Icon"
//         />
//       </div>

//       <style jsx>{`
//         .heading-wrapper {
//           width: 100%;
//           padding: 40px 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 30px;
//         }

//         .heading-icon {
//           width: 90%;
//           flex-shrink: 1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .heading-icon img {
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//         }

//         .right-icon {
//           transform: rotate(180deg);
//         }

      

//       @media (max-width: 768px) {
//   .heading-wrapper {
//     padding: 30px 10px;
//     gap: 10px;
//   }

//   .heading-icon {
//     display: none; /* 👈 mobile pe images hide */
//   }
// }
//       `}</style>
//     </div>
//   );
// };


// export const HeadingUpdate = ({
//   title = "About",
//   color = "black",
//   title2 = false,
//   title2Text = "Us",
//   mobileSize = "20px",
//   desktopSize = "40px",
// }) => {
//   return (
//     <div className="heading-main">
//       <div className="heading-wrapper">
//         {/* LEFT ICON */}
//         {/* <div className="heading-icon">
//           <img
//             src="/images/heading-icon.png"
//             alt="Heading Icon"
//           />
//         </div> */}

//         {/* TITLE */}
//         <div className="heading-title-wrap">
//           <h2
//             style={{
//               margin: 0,
//               fontSize: `clamp(${mobileSize}, 5vw, ${desktopSize})`,
//               fontWeight: 800,
//               color: color,
//               whiteSpace: "nowrap",
//               lineHeight: 1.1,
//               position: "relative",
//               display: "inline-block",
//               paddingBottom: "12px",
//             }}
//           >
//             {title}{" "}
//             {title2 && (
//               <span style={{ color: "#EB631D" }}>
//                 {title2Text}
//               </span>
//             )}

//             {/* SAME 60% BORDER */}
//             <span
//               style={{
//                 position: "absolute",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 bottom: 0,
//                 width: "60%",
//                 height: "4px",
//                 background: "#EB631D",
//                 borderRadius: "999px",
//               }}
//             />
//           </h2>
//         </div>

//         {/* RIGHT ICON */}
//         {/* <div className="heading-icon right-icon">
//           <img
//             src="/images/heading-icon.png"
//             alt="Heading Icon"
//           />
//         </div> */}
//       </div>

//       <style jsx>{`
//         .heading-main {
//           width: 100%;
//         }

//         .heading-wrapper {
//           width: 100%;
//           padding: 40px 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 30px;
//         }

//         .heading-title-wrap {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .heading-icon {
//           width: 90%;
//           flex-shrink: 1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .heading-icon img {
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//         }

//         .right-icon {
//           transform: rotate(180deg);
//         }

//         @media (max-width: 768px) {
//           .heading-wrapper {
//             padding: 40px 10px;
//             gap: 10px;
//           }

//           .heading-icon {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };




export const HeadingUpdate = ({
  title = "About",
  color = "black",
  title2 = false,
  title2Text = "Us",
  mobileSize = "25px",
  desktopSize = "30px",
}) => {
  return (
    <div className="heading-main">
      <div className="heading-wrapper">
        <div className="heading-title-wrap">
          <AnimateText>
            <h2
              className="heading-title"
              style={{
                fontSize: `clamp(${mobileSize}, 5vw, ${desktopSize})`,
                color,
              }}
            >
              {title}{" "}
              {title2 && (
                <span className="highlight">
                  {title2Text}
                </span>
              )}
            </h2>
          </AnimateText>
        </div>
      </div>

      <style jsx>{`
        .heading-main {
          width: 100%;
        }

        .heading-wrapper {
          width: 100%;
          padding: 60px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heading-title-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .heading-title {
          margin: 0;
          font-weight: 800;
          white-space: nowrap;
          line-height: 1.1;
          position: relative;
          display: inline-block;
          padding-bottom: 14px;
          max-width: 100%;
          text-align: center;
        }

        .heading-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 70%;
          height: 4px;
          background: #eb631d;
          border-radius: 999px;
        }

        .highlight {
          color: #eb631d;
        }

        @media (max-width: 768px) {
          .heading-wrapper {
            padding: 30px 10px;
          }
        }

        @media (max-width: 415px) {
          .heading-title {
            font-size: 18px !important;
          }
        }
      `}</style>
    </div>
  );
};



export const HeadingUpdateLongText = ({
  title = "About",
  color = "black",
  title2 = false,
  title2Text = "Us",
  mobileSize = "10px",
  desktopSize = "30px",
}) => {
  return (
    <div className="heading-main">
      <div className="heading-wrapper">
        <div className="heading-title-wrap">
          <AnimateText>
            <h2
              className="heading-title"
              style={{
                fontSize: `clamp(${mobileSize}, 5vw, ${desktopSize})`,
                color,
              }}
            >
              {title}{" "}
              {title2 && (
                <span className="highlight">
                  {title2Text}
                </span>
              )}
            </h2>
          </AnimateText>
        </div>
      </div>

      <style jsx>{`
        .heading-main {
          width: 100%;
        }

        .heading-wrapper {
          width: 100%;
          padding: 60px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heading-title-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .heading-title {
          margin: 0;
          font-weight: 800;
       
          line-height: 1.1;
          position: relative;
          display: inline-block;
          padding-bottom: 14px;
          max-width: 100%;
          text-align: center;
        }

        .heading-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 70%;
          height: 4px;
          background: #eb631d;
          border-radius: 999px;
        }

        .highlight {
          color: #eb631d;
        }

        @media (max-width: 768px) {
          .heading-wrapper {
            padding: 30px 10px;
          }
        }

        @media (max-width: 415px) {
          .heading-title {
            font-size: 18px !important;
          }
        }
      `}</style>
    </div>
  );
};


// export const HeadingUpdate = ({
//   title = "About",
//   color = "black",
//   title2 = false,
//   title2Text = "Us",
//   mobileSize = "25px",
//   desktopSize = "30px",
// }) => {
//   return (
//     <div className="heading-main">
//       <div className="heading-wrapper">
//         {/* TITLE */}
//         <div className="heading-title-wrap">
//           <AnimateText>
//           <h2
//             className="heading-title"
//             style={{
//               fontSize: `clamp(${mobileSize}, 5vw, ${desktopSize})`,
//               color: color,
//             }}
//           >
//    {title}{" "}
//             {title2 && (
//               <span className="highlight">
//                 {title2Text}
//               </span>
//             )}
//           </h2>
// </AnimateText>
//         </div>
//       </div>

//       <style jsx>{`
//         .heading-main {
//           width: 100%;
//         }

//         .heading-wrapper {
//           width: 100%;
//           padding: 60px 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .heading-title-wrap {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .heading-title {
//           margin: 0;
//           font-weight: 800;
//           white-space: nowrap;
//           line-height: 1.1;
//           position: relative;
//           display: inline-block;
//           padding-bottom: 14px;
          
//         }

//         .heading-title::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 70%;
//           height: 4px;
//           background: #eb631d;
//           border-radius: 999px;
//         }

//         .highlight {
//           color: #eb631d;
//         }

//         @media (max-width: 768px) {
//           .heading-wrapper {
//             padding: 30px 10px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };