import React from "react";

const Heading3 = ({ title1 = "About", title2="", color="black",fontkaSizeD="40px",fontKaSizeM="40px" }) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "fit-content",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: `clamp(${fontKaSizeM}, 5vw, ${fontkaSizeD})`,
          fontWeight: 800,
          color:color,
          lineHeight: 1.2,
          whiteSpace: "nowrap",

          // 👇 IMAGE BORDER BOTTOM
          borderBottom: "20px solid transparent",
          borderImage:
            "url('/images/heading-bottom.png') 30 stretch",
          paddingBottom: "8px",
        }}
      >
        {title1} <span style={{
            color:"#EB631D"
        }}>{title2}</span>
      </h2>
    </div>
  );
};

export default Heading3;