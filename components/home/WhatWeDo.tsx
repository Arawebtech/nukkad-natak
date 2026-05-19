"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "../common/HeadingUpdate";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !gridRef.current ||
      !headingWrapRef.current ||
      !sectionRef.current
    )
      return;

    const ctx = gsap.context(() => {
      // HEADING ANIMATION
      gsap.fromTo(
        headingWrapRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          force3D: true,

          scrollTrigger: {
            trigger: headingWrapRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // TEXT ANIMATION
      gsap.fromTo(
        gridRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          force3D: true,

          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* HEADING */}
      <div ref={headingWrapRef}>
        <HeadingUpdate
          title="What"
          color="black"
          title2={true}
          title2Text="We Do"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      {/* TEXT */}
      <div ref={gridRef} className="textWrapper">
        <span className="whatText">
          Street plays have the unique ability to connect directly with
          people in their own language, in their own space. Over the
          years, we have partnered with government bodies, corporates,
          NGOs and educational institutions to communicate messages that
          matter. Over the years, we have partnered with government
          bodies, corporates, NGOs and educational institutions to
          communicate messages that matter.
        </span>
      </div>

      <style jsx>{`
        .textWrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .whatText {
          width: 100%;
          // padding: 0 50px;

          font-size: 16px;
          line-height: 24px;
          font-weight: 400;

          text-align: left;

          display: block;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .whatText {
            padding: 0;

            font-size: 14px;
            line-height: 22px;

            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatWeDo;