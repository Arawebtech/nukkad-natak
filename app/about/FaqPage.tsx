// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { HeadingUpdate } from "@/components/common/HeadingUpdate";
// import { Plus, Minus } from "lucide-react";

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     question: "What is a street play campaign?",
//     answer:
//       "A street play campaign is a live performance conducted in public spaces to spread awareness about social issues.",
//   },
//   {
//     question: "How much does a street play cost?",
//     answer:
//       "The cost depends on location, duration, and team size. It usually starts from basic packages and can vary accordingly.",
//   },
//   {
//     question: "Can you perform in colleges and corporate offices?",
//     answer:
//       "Yes, we perform in colleges, corporate offices, schools, and public events.",
//   },
//   {
//     question: "Do you provide scripts for the performances?",
//     answer:
//       "Yes, we provide customized scripts based on the campaign or message requirement.",
//   },
// ];

// const FaqPage = () => {
//   const refs = useRef<(HTMLDivElement | null)[]>([]);
//   const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
//   const animatingRef = useRef(false);

//   const [active, setActive] = useState<number | null>(0);

//   useEffect(() => {
//     if (refs.current[0]) {
//       gsap.set(refs.current[0], { height: "auto" });
//       if (iconRefs.current[0]) {
//         gsap.set(iconRefs.current[0], { rotate: 45 });
//       }
//     }
//   }, []);

//   const toggle = (i: number) => {
//     if (animatingRef.current) return; // ❗ prevent spam clicks

//     const el = refs.current[i];
//     const icon = iconRefs.current[i];

//     if (!el) return;

//     const isOpen = active === i;

//     animatingRef.current = true;

//     // ================= CLOSE CURRENT =================
//     const closeCurrent = () => {
//       if (active === null) return Promise.resolve();

//       const currentEl = refs.current[active];
//       const currentIcon = iconRefs.current[active];

//       if (!currentEl) return Promise.resolve();

//       return new Promise((resolve) => {
//         gsap.to(currentEl, {
//           height: 0,
//           duration: 0.5,
//           ease: "power3.inOut",
//           onComplete: resolve,
//         });

//         if (currentIcon) {
//           gsap.to(currentIcon, {
//             rotate: 0,
//             duration: 0.4,
//             ease: "power2.out",
//           });
//         }
//       });
//     };

//     // ================= OPEN NEW =================
//     const openNew = () => {
//       gsap.set(el, { height: "auto" });
//       const height = el.scrollHeight;

//       gsap.fromTo(
//         el,
//         { height: 0 },
//         {
//           height,
//           duration: 0.65,
//           ease: "power2.inOut",
//         }
//       );

//       if (icon) {
//         gsap.fromTo(
//           icon,
//           { rotate: 0 },
//           {
//             rotate: 225,
//             duration: 0.5,
//             ease: "power2.out",
//             onComplete: () => {
//               gsap.to(icon, {
//                 rotate: 180,
//                 duration: 0.3,
//                 ease: "elastic.out(1, 0.5)",
//               });
//             },
//           }
//         );
//       }
//     };

//     // ================= LOGIC =================
//     (async () => {
//       // same click → just close
//       if (isOpen) {
//         await closeCurrent();
//         setActive(null);
//         animatingRef.current = false;
//         return;
//       }

//       // different item → close previous first then open new
//       await closeCurrent();

//       setActive(i);
//       openNew();

//       setTimeout(() => {
//         animatingRef.current = false;
//       }, 700);
//     })();
//   };

//   return (
//     <section
//       className="website-container-with-bg-img"
//       style={{ width: "100%", paddingBottom: "60px" }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1200px",
//           margin: "auto",
//         }}
//       >
//         <HeadingUpdate
//           title="Our"
//           color="white"
//           title2={true}
//           title2Text="FAQ'S"
//           mobileSize="25px"
//           desktopSize="30px"
//         />

//         <div
//           className="faq-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2, 1fr)",
//             gap: "25px",
     
//           }}
//         >
//           {faqs.map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 border: "2px solid #fff",
//                 borderRadius: "8px",
//                 color: "#fff",
//                 padding: "12px",
//               }}
//             >
//               <button
//                 onClick={() => toggle(i)}
//                 style={{
//                   width: "100%",
//                   background: "transparent",
//                   border: "none",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   gap: "10px",
//                   padding: "5px",
//                   color: "#fff",
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     textAlign: "left",
//                   }}
//                 >
//                   {i + 1}. {item.question}
//                 </span>

//                 <span
//                   ref={(el) => {
//                     iconRefs.current[i] = el;
//                   }}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     transformOrigin: "center",
//                   }}
//                 >
//                   {active === i ? <Minus size={22} /> : <Plus size={22} />}
//                 </span>
//               </button>

//               <div
//                 ref={(el) => {
//                   refs.current[i] = el;
//                 }}
//                 style={{
//                   height: i === 0 && active === 0 ? "auto" : 0,
//                   overflow: "hidden",
//                   padding: "0 5px",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: "12px",
//                     lineHeight: "1.8",
//                     margin: 0,
//                     paddingTop: "12px",
//                   }}
//                 >
//                   {item.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @media (max-width: 768px) {
//           .faq-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FaqPage;

"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";
import { Plus } from "lucide-react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is a Nukkad Natak?",
    answer:
      "A Nukkad Natak is a live public awareness activity that uses storytelling, dialogue, music, and audience interaction to communicate important social and public messages in a simple and engaging way.",
  },

  {
    id: 2,
    question: "How does Nukkad Natak help in awareness campaigns?",
    answer:
      "Nukkad Natak helps organizations connect directly with people through real-time audience engagement and relatable communication. It is widely used for social awareness, CSR initiatives, educational programs, and public outreach campaigns across India.",
  },

  {
    id: 3,
    question: "Do you organize awareness campaigns across India?",
    answer:
      "Yes, our team works with government organizations, educational institutions, NGOs, and brands across India for awareness campaigns, CSR initiatives, and public engagement activities.",
  },

  {
    id: 4,
    question: "Can campaigns be conducted in regional languages?",
    answer:
      "Yes, campaigns can be organized in multiple languages including Hindi, Punjabi, Urdu, Gujarati, Marathi, Bengali, Tamil, Telugu, and other regional languages based on the audience and campaign requirements.",
  },

  {
    id: 5,
    question: "Do you work with government organizations and NGOs?",
    answer:
      "Yes, we work with government organizations, NGOs, educational institutions, and private organizations for awareness campaigns, public engagement initiatives, and CSR activities across India.",
  },

  {
    id: 6,
    question: "What types of awareness campaigns do you support?",
    answer:
      "We support awareness campaigns related to road safety, health awareness, education, environmental awareness, voter awareness, women empowerment, social responsibility, CSR initiatives, and community engagement activities.",
  },

  {
    id: 7,
    question: "Why is Nukkad Natak effective for public engagement?",
    answer:
      "Nukkad Natak creates direct audience connection through interactive communication and relatable storytelling. It helps people understand and remember important messages more effectively than traditional communication methods.",
  },

  {
    id: 8,
    question: "How can I plan an awareness campaign?",
    answer:
      "You can contact our team with your campaign objective, audience type, preferred location, and event details. Based on your requirement, we help plan a customized awareness campaign suited to your outreach goals.",
  },

  {
    id: 9,
    question:
      "Why do organizations use Nukkad Natak for awareness activities?",
    answer:
      "Organizations use Nukkad Natak because it helps create stronger public engagement, better audience attention, and meaningful community connection through direct communication and live interaction.",
  },
    {
    id: 10,
    question:
      "Are awareness campaigns available for schools, colleges, and corporate organizations?",
    answer:
      "Yes, campaigns can be organized for schools, colleges, universities, corporate organizations, CSR initiatives, and community outreach programs across different locations in India.",
  },
];

const FaqPage = () => {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [active, setActive] = useState<number | null>(1);

  useEffect(() => {
    contentRefs.current.forEach((item, i) => {
      if (!item) return;

      gsap.set(item, {
        height: faqs[i].id === 1 ? "auto" : 0,
      });

      if (iconRefs.current[i]) {
        gsap.set(iconRefs.current[i], {
          rotate: faqs[i].id === 1 ? 45 : 0,
        });
      }
    });
  }, []);

  const toggleFAQ = (id: number) => {
    const currentIndex = faqs.findIndex((faq) => faq.id === id);

    // CLOSE CURRENT
    if (active === id) {
      const current = contentRefs.current[currentIndex];
      const currentIcon = iconRefs.current[currentIndex];

      gsap.to(current, {
        height: 0,
        duration: 0.25,
        ease: "power2.inOut",
      });

      gsap.to(currentIcon, {
        rotate: 0,
        duration: 0.25,
      });

      setActive(null);
      return;
    }

    // CLOSE ALL
    contentRefs.current.forEach((item, i) => {
      if (!item) return;

      gsap.to(item, {
        height: 0,
        duration: 0.25,
        ease: "power2.inOut",
      });

      gsap.to(iconRefs.current[i], {
        rotate: 0,
        duration: 0.25,
      });
    });

    // OPEN SELECTED
    const current = contentRefs.current[currentIndex];
    const currentIcon = iconRefs.current[currentIndex];

    if (!current) return;

    gsap.to(current, {
      height: current.scrollHeight,
      duration: 0.30,
      ease: "power2.inOut",
    });

    gsap.to(currentIcon, {
      rotate: 45,
      duration: 0.25,
      ease: "power2.out",
    });

    setActive(id);
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
              key={item.id}
              style={{
                border: "2px solid #fff",
                borderRadius: "10px",
                color: "#fff",
                padding: "14px",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(4px)",
              }}
            >
              <button
                onClick={() => toggleFAQ(item.id)}
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
                  padding: 0,
                }}
              >
                <span
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  {item.id}. {item.question}
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
                  height: 0,
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.9",
                    paddingTop: "12px",
                    margin: 0,
                    color: "rgba(255,255,255,0.8)",
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
            gap: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqPage;