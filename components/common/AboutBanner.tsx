"use client";

import React from "react";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
  description?: any;
  children?: React.ReactNode; // arrows or extra UI
};

const AboutBanner: React.FC<Props> = ({
  image,
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <div style={{ ...styles.wrapper, backgroundImage: `url(${image})` }}>
      
      {/* DARK OVERLAY */}
      <div style={styles.overlay}></div>

      {/* CONTENT */}
      <div className="website-container" style={styles.content}>
        
        {/* LEFT TEXT */}
        <div style={styles.left}>
          {subtitle && <p style={styles.subtitle}>{subtitle}</p>}

          <h1 style={styles.title}>{title}</h1>

          {description && (
            <p style={styles.desc}>
              {description}
            </p>
          )}
        </div>

        {/* RIGHT / ARROWS OR EXTRA UI */}
        {children && <div style={styles.right}>{children}</div>}
      </div>
    </div>
  );
};

export default AboutBanner;

/* ================= STYLES ================= */

const styles: any = {
  wrapper: {
    width: "100%",
    height: "730px",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    transition: "all 0.5s ease-in-out",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.2))",
  },

  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  left: {
    maxWidth: "600px",
    color: "#fff",
  },

  subtitle: {
    color: "#F56A28",
    fontSize: "16px",
    marginBottom: "10px",
    fontWeight: 500,
  },

  title: {
    fontSize: "clamp(32px, 5vw, 70px)",
    fontWeight: 800,
    lineHeight: "1.1",
    marginBottom: "20px",
  },

  desc: {
    fontSize: "clamp(14px, 2vw, 18px)",
    color: "#ddd",
    lineHeight: "1.6",
  },

  right: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  /* MOBILE RESPONSIVE */
  "@media (max-width: 768px)": {
    wrapper: {
      height: "320px",
    },
    content: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "20px",
    },
  },
};