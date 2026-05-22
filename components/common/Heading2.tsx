// import React from "react";

// const Heading2 = ({ title = "About", color="black",title2=false,title2Text="" }) => {
//   return (
//     <div
//       style={{
//         display: "inline-block",
//         width: "fit-content",
//       }}
//     >
//       <h2
//         style={{
//           margin: 0,
//           fontSize: "clamp(40px, 5vw, 60px)",
//           fontWeight: 800,
//           color:color,
//           lineHeight: 1.2,
        

//           borderBottom: "20px solid transparent",
//           borderImage:
//             "url('/images/heading-bottom.png') 30 stretch",
//           paddingBottom: "8px",
//         }}
//       >
//         {title}{title2 ?? 
//       <span style={{
//         color:"#EB631D"
//       }}>
//         title2Text
//       </span>
//         }
//       </h2>
//     </div>
//   );
// };

// export default Heading2;



import React from "react";
import { AnimateText } from "../animations/AnimateText";

const Heading2 = ({
  title = "About",
  color = "black",
  title2 = false,
  title2Text = "",

  // 👇 NEW: responsive size control
  mobileSize = "25px",
  desktopSize = "30px",
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "fit-content",
      }}
    >

                <AnimateText>
           <h2
        style={{
          margin: 0,
          fontSize: `clamp(${mobileSize}, 5vw, ${desktopSize})`,
          fontWeight: 800,
          color: color,
          lineHeight: 1.1,
          borderBottom: "20px solid transparent",
          borderImage: "url('/images/heading-bottom.png') 30 stretch",
          paddingBottom: "8px",
          
        }}
      >
        {title}{" "}
        {title2 && (
          <span style={{ color: "#EB631D" }}>
            {title2Text}
          </span>
        )}
      </h2>
      </AnimateText>

    </div>
  );
};

export default Heading2;