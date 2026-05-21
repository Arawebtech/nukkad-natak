"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  BadgeIndianRupee,
  Brain,
  HeartHandshake,
  MessageSquare,
  Users,
} from "lucide-react";

import { HeadingUpdate } from "@/components/common/HeadingUpdate";

const WhyStreetPlays = () => {
  const gridRef =
    useRef<HTMLDivElement | null>(null);

  const sectionRef =
    useRef<HTMLDivElement | null>(null);

  const filters = [
    {
      id: 1,
      image:
        "/images/services/discount.jpg",
      icon: MessageSquare,
      title: "Direct Communication",
      desc:
        "Deliver messages directly to audiences in a simple, relatable, and engaging way.",
    },

    {
      id: 2,
      image:
        "/images/services/high-engagement.jpg",
      icon: Users,
      title: "High Engagement",
      desc:
        "Connect directly with people through interactive audience participation and storytelling.",
    },

    {
      id: 3,
      image:
        "/images/services/better-retention.jpg",
      icon: Brain,
      title: "Better Retention",
      desc:
        "Live performances help audiences remember messages more effectively and for longer.",
    },

    {
      id: 4,
      image:
        "/images/services/cost-effective.jpg",
      icon: BadgeIndianRupee,
      title: "Cost Effective",
      desc:
        "A budget-friendly way to create awareness and connect with large audiences.",
    },

    {
      id: 5,
      image:
        "/images/services/social-impact.jpg",
      icon: HeartHandshake,
      title: "Social Impact",
      desc:
        "Create meaningful awareness and inspire positive change within communities.",
    },
  ];

  /* =============================
     GSAP ANIMATION
  ============================== */

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current!.children,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="wrapper"
    >
      {/* ================= HEADING ================= */}

      <div className="headingBox">
        <HeadingUpdate
          title="Why Street Plays"
          color="black"
          title2={true}
          title2Text=" Work So Well"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      {/* ================= CARDS ================= */}

      <div className="filterWrapper">
        <div
          className="filterScroll"
          ref={gridRef}
        >
          {filters.map(
            (item, index) => {
              const Icon = item.icon;

              const isLast =
                index ===
                filters.length - 1;

              return (
                <div
                  key={item.id}
                  className="filterCard"
                >
                  {/* ICON */}

                  <div className="iconBox">
                    <Icon
                      size={50}
                      color="#eb631d"
                      // strokeWidth={
                      //   2.2
                      // }
                    />
                  </div>

                  {/* TITLE */}

                  <h2>{item.title}</h2>

                  {/* DESC */}

                  <p>{item.desc}</p>

                  {/* BORDER */}

                  {!isLast && (
                    <span className="borderLine" />
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* ================= STYLE ================= */}

      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 20px 0px 10px 0px;
        }

       

        /* =========================
           SCROLL AREA
        ========================== */

        .filterWrapper {
          width: 100%;
          overflow: hidden;
        }

        .filterScroll {
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;

          scrollbar-width: none;

          padding-bottom: 20px;
        }

        .filterScroll::-webkit-scrollbar {
          display: none;
        }

        /* =========================
           CARD
        ========================== */

        .filterCard {
          flex: 0 0 auto;

          width: 260px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;

          text-align: center;

          padding: 0px 24px;

          position: relative;
        }

        /* =========================
           ICON
        ========================== */

        // .iconBox {
        //   width: 70px;
        //   height: 70px;

        //   display: flex;
        //   align-items: center;
        //   justify-content: center;

        //   border-radius: 50%;

        //   background: #fff7f2;

        //   margin-bottom: 18px;
        // }

        /* =========================
           TITLE
        ========================== */

        .filterCard h2 {
          font-size: 18px;
          font-weight: 700;

          color: #111;

          margin: 12px 0px;

          line-height: 1.4;
        }

        /* =========================
           DESC
        ========================== */

        .filterCard p {
          font-size: 13px;
          font-weight: 400;

          color: #666;

          line-height: 1.8;
        }

        /* =========================
           VERTICAL BORDER
        ========================== */

        .borderLine {
          position: absolute;

          top: 10px;
          right: 0;

          width: 1px;
          height: 85%;

          background: rgba(
            0,
            0,
            0,
            0.1
          );
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 768px) {
          .filterCard {
            width: 240px;
            padding: 0px 18px;
          }

          .filterCard h2 {
            font-size: 16px;
          }

          .filterCard p {
            font-size: 12px;
            line-height: 1.7;
          }

          .iconBox {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyStreetPlays;