"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { HeadingUpdateLongText } from "@/components/common/HeadingUpdate";


const faqs = [
  {
    id: 1,
    question: "What is a government awareness street play?",
    answer:
      "A government awareness street play is a live theatrical performance designed to educate and inform the public about government schemes, policies, social initiatives, and public welfare programs in an engaging and easy-to-understand manner.",
  },
  {
    id: 2,
    question: "Can performances be done in local languages?",
    answer:
      "Yes, absolutely. We perform in Hindi, English, and various regional languages to ensure the message connects effectively with local communities and target audiences.",
  },
  {
    id: 3,
    question: "Which government campaigns do you support?",
    answer:
      "We support a wide range of government campaigns including health awareness, sanitation drives, education initiatives, voting awareness, women empowerment, environmental conservation, road safety, digital literacy, and other public welfare programs.",
  },
  {
    id: 4,
    question: "Can you perform in rural areas?",
    answer:
      "Yes. Our team regularly performs in rural, semi-urban, and urban locations. We design performances according to the local culture, language, and audience demographics to maximize impact.",
  },
  {
    id: 5,
    question: "How long does a street play last?",
    answer:
      "A typical government awareness street play lasts between 15 to 30 minutes. However, the duration can be customized based on campaign objectives, audience requirements, and event schedules.",
  },
  {
    id: 6,
    question: "Do you customize scripts for campaigns?",
    answer:
      "Yes. Every script is customized to align with your campaign goals, target audience, key messages, and awareness objectives, ensuring maximum engagement and effectiveness.",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const GovernmentFaqPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bp-wrapper">

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
        <div className="bp-container">
          <div className="bp-faq-heading-row">
            {/* <span className="bp-faq-line" /> */}
       

    <HeadingUpdateLongText
          title="Frequently"
          color="white"
          title2={true}
          title2Text="Asked Questions"
          mobileSize="25px"
          desktopSize="30px"
        />

         
          </div>

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
        </div>
  
      </section>

                {/* <section  className="website-container-with-bg-img bp-cta relative" style={{
       
            }}>

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

        <div className="bp-cta-inner">
       <div className="bp-cta-silhouette" aria-hidden="true">
<div className="">
  <img src="/images/brand-footer.png" alt="" />
</div>
        
          </div> 

          <div className="bp-cta-text">
            <h3 className="bp-cta-heading">
              Ready to <span className="bp-accent">Promote Your Brand</span> Creatively?
            </h3>
            <p className="bp-cta-sub">
              Partner with WI Events to deliver powerful street plays that make your brand stand out!
            </p>
          </div>

          <a href="/contact" className="bp-cta-btn">
            Get a Free Quote <span className="bp-cta-arrow">›</span>
          </a>
        </div>
      </section> */}

      {/* ── 5. CTA BANNER ────────────────────────────────────────── */}
  

      {/* ── STYLES ───────────────────────────────────────────────── */}
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
    </div>
  );
};

export default GovernmentFaqPage;