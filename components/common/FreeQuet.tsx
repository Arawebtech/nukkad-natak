"use client";

import { CSSProperties, useRef } from "react";
import { RiWhatsappFill } from "react-icons/ri";

export default function FreeQuet() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const containerStyle: CSSProperties = {
    width: "100%",
    overflow: "hidden",
    padding: "40px 0px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  };

  const innerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap:"wrap",
    gap:"25px",
    margin: "auto",
    color: "#fff",
    position: "relative",
    width: "100%",
  };

  const textStyle: CSSProperties = {
    maxWidth: "600px",
  };

  const headingStyle: CSSProperties = {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "10px",
  };

  const accentStyle: CSSProperties = {
    color: "#EB631D",
  };

  const subStyle: CSSProperties = {
    fontSize: "12px",
    opacity: 0.8,
  };

  const buttonStyle: CSSProperties = {
    background: "#EB631D",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "0.3s",
  };

  const arrowStyle: CSSProperties = {
    fontSize: "14px",
  };

  return (
    <div ref={sectionRef} style={containerStyle}>
      {/* Top decorative line */}
      <div
        style={{
          position: "absolute",
          top: -5,
          left: 0,
          width: "100%",
          height: "12px",
          backgroundImage: "url('/images/footerline.png')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          backgroundSize: "contain",
          zIndex: 20,
          opacity: 0.95,
        }}
      />

      <div style={innerStyle}>
        <div style={textStyle}>
          <h3 style={headingStyle}>
            Ready to <span style={accentStyle}>Promote Your Brand</span>{" "}
            Creatively?
          </h3>

          <p style={subStyle}>
            Partner with WI Events to deliver powerful street plays that make
            your brand stand out!
          </p>
        </div>

        <a href="/contact" style={buttonStyle}>
          Chat on WhatsApp <span style={arrowStyle}>  <RiWhatsappFill color="#fff" size={20} /></span>
        </a>
      </div>
    </div>
  );
}