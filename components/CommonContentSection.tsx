"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate, HeadingUpdateLongText } from "./common/HeadingUpdate";

gsap.registerPlugin(ScrollTrigger);

interface CommonContentSectionProps {
  title: string;
  title2Text: string;
  title2?: boolean;
  color?: string;
  paragraphs: string[];
}
const CommonContentSection = ({
  title,
  title2Text,
  title2=true,
  color="black",
  paragraphs,
}: CommonContentSectionProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !contentRef.current)
      return;

    const ctx = gsap.context(() => {
      // Heading Animation
      gsap.fromTo(
        headingRef.current,
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
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Content Animation
      gsap.fromTo(
        contentRef.current,
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
            trigger: contentRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div ref={headingRef}>
        {/* <HeadingUpdate
          title={title}
          color={color}
          title2={true}
          title2Text={title2Text}
          mobileSize="25px"
          desktopSize="30px"
        /> */}

          <HeadingUpdateLongText
          title={title}
          color={color}
          title2={true}
          title2Text={title2Text}
          mobileSize="25px"
          desktopSize="30px"
        />
        
      </div>

      <div ref={contentRef} className="textWrapper">
        <div className="contentText">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <style jsx>{`
        .textWrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .contentText {
          width: 100%;
          font-size: 16px;
          line-height: 28px;
          font-weight: 400;
          color: #000;
          text-align: left;
        }

        .contentText p {
          margin-bottom: 24px;
        }

        .contentText p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .contentText {
            font-size: 14px;
            line-height: 24px;
          }

          .contentText p {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default CommonContentSection;