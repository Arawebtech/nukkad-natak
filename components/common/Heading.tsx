// import React from 'react'

// const Heading = ({title="Our Service"}) => {
//   return (
//     <div>
//                 <div
        

//   style={{
//     width: "100%",
//     padding: "60px 20px",

//     display: "flex",
  
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "30px",
//   }}
// >

//      <div
//       style={{
//         width: "fit",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         src="/images/heading-icon.png"
//         alt="Heading Icon"
//         style={{
//           width: "100%",
//           height: "auto",
//           objectFit: "cover",
//         }}
//       />
//     </div>

//   <h2
//     style={{
//       margin: 0,
//       textAlign: "center",
//       fontSize: "clamp(10px, 4vw, 42px)",
//       whiteSpace:"nowrap",
//       fontWeight: 800,
//       color: "#111111",
//       lineHeight: 1.2,
//     }}
//   >
//   {title}
//   </h2>

//    <div
//       style={{
//         width: "fit",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         "rotate":"180deg"
//       }}
//     >
//       <img
//         src="/images/heading-icon.png"
//         alt="Heading Icon"
//         style={{
//           width: "100%",
//           height: "auto",
//           objectFit: "cover",
//         }}
//       />
//     </div>

// </div>
//     </div>
//   )
// }

// export default Heading

import React from "react";

const Heading = ({ title = "Our Service" }) => {
  return (
    <div className="heading-wrapper">
      {/* LEFT ICON */}
      <div className="heading-icon">
        <img
          src="/images/heading-icon.png"
          alt="Heading Icon"
        />
      </div>

      {/* TITLE */}
      <h2 className="heading-title">
        {title}
      </h2>

      {/* RIGHT ICON */}
      <div className="heading-icon right-icon">
        <img
          src="/images/heading-icon.png"
          alt="Heading Icon"
        />
      </div>

      <style jsx>{`
        .heading-wrapper {
          width: 100%;
          padding: 60px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }

        .heading-icon {
          width: 100%;
          flex-shrink: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heading-icon img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .right-icon {
          transform: rotate(180deg);
        }

        .heading-title {
          margin: 0;
          text-align: center;
          font-size: clamp(40px, 4vw, 42px);
          font-weight: 800;
          color: #111111;
          line-height: 1.2;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .heading-wrapper {
            padding: 30px 10px;
            gap: 10px;
          }

          .heading-icon {
            width: 70px;
          }

          .heading-title {
            font-size: 25px;
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
};

export default Heading;