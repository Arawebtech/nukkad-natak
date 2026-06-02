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

// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import { HeadingUpdate } from "@/components/common/HeadingUpdate";
// import { Plus } from "lucide-react";

// type FAQItem = {
//   id: number;
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     id: 1,
//     question: "What is a Nukkad Natak?",
//     answer:
//       "A Nukkad Natak is a live public awareness activity that uses storytelling, dialogue, music, and audience interaction to communicate important social and public messages in a simple and engaging way.",
//   },

//   {
//     id: 2,
//     question: "How does Nukkad Natak help in awareness campaigns?",
//     answer:
//       "Nukkad Natak helps organizations connect directly with people through real-time audience engagement and relatable communication. It is widely used for social awareness, CSR initiatives, educational programs, and public outreach campaigns across India.",
//   },

//   {
//     id: 3,
//     question: "Do you organize awareness campaigns across India?",
//     answer:
//       "Yes, our team works with government organizations, educational institutions, NGOs, and brands across India for awareness campaigns, CSR initiatives, and public engagement activities.",
//   },

//   {
//     id: 4,
//     question: "Can campaigns be conducted in regional languages?",
//     answer:
//       "Yes, campaigns can be organized in multiple languages including Hindi, Punjabi, Urdu, Gujarati, Marathi, Bengali, Tamil, Telugu, and other regional languages based on the audience and campaign requirements.",
//   },

//   {
//     id: 5,
//     question: "Do you work with government organizations and NGOs?",
//     answer:
//       "Yes, we work with government organizations, NGOs, educational institutions, and private organizations for awareness campaigns, public engagement initiatives, and CSR activities across India.",
//   },

//   {
//     id: 6,
//     question: "What types of awareness campaigns do you support?",
//     answer:
//       "We support awareness campaigns related to road safety, health awareness, education, environmental awareness, voter awareness, women empowerment, social responsibility, CSR initiatives, and community engagement activities.",
//   },

//   {
//     id: 7,
//     question: "Why is Nukkad Natak effective for public engagement?",
//     answer:
//       "Nukkad Natak creates direct audience connection through interactive communication and relatable storytelling. It helps people understand and remember important messages more effectively than traditional communication methods.",
//   },

//   {
//     id: 8,
//     question: "How can I plan an awareness campaign?",
//     answer:
//       "You can contact our team with your campaign objective, audience type, preferred location, and event details. Based on your requirement, we help plan a customized awareness campaign suited to your outreach goals.",
//   },

//   {
//     id: 9,
//     question:
//       "Why do organizations use Nukkad Natak for awareness activities?",
//     answer:
//       "Organizations use Nukkad Natak because it helps create stronger public engagement, better audience attention, and meaningful community connection through direct communication and live interaction.",
//   },
//     {
//     id: 10,
//     question:
//       "Are awareness campaigns available for schools, colleges, and corporate organizations?",
//     answer:
//       "Yes, campaigns can be organized for schools, colleges, universities, corporate organizations, CSR initiatives, and community outreach programs across different locations in India.",
//   },
// ];

// const FaqPage = () => {
//   const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

//   const [active, setActive] = useState<number | null>(1);

//   useEffect(() => {
//     contentRefs.current.forEach((item, i) => {
//       if (!item) return;

//       gsap.set(item, {
//         height: faqs[i].id === 1 ? "auto" : 0,
//       });

//       if (iconRefs.current[i]) {
//         gsap.set(iconRefs.current[i], {
//           rotate: faqs[i].id === 1 ? 45 : 0,
//         });
//       }
//     });
//   }, []);

//   const toggleFAQ = (id: number) => {
//     const currentIndex = faqs.findIndex((faq) => faq.id === id);

//     // CLOSE CURRENT
//     if (active === id) {
//       const current = contentRefs.current[currentIndex];
//       const currentIcon = iconRefs.current[currentIndex];

//       gsap.to(current, {
//         height: 0,
//         duration: 0.25,
//         ease: "power2.inOut",
//       });

//       gsap.to(currentIcon, {
//         rotate: 0,
//         duration: 0.25,
//       });

//       setActive(null);
//       return;
//     }

//     // CLOSE ALL
//     contentRefs.current.forEach((item, i) => {
//       if (!item) return;

//       gsap.to(item, {
//         height: 0,
//         duration: 0.25,
//         ease: "power2.inOut",
//       });

//       gsap.to(iconRefs.current[i], {
//         rotate: 0,
//         duration: 0.25,
//       });
//     });

//     // OPEN SELECTED
//     const current = contentRefs.current[currentIndex];
//     const currentIcon = iconRefs.current[currentIndex];

//     if (!current) return;

//     gsap.to(current, {
//       height: current.scrollHeight,
//       duration: 0.30,
//       ease: "power2.inOut",
//     });

//     gsap.to(currentIcon, {
//       rotate: 45,
//       duration: 0.25,
//       ease: "power2.out",
//     });

//     setActive(id);
//   };

//   return (
//     <section
//       className="website-container-with-bg-img"
//       style={{
//         width: "100%",
//         paddingBottom: "60px",
//       }}
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

//         <div className="faq-grid">
//           {faqs.map((item, i) => (
//             <div
//               key={item.id}
//               style={{
//                 border: "2px solid #fff",
//                 borderRadius: "10px",
//                 color: "#fff",
//                 padding: "14px",
//                 background: "rgba(255,255,255,0.03)",
//                 backdropFilter: "blur(4px)",
//               }}
//             >
//               <button
//                 onClick={() => toggleFAQ(item.id)}
//                 style={{
//                   width: "100%",
//                   background: "transparent",
//                   border: "none",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   color: "#fff",
//                   gap: "10px",
//                   padding: 0,
//                 }}
//               >
//                 <span
//                   style={{
//                     textAlign: "left",
//                     fontSize: "15px",
//                     fontWeight: 500,
//                     lineHeight: "1.6",
//                   }}
//                 >
//                   {item.id}. {item.question}
//                 </span>

//                 <span
//                   ref={(el) => {
//                     iconRefs.current[i] = el;
//                   }}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexShrink: 0,
//                   }}
//                 >
//                   <Plus size={22} />
//                 </span>
//               </button>

//               <div
//                 ref={(el) => {
//                   contentRefs.current[i] = el;
//                 }}
//                 style={{
//                   overflow: "hidden",
//                   height: 0,
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: "13px",
//                     lineHeight: "1.9",
//                     paddingTop: "12px",
//                     margin: 0,
//                     color: "rgba(255,255,255,0.8)",
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
//         .faq-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 25px;
//           align-items: start;
//         }

//         @media (max-width: 768px) {
//           .faq-grid {
//             grid-template-columns: 1fr;
//             gap: 18px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FaqPage;


// "use client";

// import React, {
//   useRef,
//   useState,
//   useEffect,
// } from "react";

// import gsap from "gsap";

// import { HeadingUpdate } from "@/components/common/HeadingUpdate";
// import { Plus } from "lucide-react";

// type FAQItem = {
//   id: number;
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     id: 1,
//     question: "What is a Nukkad Natak?",
//     answer:
//       "A Nukkad Natak is a live public awareness activity that uses storytelling, dialogue, music, and audience interaction to communicate important social and public messages in a simple and engaging way.",
//   },

//   {
//     id: 2,
//     question: "How does Nukkad Natak help in awareness campaigns?",
//     answer:
//       "Nukkad Natak helps organizations connect directly with people through real-time audience engagement and relatable communication. It is widely used for social awareness, CSR initiatives, educational programs, and public outreach campaigns across India.",
//   },

//   {
//     id: 3,
//     question: "Do you organize awareness campaigns across India?",
//     answer:
//       "Yes, our team works with government organizations, educational institutions, NGOs, and brands across India for awareness campaigns, CSR initiatives, and public engagement activities.",
//   },

//   {
//     id: 4,
//     question: "Can campaigns be conducted in regional languages?",
//     answer:
//       "Yes, campaigns can be organized in multiple languages including Hindi, Punjabi, Urdu, Gujarati, Marathi, Bengali, Tamil, Telugu, and other regional languages based on the audience and campaign requirements.",
//   },

//   {
//     id: 5,
//     question: "Do you work with government organizations and NGOs?",
//     answer:
//       "Yes, we work with government organizations, NGOs, educational institutions, and private organizations for awareness campaigns, public engagement initiatives, and CSR activities across India.",
//   },

//   {
//     id: 6,
//     question: "What types of awareness campaigns do you support?",
//     answer:
//       "We support awareness campaigns related to road safety, health awareness, education, environmental awareness, voter awareness, women empowerment, social responsibility, CSR initiatives, and community engagement activities.",
//   },

//   {
//     id: 7,
//     question: "Why is Nukkad Natak effective for public engagement?",
//     answer:
//       "Nukkad Natak creates direct audience connection through interactive communication and relatable storytelling. It helps people understand and remember important messages more effectively than traditional communication methods.",
//   },

//   {
//     id: 8,
//     question: "How can I plan an awareness campaign?",
//     answer:
//       "You can contact our team with your campaign objective, audience type, preferred location, and event details. Based on your requirement, we help plan a customized awareness campaign suited to your outreach goals.",
//   },

//   {
//     id: 9,
//     question:
//       "Why do organizations use Nukkad Natak for awareness activities?",
//     answer:
//       "Organizations use Nukkad Natak because it helps create stronger public engagement, better audience attention, and meaningful community connection through direct communication and live interaction.",
//   },
//     {
//     id: 10,
//     question:
//       "Are awareness campaigns available for schools, colleges, and corporate organizations?",
//     answer:
//       "Yes, campaigns can be organized for schools, colleges, universities, corporate organizations, CSR initiatives, and community outreach programs across different locations in India.",
//   },
// ];

// const FaqPage = () => {
//   const contentRefs =
//     useRef<
//       (HTMLDivElement | null)[]
//     >([]);

//   const iconRefs =
//     useRef<
//       (HTMLSpanElement | null)[]
//     >([]);

//   const [active, setActive] =
//     useState<number | null>(1);

//   useEffect(() => {
//     contentRefs.current.forEach(
//       (item, i) => {
//         if (!item) return;

//         if (faqs[i].id === 1) {
//           gsap.set(item, {
//             height: "auto",
//             opacity: 1,
//           });

//           gsap.set(
//             iconRefs.current[i],
//             {
//               rotate: 45,
//             }
//           );
//         } else {
//           gsap.set(item, {
//             height: 0,
//             opacity: 0,
//           });

//           gsap.set(
//             iconRefs.current[i],
//             {
//               rotate: 0,
//             }
//           );
//         }
//       }
//     );
//   }, []);

//   const toggleFAQ = (
//     id: number
//   ) => {
//     const currentIndex =
//       faqs.findIndex(
//         (faq) => faq.id === id
//       );

//     // CLOSE CURRENT
//     if (active === id) {
//       const current =
//         contentRefs.current[
//           currentIndex
//         ];

//       gsap.killTweensOf(current);

//       gsap.to(current, {
//         height: 0,
//         opacity: 0,
//         duration: 0.25,
//         ease: "power2.out",
//       });

//       gsap.to(
//         iconRefs.current[
//           currentIndex
//         ],
//         {
//           rotate: 0,
//           duration: 0.25,
//         }
//       );

//       setActive(null);

//       return;
//     }

//     // CLOSE ALL
//     contentRefs.current.forEach(
//       (item, i) => {
//         if (!item) return;

//         gsap.killTweensOf(item);

//         gsap.to(item, {
//           height: 0,
//           opacity: 0,
//           duration: 0.25,
//           ease: "power2.out",
//         });

//         gsap.to(
//           iconRefs.current[i],
//           {
//             rotate: 0,
//             duration: 0.25,
//           }
//         );
//       }
//     );

//     // OPEN CURRENT
//     const current =
//       contentRefs.current[
//         currentIndex
//       ];

//     if (!current) return;

//     gsap.killTweensOf(current);

//     gsap.set(current, {
//       height: "auto",
//     });

//     const autoHeight =
//       current.offsetHeight;

//     gsap.set(current, {
//       height: 0,
//       opacity: 0,
//     });

//     gsap.to(current, {
//       height: autoHeight,
//       opacity: 1,
//       duration: 0.3,
//       ease: "power2.out",
//       onComplete: () => {
//         gsap.set(current, {
//           height: "auto",
//         });
//       },
//     });

//     gsap.to(
//       iconRefs.current[
//         currentIndex
//       ],
//       {
//         rotate: 45,
//         duration: 0.25,
//       }
//     );

//     setActive(id);
//   };

//   return (
//     <section
//       className="website-container-with-bg-img"
//       style={{
//         width: "100%",
//         paddingBottom: "60px",
//       }}
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

//         <div className="faq-grid">
//           {faqs.map((item, i) => (
//             <div
//               key={item.id}
//               className="faqCard"
//             >
//               <button
//                 onClick={() =>
//                   toggleFAQ(item.id)
//                 }
//                 className="faqButton"
//               >
//                 <span className="faqTitle">
//                   {item.id}.{" "}
//                   {item.question}
//                 </span>

//                 <span
//                   ref={(el) => {
//                     iconRefs.current[
//                       i
//                     ] = el;
//                   }}
//                   className="faqIcon"
//                 >
//                   <Plus size={20} />
//                 </span>
//               </button>

//               <div
//                 ref={(el) => {
//                   contentRefs.current[
//                     i
//                   ] = el;
//                 }}
//                 className="faqContent"
//               >
//                 <p className="faqAnswer">
//                   {item.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .faq-grid {
//           display: grid;
//           grid-template-columns: repeat(
//             2,
//             1fr
//           );

//           gap: 20px;

//           align-items: start;
//         }

//         .faqCard {
//           border: 1px solid
//             rgba(
//               255,
//               255,
//               255,
//               0.2
//             );

//           border-radius: 12px;

//           padding: 14px;

//           background: rgba(
//             255,
//             255,
//             255,
//             0.04
//           );

//           backdrop-filter: blur(8px);

//           will-change: transform;
//         }

//         .faqButton {
//           width: 100%;

//           background: transparent;

//           border: none;

//           display: flex;

//           justify-content: space-between;

//           align-items: flex-start;

//           gap: 12px;

//           cursor: pointer;

//           padding: 0;

//           color: #fff;
//         }

//         .faqTitle {
//           text-align: left;

//           font-size: 15px;

//           line-height: 1.7;

//           font-weight: 500;
//         }

//         .faqIcon {
//           flex-shrink: 0;

//           display: flex;

//           align-items: center;

//           justify-content: center;
//         }

//         .faqContent {
//           overflow: hidden;

//           will-change: height;
//         }

//         .faqAnswer {
//           padding-top: 12px;

//           margin: 0;

//           font-size: 13px;

//           line-height: 1.9;

//           color: rgba(
//             255,
//             255,
//             255,
//             0.82
//           );
//         }

//         @media (max-width: 768px) {
//           .faq-grid {
//             grid-template-columns: 1fr;

//             gap: 14px;
//           }

//           .faqCard {
//             padding: 12px;
//           }

//           .faqTitle {
//             font-size: 14px;
//           }

//           .faqAnswer {
//             font-size: 12px;
//             line-height: 1.8;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FaqPage;


// "use client";

// import React, {
//   useState,
// } from "react";

// import {
//   Plus,
//   Minus,
// } from "lucide-react";

// import { HeadingUpdate } from "@/components/common/HeadingUpdate";

// type FAQItem = {
//   id: number;
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     id: 1,
//     question: "What is a Nukkad Natak?",
//     answer:
//       "A Nukkad Natak is a live public awareness activity that uses storytelling, dialogue, music, and audience interaction to communicate important social and public messages in a simple and engaging way.",
//   },

//   {
//     id: 2,
//     question:
//       "How does Nukkad Natak help in awareness campaigns?",
//     answer:
//       "Nukkad Natak helps organizations connect directly with people through real-time audience engagement and relatable communication. It is widely used for social awareness, CSR initiatives, educational programs, and public outreach campaigns across India.",
//   },

//   {
//     id: 3,
//     question:
//       "Do you organize awareness campaigns across India?",
//     answer:
//       "Yes, our team works with government organizations, educational institutions, NGOs, and brands across India for awareness campaigns, CSR initiatives, and public engagement activities.",
//   },

//   {
//     id: 4,
//     question:
//       "Can campaigns be conducted in regional languages?",
//     answer:
//       "Yes, campaigns can be organized in multiple languages including Hindi, Punjabi, Urdu, Gujarati, Marathi, Bengali, Tamil, Telugu, and other regional languages based on the audience and campaign requirements.",
//   },

//   {
//     id: 5,
//     question:
//       "Do you work with government organizations and NGOs?",
//     answer:
//       "Yes, we work with government organizations, NGOs, educational institutions, and private organizations for awareness campaigns, public engagement initiatives, and CSR activities across India.",
//   },

//   {
//     id: 6,
//     question:
//       "What types of awareness campaigns do you support?",
//     answer:
//       "We support awareness campaigns related to road safety, health awareness, education, environmental awareness, voter awareness, women empowerment, social responsibility, CSR initiatives, and community engagement activities.",
//   },

//   {
//     id: 7,
//     question:
//       "Why is Nukkad Natak effective for public engagement?",
//     answer:
//       "Nukkad Natak creates direct audience connection through interactive communication and relatable storytelling. It helps people understand and remember important messages more effectively than traditional communication methods.",
//   },

//   {
//     id: 8,
//     question:
//       "How can I plan an awareness campaign?",
//     answer:
//       "You can contact our team with your campaign objective, audience type, preferred location, and event details. Based on your requirement, we help plan a customized awareness campaign suited to your outreach goals.",
//   },

//   {
//     id: 9,
//     question:
//       "Why do organizations use Nukkad Natak for awareness activities?",
//     answer:
//       "Organizations use Nukkad Natak because it helps create stronger public engagement, better audience attention, and meaningful community connection through direct communication and live interaction.",
//   },

//   {
//     id: 10,
//     question:
//       "Are awareness campaigns available for schools, colleges, and corporate organizations?",
//     answer:
//       "Yes, campaigns can be organized for schools, colleges, universities, corporate organizations, CSR initiatives, and community outreach programs across different locations in India.",
//   },
// ];

// const FaqPage = () => {
//   const [active, setActive] =
//     useState<number | null>(1);

//   const toggleFAQ = (
//     id: number
//   ) => {
//     setActive((prev) =>
//       prev === id ? null : id
//     );
//   };

//   return (
//     <section
//       className="website-container-with-bg-img"
//       style={{
//         width: "100%",
//         paddingBottom: "60px",
//       }}
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

//         <div className="faq-grid">
//           {faqs.map((item) => {
//             const isOpen =
//               active === item.id;

//             return (
//               <div
//                 key={item.id}
//                 className="faqCard"
//               >
//                 <button
//                   onClick={() =>
//                     toggleFAQ(item.id)
//                   }
//                   className="faqButton"
//                 >
//                   <span className="faqTitle">
//                     {item.id}.{" "}
//                     {item.question}
//                   </span>

//                   <span className="faqIcon">
//                     {isOpen ? (
//                       <Minus size={20} />
//                     ) : (
//                       <Plus size={20} />
//                     )}
//                   </span>
//                 </button>

//                 {isOpen && (
//                   <div className="faqContent">
//                     <p className="faqAnswer">
//                       {item.answer}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         .faq-grid {
//           display: grid;

//           grid-template-columns: repeat(
//             2,
//             1fr
//           );

//           gap: 20px;

//           align-items: start;
//         }

//         .faqCard {
//           border: 1px solid  white;

//           border-radius: 5px;

//           padding: 14px;

//           background: rgba(
//             255,
//             255,
//             255,
//             0.04
//           );

//           backdrop-filter: blur(8px);
//         }

//         .faqButton {
//           width: 100%;

//           background: transparent;

//           border: none;

//           display: flex;

//           justify-content: space-between;

//           align-items: flex-start;

//           gap: 12px;

//           cursor: pointer;

//           padding: 0;

//           color: #fff;
//         }

//         .faqTitle {
//           text-align: left;

//           font-size: 15px;

//           line-height: 1.7;

//           font-weight: 500;
//         }

//         .faqIcon {
//           flex-shrink: 0;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           margin-top: 2px;
//         }

//         .faqContent {
//           padding-top: 12px;
//         }

//         .faqAnswer {
//           margin: 0;

//           font-size: 13px;

//           line-height: 1.9;

//           color: rgba(
//             255,
//             255,
//             255,
//             0.82
//           );
//         }

//         @media (max-width: 768px) {
//           .faq-grid {
//             grid-template-columns: 1fr;

//             gap: 14px;
//           }

//           .faqCard {
//             padding: 12px;
//           }

//           .faqTitle {
//             font-size: 14px;
//           }

//           .faqAnswer {
//             font-size: 12px;

//             line-height: 1.8;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FaqPage;


"use client";

import React, {
  useState,
} from "react";

import {
  Plus,
  Minus,
} from "lucide-react";

import { HeadingUpdate } from "@/components/common/HeadingUpdate";

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
    question:
      "How does Nukkad Natak help in awareness campaigns?",
    answer:
      "Nukkad Natak helps organizations connect directly with people through real-time audience engagement and relatable communication. It is widely used for social awareness, CSR initiatives, educational programs, and public outreach campaigns across India.",
  },

  {
    id: 3,
    question:
      "Do you organize awareness campaigns across India?",
    answer:
      "Yes, our team works with government organizations, educational institutions, NGOs, and brands across India for awareness campaigns, CSR initiatives, and public engagement activities.",
  },

  {
    id: 4,
    question:
      "Can campaigns be conducted in regional languages?",
    answer:
      "Yes, campaigns can be organized in multiple languages including Hindi, Punjabi, Urdu, Gujarati, Marathi, Bengali, Tamil, Telugu, and other regional languages based on the audience and campaign requirements.",
  },

  {
    id: 5,
    question:
      "Do you work with government organizations and NGOs?",
    answer:
      "Yes, we work with government organizations, NGOs, educational institutions, and private organizations for awareness campaigns, public engagement initiatives, and CSR activities across India.",
  },

  {
    id: 6,
    question:
      "What types of awareness campaigns do you support?",
    answer:
      "We support awareness campaigns related to road safety, health awareness, education, environmental awareness, voter awareness, women empowerment, social responsibility, CSR initiatives, and community engagement activities.",
  },

  {
    id: 7,
    question:
      "Why is Nukkad Natak effective for public engagement?",
    answer:
      "Nukkad Natak creates direct audience connection through interactive communication and relatable storytelling. It helps people understand and remember important messages more effectively than traditional communication methods.",
  },

  {
    id: 8,
    question:
      "How can I plan an awareness campaign?",
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
  const [active, setActive] =
    useState<number | null>(1);

      const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
      const toggle = (id: number) => {
        setActiveIndex((prev) => (prev === id ? null : id));
      };

  const toggleFAQ = (
    id: number
  ) => {
    setActive((prev) =>
      prev === id ? null : id
    );
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

           <div className="bp-faq-grid">
               {faqs.map((faq) => {
                 const isOpen = activeIndex === faq.id;
                 return (
                   <div key={faq.id} className={`bp-faq-card${isOpen ? " bp-faq-open" : ""}`}>
                     <button
                       className="bp-faq-btn"
                       onClick={() => toggle(faq.id)}
                       aria-expanded={isOpen}
                     >
                       <span className="bp-faq-q">
                         {faq.id}. {faq.question}
                       </span>
                       <span className="bp-faq-icon">
                         {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                       </span>
                     </button>
                     <div className={`bp-faq-body${isOpen ? " bp-faq-body-open" : ""}`}>
                       <p className="bp-faq-ans">{faq.answer}</p>
                     </div>
                   </div>
                 );
               })}
             </div>
      </div>

      <style jsx>{`


       

        /* ── SECTIONS ── */
        .bp-section {
          padding: 70px 0;
        }

        .bp-about {
          background: #faf8f5;
        }

        .bp-why {
          background: #faf8f5;
          border-top: 1px solid #ede8e0;
        }

        /* ── HEADINGS ── */
        .bp-section-heading {
          text-align: center;
          margin-bottom: 36px;
        }

        .bp-h2 {
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px;
        }

        .bp-divider {
          width: 50px;
          height: 3px;
          background: #F56A28;
          margin: 0 auto;
          border-radius: 2px;
        }

        .bp-accent {
          color: #F56A28;
        }

        .bp-body {
          font-size: clamp(14px, 1.5vw, 15.5px);
          line-height: 1.85;
          color: #444;
          max-width: 820px;
          margin: 0 auto 18px;
          text-align: center;
        }

        /* ── STEPS ── */
        .bp-steps-section {
          background: #fff;
          border-top: 1px solid #ede8e0;
        }

        .bp-overline {
          text-align: center;
          font-size: 12px;
          letter-spacing: 2px;
          color: #F56A28;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .bp-steps-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 12px;
        }

        .bp-h2-steps {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .bp-steps-arrow {
          color: #F56A28;
          font-size: 22px;
        }

        .bp-steps-sub {
          text-align: center;
          font-size: 14px;
          color: #666;
          margin: 0 auto 48px;
          max-width: 600px;
        }

        .bp-steps-grid {
          display: grid;
          grid-template-columns: 1fr 40px 1fr;
          gap: 0 16px;
          align-items: start;
        }

        .bp-steps-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bp-timeline {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 24px;
        }

        .bp-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #F56A28;
          border: 3px solid #fff;
          outline: 2px solid #F56A28;
          flex-shrink: 0;
        }

        .bp-line {
          width: 2px;
          flex: 1;
          min-height: 70px;
          background: #F56A28;
        }

        .bp-step-card {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: #faf8f5;
          border: 1px solid #ede8e0;
          border-radius: 8px;
          padding: 18px 20px;
        }

        .bp-step-num {
          font-size: 22px;
          font-weight: 800;
          color: #F56A28;
          min-width: 36px;
          line-height: 1;
        }

        .bp-step-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 6px;
        }

        .bp-step-desc {
          font-size: 13px;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }

        /* ── FAQ ── */
        .bp-faq-section {
          background: #111;
          padding: 70px 0;
        }

        .bp-faq-heading-row {
          display: flex;
          align-items: center;
          justify-content: center;
          // gap: 20px;
          // margin-bottom: 40px;
        }

        .bp-faq-line {
          flex: 1;
          max-width: 140px;
          height: 1px;
          background: #F56A28;
        }

        .bp-faq-title {
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          margin: 0;
        }

        .bp-faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          align-items: start;
        }

        .bp-faq-card {
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 6px;
          padding: 16px 18px;
          background: rgba(255, 255, 255, 0.03);
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .bp-faq-open {
          border-color: rgba(245, 106, 40, 0.5);
          background: rgba(245, 106, 40, 0.04);
        }

        .bp-faq-btn {
          width: 100%;
          background: transparent;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          padding: 0;
          color: #fff;
          text-align: left;
        }

        .bp-faq-q {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.6;
          color: #fff;
        }

        .bp-faq-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F56A28;
          margin-top: 2px;
        }

        .bp-faq-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease, opacity 0.3s ease;
          opacity: 0;
          overflow: hidden;
        }

        .bp-faq-body-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .bp-faq-ans {
          margin: 0;
          padding-top: 12px;
          font-size: 13px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.75);
          overflow: hidden;
        }

        /* ── CTA ── */
        .bp-cta {
          // background: #1a1a1a;
          padding: 60px 100px;
          
        }

        .bp-cta-inner {
     
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .bp-cta-silhouette {
      
          width: 200px;
  
        }

        .bp-cta-silhouette img {
          width: 100%;
          height: auto;
          object-fit:cover
        }

        .bp-cta-text {
          flex: 1;
        }

        .bp-cta-heading {
          font-size: clamp(18px, 2.5vw, 30px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .bp-cta-sub {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.6;
        }

        .bp-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #F56A28;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 10px;
          white-space: nowrap;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }

        .bp-cta-btn:hover {
          background: #d45520;
          transform: translateY(-1px);
        }

        .bp-cta-arrow {
          font-size: 20px;
          line-height: 1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .bp-section {
            padding: 48px 0;
          }

          .bp-steps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .bp-timeline {
            display: none;
          }

          .bp-steps-col {
            gap: 14px;
          }

          .bp-faq-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .bp-faq-heading-row {
            gap: 12px;
          }

          .bp-faq-line {
            max-width: 60px;
          }

          .bp-cta-inner {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .bp-cta-silhouette {
            width: 70px;
          }

          .bp-cta-btn {
            width: 100%;
            justify-content: center;
          }
            .bp-cta {
            padding:60px 10px
            }
        }
      `}</style>
    </section>
  );
};

export default FaqPage;