"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import { HeadingUpdateLongText } from "@/components/common/HeadingUpdate";

gsap.registerPlugin(ScrollTrigger);

const WhyStreet = () => {
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
        <HeadingUpdateLongText
          title="Why Street"
          color="black"
          title2={true}
          title2Text="Plays Work For Brand Promotion"
          mobileSize="15px"
          desktopSize="30px"
        />
      </div>



<div ref={gridRef} className="textWrapper">
  <span className="whatText">

    <span>
 Street plays are a cost-effective and highly engaging medium that allows brands to break through the noise and reach diverse audiences. They combine entertainment with your key brand message, making it easier to understand, remember and share.
    </span>

    <br />
    <br />

    <span>
   Whether you want to introduce a new product, enhance brand awareness, build trust, promote social responsibility initiatives or increase customer engagement, our street plays help you deliver your message in a creative and memorable format.
   
    </span>

    

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

export default WhyStreet;