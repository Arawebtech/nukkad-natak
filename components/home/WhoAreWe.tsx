"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "../common/HeadingUpdate";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const WhoAreWe = () => {
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
          title="Who"
          color="black"
          title2={true}
          title2Text="We Are"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      {/* CONTENT */}
{/* <div ref={gridRef} className="textWrapper">
<span>

    At <span style={{
    color:"#eb631d"
  }}>NukkadNatak.com</span>,
     we are a passionate Nukkad Natak Group and Street Play Agency with over 15 years of experience in creating live performances that connect directly with people. We believe that street theatre is not just entertainment, it is one of the most powerful ways to spread awareness, start conversations, and create real impact within communities.

  <br />
  <br />

  Over the years, our team has worked on awareness campaigns, public engagement programs, educational performances, CSR activities, and promotional street plays across different parts of India. We perform in public spaces, schools, colleges, rural areas, marketplaces, corporate events, and community gatherings where direct audience interaction matters the most.

  <br />
  <br />

  Our artists perform in multiple languages including Hindi, Punjabi, Urdu, Gujarati, Marathi, Bengali, Tamil, and Telugu, helping us connect naturally with audiences from different regions and cultural backgrounds. Every performance is created with a simple goal: to make people listen, relate, and remember the message long after the performance ends.

</span>

</div> */}

<div ref={gridRef} className="textWrapper">
  <span className="whatText">

    <span>
      At <span style={{
        color:"#eb631d"
      }}>NukkadNatak.com</span>, we are a professional Nukkad Natak Group and IEC Activation Agency with over 15 years of experience in conducting impactful Street Play performances and awareness campaigns across India. We work with government departments, NGOs, corporate organizations, educational institutions, and brands to create meaningful public engagement through live performances that connect directly with people.
    </span>

    <br />
    <br />

    <span>
      Our team specializes in awareness-driven communication through Nukkad Natak, IEC activities, CSR campaigns, public outreach programs, and community engagement initiatives designed for both urban and rural audiences. With artists performing in multiple regional languages including Hindi, Punjabi, Urdu, Gujarati, Marathi, Bengali, Tamil, and Telugu, we create performances that are culturally relatable, engaging, and easy to remember.
    </span>

    <br />
    <br />

    <span>
      Every Street Play we perform is built around one goal, delivering the right message to the right audience in the most impactful and human way possible.
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

export default WhoAreWe;