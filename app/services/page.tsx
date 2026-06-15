"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useServices } from "../../hooks/useServices";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const { services, loading, error } = useServices();

  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loading) return;
      if (!gridRef.current || !headingWrapRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          {
            y: 50,
            opacity: 0,
          },
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

      gsap.utils.toArray<HTMLElement>(".gridItem").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, services]);

  return (
      <div ref={sectionRef} style={{ width: "100%", overflow: "hidden" }}>
 {/* HEADING */}
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

      <div className="">
        {loading && (
          <div className="servicesGrid">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="gridItem">
                <div className="skeletonImage" />
                <div className="skeletonTitle" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="error">
            {error}
          </div>
        )}

        {!loading && !error && (
          // <div className="servicesGrid" ref={gridRef}>
          //   {services.map((service) => (
          //     <Link
          //       key={service._id}
          //       href={`/services/${service.slug}`}
          //       className="gridItem"
          //     >
          //       <Image
          //         src={
          //           service.thumbnail?.imageUrl ||
          //           "/placeholder.png"
          //         }
          //         alt={service.name}
          //         width={250}
          //         height={250}
          //         className="image"
          //       />

          //       <h2 className="title">{service.name}</h2>
          //     </Link>
          //   ))}
          // </div>

               <div className="servicesGrid" ref={gridRef}>
     {services?.map((item: any) => (
         <div
  key={item._id || item.id}
  className="gridItem gsap-hover-text"
>
         <img
  src={item.thumbnail?.imageUrl || "/placeholder.png"}
  alt={item.name}
  className="image"
/>

            <h2 className="title">{item.name}</h2>
          </div>
        ))}
      </div>
        )}
      </div>

      {/* <style jsx>{`
  

        .servicesGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          column-gap: 0;
          row-gap: 30px;
          padding: 40px 0;
        }

        .gridItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          will-change: transform, opacity;
        }

        .image {
          width: 86%;
          height: auto;
          object-fit: contain;
          display: block;
        }

        .title {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
          margin-top: 10px;
        }

        .error {
          text-align: center;
          padding: 50px 0;
          color: #dc2626;
        }

        .skeletonImage {
          width: 86%;
          aspect-ratio: 1;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #f2f2f2 25%,
            #e6e6e6 50%,
            #f2f2f2 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }

        .skeletonTitle {
          width: 70%;
          height: 14px;
          margin-top: 12px;
          border-radius: 6px;
          background: linear-gradient(
            90deg,
            #f2f2f2 25%,
            #e6e6e6 50%,
            #f2f2f2 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @media (max-width: 991px) {
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }

          .image,
          .skeletonImage {
            max-width: 130px;
          }
        }

        @media (max-width: 767px) {
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            padding: 20px 0;
            gap: 18px;
          }

          .image,
          .skeletonImage {
            max-width: 100px;
            width: 95%;
          }

          .title {
            font-size: 10px;
          }
        }
      `}</style> */}
   {/* GRID */}
 

      <style jsx>{`
        .servicesGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          column-gap: 0px;
          row-gap: 30px;
          padding: 0px 60px 60px 60px;
        }

        .gridItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          will-change: transform, opacity;
        }

        .image {
          width: 86%;
          // max-width: 220px;
          // height: 170px;
          object-fit: cover;
          display: block;
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
            height: 130px;
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
            height: 100px;
            object-fit:contain;
              width: 95%;
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