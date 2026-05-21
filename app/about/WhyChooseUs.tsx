"use client";

import React, { useEffect, useRef } from "react";
import {
  Users,
  Lightbulb,
  Target,
  ShieldCheck,
  Theater,
  MapPin,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading2 from "@/components/common/Heading2";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const leftData = [
    {
      icon: <Users size={35} />,
      title: "Experienced Team",
      desc: "Skilled artists, directors & campaign managers with years of expertise.",
    },
    {
      icon: <Lightbulb size={35} />,
      title: "Impactful Approach",
      desc: "Creative, engaging & result-driven performances.",
    },
    {
      icon: <Target size={35} />,
      title: "Pan India Reach",
      desc: "Delivering campaigns across cities, towns & rural areas.",
    },
    {
      icon: <ShieldCheck size={35} />,
      title: "Trusted by Leaders",
      desc: "Partnered with NDMC, SDMC, BSES & many leading organizations.",
    },
  ];

  const stats = [
    {
      icon: <Theater size={150} />,
      number: "1000+",
      label: "Street Plays Performed",
    },
    {
      icon: <Users size={150} />,
      number: "500+",
      label: "Clients & Organizations",
    },
    {
      icon: <MapPin size={150} />,
      number: "250+",
      label: "Cities & Towns",
    },
    {
      icon: <Users size={150} />,
      number: "50 Lakh+",
      label: "People Reached",
    },
  ];

  // ✅ TYPES FIX
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLHeadingElement | null>(
    null
  );

  const leftItemsRef = useRef<
    (HTMLDivElement | null)[]
  >([]);

  const statsRef = useRef<
    (HTMLDivElement | null)[]
  >([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 TITLE
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        });
      }

      // 🔥 LEFT ITEMS
      leftItemsRef.current.forEach(
        (item, index) => {
          if (!item) return;

          gsap.from(item, {
            opacity: 0,
            x: -80,
            duration: 1,
            delay: index * 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          });
        }
      );

      // 🔥 STATS
      statsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.from(item, {
          opacity: 0,
          y: 100,
          scale: 0.8,
          duration: 1.2,
          delay: index * 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
      //   width: "100%",
      //   backgroundImage:
      //     "url('/images/black-bg.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
        // padding: "60px 0px 60px 0px",
      //   overflow: "hidden",
      }}
    >
      <div className="website-container-with-bg-img" >
      <div style={{
        padding: "0px 0px 60px 0px",
      }}>

        {/* TITLE */}
         <div ref={titleRef} style={{
          padding:"60px 0px"
         }}>
          <Heading2 title="Why" color="white" title2={true} title2Text="Choose Us" />
        </div>

        <div
          className="why-wrapper"
        //   style={{
        //     display: "grid",
        //     gridTemplateColumns: "1fr 2.6fr",
        //     gap: "10px",
        //     alignItems: "start",
        //   }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {leftData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  leftItemsRef.current[index] = el;
                }}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    color: "#F56A28",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3
                    style={{
                      color: "#fff",
                      margin: 0,
                      fontSize: "14px",
                 paddingBottom:"2px",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#d1d1d1",
                      lineHeight: "1.5",
                      fontSize: "12px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {stats.map((item, index) => (
           <div
  key={index}
  className={`stats-item ${
    index !== 0 ? "stats-border" : ""
  }`}
  ref={(el) => {
    statsRef.current[index] = el;
  }}
  style={{
    textAlign: "center",
  }}
>
                {/* <div
                  style={{
                    color: "#F56A28",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div> */}

                <div
  style={{
    color: "#F56A28",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
  }}
  className="stats-icon"
>
  {item.icon}
</div>

                <h2
                  style={{
                    color: "#F56A28",
                    fontSize:
                      "clamp(20px, 4vw, 20px)",
                    margin: 0,
                    fontWeight: 800,
                  }}
                >
                  {item.number}
                </h2>

                <p
                  style={{
                    color: "#d8d8d8",
                    marginTop: "10px",
                    lineHeight: "1.2",
                    fontWeight: 700,
                    fontSize: "20px",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
     <style jsx>{`
  .stats-border {
    border-left: 2px solid rgba(255, 255, 255, 0.3);
    padding-left: 20px;
  }

  .why-wrapper {
    display: grid;
    grid-template-columns: 1fr 2.6fr;
    gap: 10px;
    align-items: start;
  }

  .stats-icon :global(svg) {
  width: 150px;
  height: 150px;
}


  @media (max-width: 992px) {
    .why-wrapper {
      grid-template-columns: 1fr !important;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    //   column-gap: 30px;
    //   row-gap: 40px;
    }

    .why-wrapper {
      grid-template-columns: 1fr !important;
      gap: 40px;
    }

    .stats-border {
      border-left: none !important;
      padding-left: 0 !important;
    }
        .stats-icon :global(svg) {
    width: 80px;
    height: 80px;
  }
  }
`}</style>
      </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;