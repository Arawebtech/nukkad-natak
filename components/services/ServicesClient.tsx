"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesClient({
  services,
}: {
  services: any[];
}) {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current || !headingWrapRef.current || !sectionRef.current)
      return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      gsap.fromTo(
        headingWrapRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingWrapRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".gridItem",
        {
          y: 60,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} style={{ width: "100%", overflow: "hidden" }}>
      <div ref={headingWrapRef}>
        <HeadingUpdate
          title="Our"
          color="black"
          title2={true}
          title2Text="Services"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      <div className="servicesGrid" ref={gridRef}>
        {services?.map((item: any) => (
          <Link
            key={item._id}
            href={`/services/${item.slug}`}
            className="gridItem"
          >
            <Image
              src={item.thumbnail?.imageUrl || "/placeholder.png"}
              alt={item.name}
              width={250}
              height={250}
              className="image"
            />

            <h3 className="title">{item.name}</h3>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .servicesGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          row-gap: 30px;
          padding: 0px 60px 60px 60px;
        }

        .gridItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
        }

        .image {
          width: 86%;
          object-fit: cover;
        }

        .title {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        @media (max-width: 991px) {
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            padding: 20px 30px 30px;
            gap: 25px;
          }

          .image {
            max-width: 130px;
          }
        }

        @media (max-width: 767px) {
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            padding: 10px 14px 20px;
            gap: 18px;
          }

          .image {
            max-width: 100px;
            width: 95%;
            object-fit: contain;
          }

          .title {
            font-size: 10px;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  );
}