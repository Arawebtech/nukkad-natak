// components/services/ServiceContent.tsx
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollTrigger } from "gsap/all";

import CommonContentSection from "@/components/CommonContentSection";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";
import WhyStreet from "@/app/brand/WhyStreet";

import type { ServiceDetail } from "../../types/service";

// ─── Skeleton Loader ──────────────────────────────────────────────────────────

export function ServiceContentSkeleton() {
  return (
    <div className="bp-wrapper animate-pulse">
      <div style={{ padding: "60px 0" }}>
        <div
          style={{
            height: 24,
            background: "#eee",
            borderRadius: 4,
            maxWidth: 300,
            margin: "0 auto 16px",
          }}
        />
        <div
          style={{
            height: 14,
            background: "#eee",
            borderRadius: 4,
            maxWidth: 700,
            margin: "0 auto 10px",
          }}
        />
        <div
          style={{
            height: 14,
            background: "#eee",
            borderRadius: 4,
            maxWidth: 600,
            margin: "0 auto",
          }}
        />
      </div>

      <div
        style={{
          padding: "60px 0",
          display: "grid",
          gridTemplateColumns: "1fr 2px 1fr",
          gap: 20,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              gridColumn: i % 2 === 0 ? 1 : 3,
              height: 100,
              background: "#eee",
              borderRadius: 8,
            }}
          />
        ))}
      </div>
    </div>
  );
}


interface Props {
  service: ServiceDetail;
}

const ServiceContent = ({ service }: Props) => {
  const { headingDesc = [], processSection } = service;

  const steps = processSection?.steps ?? [];



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
      {/* ── About This Service (Dynamic) ───────────────────── */}

      {headingDesc.length > 0 && (
        <CommonContentSection
          title={headingDesc[0]?.title || "About"}
          title2Text={headingDesc[0]?.title2Text || "This Service"}
          paragraphs={
            headingDesc[0]?.paragraphs?.map((p) => p.text) || []
          }
        />
      )}


      {headingDesc.slice(1).map((section) => (
        <CommonContentSection
          key={section._id ?? section.title}
          title={section.title}
          title2Text={section.title2Text}
          paragraphs={section.paragraphs?.map((p) => p.text) || []}
        />
      ))}


      {/* <WhyStreet /> */}


      {steps.length > 0 && (
       
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
      )}
    </div>
  );
};

export default ServiceContent;