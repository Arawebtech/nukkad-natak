"use client";

import React, { useEffect, useState } from "react";

import CommonContentSection from "@/components/CommonContentSection";

import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollTrigger } from "gsap/all";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";
import WhyStreetGov from "./WhyStreetGov";



// ─── DATA ────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Understanding Campaign Objectives",
    desc: "We study your campaign objective, target audience, key message and locations to understand the core awareness goals.",
  },
  {
    num: "02",
    title: "Research & Strategy",
    desc: "Our team researches the campaign theme and designs a strategy to communicate your message clearly and effectively.",
  },
  {
    num: "03",
    title: "Script Development",
    desc: "We write engaging scripts with strong storytelling, local connection and audience appeal.",
  },
  {
    num: "04",
    title: "Rehearsal & Coordination",
    desc: "Our performers rehearse extensively to ensure powerful delivery, timing, expressions and audience interaction.",
  },
  {
    num: "05",
    title: "Public Performance",
    desc: "We perform the street play at your chosen locations or events, ensuring maximum public engagement and impact.",
  },
  {
    num: "06",
    title: "Feedback & Reporting",
    desc: "We gather feedback and analyze audience response to measure impact and provide a detailed report if required.",
  },
];


const GovernmentContent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });
}, []);

useEffect(() => {
  const cards = document.querySelectorAll(".bp-step-card");

  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 60%",
      end: "bottom 30%",

      onEnter: () => {
        cards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      },

      onEnterBack: () => {
        cards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      },
    });
  });

  cards[0]?.classList.add("active");

  return () => ScrollTrigger.getAll().forEach((st) => st.kill());
}, []);


  return (
    <div className="bp-wrapper">


<CommonContentSection
  title="About"
  title2Text="This Service"
  paragraphs={[
    "Our Government Awareness Street Play service is designed to help government bodies communicate essential messages to the public in a relatable and impactful way.",

    "We create powerful street plays that spread awareness about key government schemes, public policies, health, education, sanitation, voting, women empowerment, and other social issues.",

    "Through engaging storytelling, live performance and local connect, we make important information easy to understand and inspire citizens to take action.",
  ]}
/>

<WhyStreetGov/>


      {/* ── 3. STEPS OF WORK ─────────────────────────────────────── */}
<section className="bp-section bp-steps-section">
  <div className="bp-container">
       <div >
            <HeadingUpdate
              title="Our Process"
              color="black"
              title2={true}
              // title2Text="PROCESS"
              title2Text="Steps Of Work"
              mobileSize="25px"
              desktopSize="30px"
            />
               <p className="bp-steps-sub">
      We follow a proven and creative process to deliver effective brand
      promotion street plays.
    </p>
          </div>


<div className="bp-process-wrapper">
  {steps.map((step, index) => (
    <div
      key={step.num}
      className={`bp-process-row ${
        index % 2 === 0 ? "left-row" : "right-row"
      }`}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-duration="1000"
    >
      {index % 2 === 0 ? (
        <>
          <div className="bp-step-card">
            <div className="bp-step-num">{step.num}</div>

            <div className="bp-step-content">
              <h4 className="bp-step-title">{step.title}</h4>
              <p className="bp-step-desc">{step.desc}</p>
            </div>
          </div>

          <div className="bp-center-line">
            <span className="bp-dot"></span>
          </div>

          <div></div>
        </>
      ) : (
        <>
          <div></div>

          <div className="bp-center-line">
            <span className="bp-dot"></span>
          </div>

          <div className="bp-step-card">
            <div className="bp-step-num">{step.num}</div>

            <div className="bp-step-content">
              <h4 className="bp-step-title">{step.title}</h4>
              <p className="bp-step-desc">{step.desc}</p>
            </div>
          </div>
        </>
      )}
    </div>
  ))}
</div>

    </div>

</section>

   



    </div>
  );
};

export default GovernmentContent;