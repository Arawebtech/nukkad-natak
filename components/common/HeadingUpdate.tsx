// export const HeadingUpdate = ({
//   title = "About",
//   color = "black",
//   title2 = false,
//   title2Text = "Us",

"use client";

import { AnimateText } from "../animations/AnimateText";






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