
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Steps = () => {
  
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

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });
}, []);
  return (
    <>
    <div>Step-2</div>
    {/* ── 3. STEPS OF WORK ─────────────────────────────────────── */}
<section className="bp-section bp-steps-section">
  <div className="bp-container">
    <p className="bp-overline">— OUR PROCESS —</p>

    <div className="bp-steps-heading">
      <span className="bp-steps-arrow">➜</span>
      <h2 className="bp-h2-steps">Steps Of Work</h2>
      <span className="bp-steps-arrow">➜</span>
    </div>

    <p className="bp-steps-sub">
      We follow a proven and creative process to deliver effective brand
      promotion street plays.
    </p>

    <div className="bp-steps-grid">

      {/* Left Column */}
      <div className="bp-steps-col">
        {[steps[0], steps[2], steps[4]].map((step, index) => (
          <div
            key={step.num}
            className="bp-step-card"
            data-aos="fade-right"
            data-aos-delay={index * 200}
          >
            <div className="bp-step-num">{step.num}</div>

            <div>
              <h4 className="bp-step-title">{step.title}</h4>
              <p className="bp-step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bp-timeline">
        {[0, 1, 2, 3, 4].map((i) => (
          <React.Fragment key={i}>
            <div
              className="bp-dot"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            />
            {i < 4 && <div className="bp-line" />}
          </React.Fragment>
        ))}
      </div>

      {/* Right Column */}
      <div className="bp-steps-col">
        {[steps[1], steps[3], steps[5]].map((step, index) => (
          <div
            key={step.num}
            className="bp-step-card"
            data-aos="fade-left"
            data-aos-delay={index * 200}
          >
            <div className="bp-step-num">{step.num}</div>

            <div>
              <h4 className="bp-step-title">{step.title}</h4>
              <p className="bp-step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
  <style>{`
  .bp-steps-grid {
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 60px;
}

.bp-steps-col {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.bp-step-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
}

.bp-step-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.15);
}

.bp-step-num {
  min-width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ff6b00;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bp-step-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.bp-step-desc {
  margin: 0;
  color: #666;
  line-height: 1.7;
}

.bp-timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.bp-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ff6b00;
  z-index: 2;
}

.bp-line {
  width: 3px;
  height: 120px;
  background: #ff6b00;
}

@media (max-width: 991px) {
  .bp-steps-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .bp-timeline {
    display: none;
  }

  .bp-step-card {
    padding: 20px;
  }

  .bp-step-title {
    font-size: 20px;
  }
}

    `}</style>
</section>
    </>
    
  )
}

export default Steps