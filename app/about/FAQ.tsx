"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is a street play campaign?",
    answer:
      "A street play campaign is a live performance conducted in public spaces to spread awareness about social issues.",
  },
  {
    question: "How much does a street play cost?",
    answer:
      "The cost depends on location, duration, and team size. It usually starts from basic packages and can vary accordingly.",
  },
  {
    question: "Can you perform in colleges and corporate offices?",
    answer:
      "Yes, we perform in colleges, corporate offices, schools, and public events.",
  },
  {
    question: "Do you provide scripts for the performances?",
    answer:
      "Yes, we provide customized scripts based on the campaign or message requirement.",
  },
];

const   FAQ = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => {
    const el = refs.current[i];
    if (!el) return;

    // close same
    if (active === i) {
      gsap.to(el, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      setActive(null);
      return;
    }

    // close previous
    if (active !== null && refs.current[active]) {
      gsap.to(refs.current[active], {
        height: 0,
        duration: 0.3,
      });
    }

    // open new
    gsap.set(el, { height: "auto" });
    const h = el.scrollHeight;

    gsap.fromTo(
      el,
      { height: 0 },
      {
        height: h,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    setActive(i);
  };

  return (
    <section style={styles.section}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h2 style={styles.heading}>
            Frequently <span style={{ color: "#ff7a00" }}>Asked Questions</span>
          </h2>

          <div style={styles.wrapper}>
            {faqs.map((item, i) => (
              <div key={i} style={styles.card}>
                <button style={styles.question} onClick={() => toggle(i)}>
                  <span style={styles.qText}>
                    {i + 1}. {item.question}
                  </span>
                  <span style={styles.icon}>
                    {active === i ? "−" : "+"}
                  </span>
                </button>

                <div
                ref={(el) => {
  refs.current[i] = el;
}}
                  style={styles.answerBox}
                >
                  <p style={styles.answer}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ

/* ---------------- INLINE STYLES ---------------- */

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1520975958225-5c9c0c6f7b2c?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 15px",
  },

  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: "60px 0",
  },

  container: {
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
  },

  heading: {
    textAlign: "center",
    fontSize: "clamp(24px, 4vw, 42px)",
    fontWeight: 700,
    color: "#fff",
    marginBottom: "40px",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  card: {
    background: "#0f0f0f",
    border: "1px solid #2a2a2a",
    borderRadius: "14px",
    overflow: "hidden",
  },

  question: {
    width: "100%",
    padding: "16px 18px",
    background: "transparent",
    border: "none",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "left",
  },

  qText: {
    fontSize: "clamp(14px, 2vw, 16px)",
    fontWeight: 500,
  },

  icon: {
    color: "#ff7a00",
    fontSize: "22px",
    fontWeight: 700,
  },

  answerBox: {
    height: 0,
    overflow: "hidden",
    paddingLeft: "18px",
    paddingRight: "18px",
  },

  answer: {
    color: "#bdbdbd",
    fontSize: "clamp(13px, 2vw, 15px)",
    lineHeight: "1.6",
    padding: "10px 0 16px",
  },
};