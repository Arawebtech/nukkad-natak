"use client";

import React, { useEffect, useState } from "react";

import CommonContentSection from "@/components/CommonContentSection";
import WhyStreet from "./WhyStreet";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollTrigger } from "gsap/all";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";



// ─── DATA ────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Understanding Your Brand",
    desc: "We study your brand, products/services, target audience and campaign goals to understand the core message.",
  },
  {
    num: "02",
    title: "Concept & Strategy",
    desc: "Our team creates unique concepts and themes that align with your brand identity and marketing objectives.",
  },
  {
    num: "03",
    title: "Script Development",
    desc: "We write engaging scripts with strong storytelling, brand integration and audience appeal.",
  },
  {
    num: "04",
    title: "Rehearsal & Preparation",
    desc: "Our performers rehearse extensively to ensure powerful delivery, timing, expressions and audience interaction.",
  },
  {
    num: "05",
    title: "Live Performance",
    desc: "We perform the street play at your chosen location or event, ensuring maximum engagement and impact.",
  },
  {
    num: "06",
    title: "Feedback & Impact Analysis",
    desc: "We gather feedback and analyze the audience response to measure impact and help refine future campaigns.",
  },
];


const BrandPromotionContent = () => {
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
    "Our Brand Promotion Street Play service is designed to help businesses communicate their brand message in a unique, engaging and impactful manner. Through the power of live performance, storytelling and audience interaction, we bring your brand values, products or services to life in public spaces, corporate events, product launches and promotional campaigns.",

    "We understand that today's audience connects better with experiences than traditional advertisements. Street plays create a two-way communication channel that captures attention, builds curiosity and leaves a lasting impression about your brand.",
  ]}
/>

<WhyStreet/>


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

export default BrandPromotionContent;