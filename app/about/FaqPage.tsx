"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";
import { Plus, Minus } from "lucide-react";

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

const FaqPage = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animatingRef = useRef(false);

  const [active, setActive] = useState<number | null>(0);

  useEffect(() => {
    if (refs.current[0]) {
      gsap.set(refs.current[0], { height: "auto" });
      if (iconRefs.current[0]) {
        gsap.set(iconRefs.current[0], { rotate: 45 });
      }
    }
  }, []);

  const toggle = (i: number) => {
    if (animatingRef.current) return; // ❗ prevent spam clicks

    const el = refs.current[i];
    const icon = iconRefs.current[i];

    if (!el) return;

    const isOpen = active === i;

    animatingRef.current = true;

    // ================= CLOSE CURRENT =================
    const closeCurrent = () => {
      if (active === null) return Promise.resolve();

      const currentEl = refs.current[active];
      const currentIcon = iconRefs.current[active];

      if (!currentEl) return Promise.resolve();

      return new Promise((resolve) => {
        gsap.to(currentEl, {
          height: 0,
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: resolve,
        });

        if (currentIcon) {
          gsap.to(currentIcon, {
            rotate: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    };

    // ================= OPEN NEW =================
    const openNew = () => {
      gsap.set(el, { height: "auto" });
      const height = el.scrollHeight;

      gsap.fromTo(
        el,
        { height: 0 },
        {
          height,
          duration: 0.65,
          ease: "power2.inOut",
        }
      );

      if (icon) {
        gsap.fromTo(
          icon,
          { rotate: 0 },
          {
            rotate: 225,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(icon, {
                rotate: 180,
                duration: 0.3,
                ease: "elastic.out(1, 0.5)",
              });
            },
          }
        );
      }
    };

    // ================= LOGIC =================
    (async () => {
      // same click → just close
      if (isOpen) {
        await closeCurrent();
        setActive(null);
        animatingRef.current = false;
        return;
      }

      // different item → close previous first then open new
      await closeCurrent();

      setActive(i);
      openNew();

      setTimeout(() => {
        animatingRef.current = false;
      }, 700);
    })();
  };

  return (
    <section
      className="website-container-with-bg-img"
      style={{ width: "100%", paddingBottom: "60px" }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <HeadingUpdate
          title="Our"
          color="white"
          title2={true}
          title2Text="FAQ'S"
          mobileSize="25px"
          desktopSize="30px"
        />

        <div
          className="faq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{
                border: "2px solid #fff",
                borderRadius: "8px",
                color: "#fff",
                padding: "12px",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "10px",
                  padding: "5px",
                  color: "#fff",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "left",
                  }}
                >
                  {i + 1}. {item.question}
                </span>

                <span
                  ref={(el) => {
                    iconRefs.current[i] = el;
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transformOrigin: "center",
                  }}
                >
                  {active === i ? <Minus size={22} /> : <Plus size={22} />}
                </span>
              </button>

              <div
                ref={(el) => {
                  refs.current[i] = el;
                }}
                style={{
                  height: i === 0 && active === 0 ? "auto" : 0,
                  overflow: "hidden",
                  padding: "0 5px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.8",
                    margin: 0,
                    paddingTop: "12px",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqPage;