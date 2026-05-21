
"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";
import { Plus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is a Nukkad Natak?",
    answer:
    "A Nukkad Natak is a live public awareness activity that uses storytelling, dialogue, music, and audience interaction to communicate important social and public messages in a simple and engaging way."
  },

  {
    question: "How does Nukkad Natak help in awareness campaigns?",
    answer:
      "Nukkad Natak helps organizations connect directly with people through real-time audience engagement and relatable communication. It is widely used for social awareness, CSR initiatives, educational programs, and public outreach campaigns across India.",
  },

  {
    question: "Do you organize awareness campaigns across India?",
    answer:
      "Yes, our team works with government organizations, educational institutions, NGOs, and brands across India for awareness campaigns, CSR initiatives, and public engagement activities.",
  },

  {
    question: "Can campaigns be conducted in regional languages?",
    answer:
      "Yes, campaigns can be organized in multiple languages including Hindi, Punjabi, Urdu, Gujarati, Marathi, Bengali, Tamil, Telugu, and other regional languages based on the audience and campaign requirements.",
  },

{
  question: "Do you work with government organizations and NGOs?",
  answer:
    "Yes, we work with government organizations, NGOs, educational institutions, and private organizations for awareness campaigns, public engagement initiatives, and CSR activities across India."
},

{
  question: "Are awareness campaigns available for schools, colleges, and corporate organizations?",
  answer:
    "Yes, campaigns can be organized for schools, colleges, universities, corporate organizations, CSR initiatives, and community outreach programs across different locations in India."
},

{
  question: "What types of awareness campaigns do you support?",
  answer:
    "We support awareness campaigns related to road safety, health awareness, education, environmental awareness, voter awareness, women empowerment, social responsibility, CSR initiatives, and community engagement activities."
},

{
  question: "Why is Nukkad Natak effective for public engagement?",
  answer:
    "Nukkad Natak creates direct audience connection through interactive communication and relatable storytelling. It helps people understand and remember important messages more effectively than traditional communication methods."
},

{
  question: "How can I plan an awareness campaign?",
  answer:
    "You can contact our team with your campaign objective, audience type, preferred location, and event details. Based on your requirement, we help plan a customized awareness campaign suited to your outreach goals."
},

{
  question: "Why do organizations use Nukkad Natak for awareness activities?",
  answer:
    "Organizations use Nukkad Natak because it helps create stronger public engagement, better audience attention, and meaningful community connection through direct communication and live interaction."
}
];

const FaqPage = () => {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [active, setActive] = useState<number | null>(0);

  useEffect(() => {
    contentRefs.current.forEach((item, i) => {
      if (!item) return;

      gsap.set(item, {
        height: i === 0 ? "auto" : 0,
      });

      if (iconRefs.current[i]) {
        gsap.set(iconRefs.current[i], {
          rotate: i === 0 ? 45 : 0,
        });
      }
    });
  }, []);

  const toggleFAQ = (index: number) => {
    // SAME CLICK => CLOSE
    if (active === index) {
      const current = contentRefs.current[index];
      const currentIcon = iconRefs.current[index];

      gsap.to(current, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.to(currentIcon, {
        rotate: 0,
        duration: 0.4,
      });

      setActive(null);
      return;
    }

    // CLOSE ALL
    contentRefs.current.forEach((item, i) => {
      if (!item) return;

      gsap.to(item, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.to(iconRefs.current[i], {
        rotate: 0,
        duration: 0.4,
      });
    });

    // OPEN CLICKED
    const current = contentRefs.current[index];
    const currentIcon = iconRefs.current[index];

    if (!current) return;

    gsap.to(current, {
      height: current.scrollHeight,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(currentIcon, {
      rotate: 45,
      duration: 0.4,
      ease: "power2.out",
    });

    setActive(index);
  };

  return (
    <section
      className="website-container-with-bg-img"
      style={{
        width: "100%",
        paddingBottom: "60px",
      }}
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

        <div className="faq-grid">
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{
                border: "2px solid #fff",
                borderRadius: "10px",
                color: "#fff",
                padding: "14px",
              }}
            >
              <button
                onClick={() => toggleFAQ(i)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#fff",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    fontWeight: 500,
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
                    flexShrink: 0,
                  }}
                >
                  <Plus size={22} />
                </span>
              </button>

              <div
                ref={(el) => {
                  contentRefs.current[i] = el;
                }}
                style={{
                  overflow: "hidden",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.8",
                    paddingTop: "12px",
                    margin: 0,
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
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqPage;