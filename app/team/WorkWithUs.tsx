"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Circle, MapPin, Search } from "lucide-react";

const WorkWithUs = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { title: "Meaningful Work", 
      image: "/images/team1.png" ,
      desc:"Use your skills to create awareness and bring positive change."
    },
    { title: "Meaningful Work",  image: "/images/team1.png",
       desc:"Use your skills to create awareness and bring positive change."
     },
    { title: "Meaningful Work",  image: "/images/team1.png",

          desc:"Use your skills to create awareness and bring positive change."
     },
    { title: "Meaningful Work",  image: "/images/team1.png",
          desc:"Use your skills to create awareness and bring positive change."
     },
    { title: "Meaningful Work",  image: "/images/team1.png",
          desc:"Use your skills to create awareness and bring positive change."
     },
  ];

  const items = [
    {
      image: "/images/home9.png",
      bgImage: "/images/homeblack1.png",
      title: "Swachh Bharat Drive",
      category: "Government Campaigns",
      location: "Bangalore",
    },
    {
      image: "/images/home10.png",
      bgImage: "/images/homeblack1.png",
      title: "BSES Energy Awareness",
      category: "Government Campaigns",
      location: "Delhi",
    },
    {
      image: "/images/home11.png",
      bgImage: "/images/homeblack1.png",
      title: "Election Awareness Drive",
      category: "Government Campaigns",
      location: "Mumbai",
    },
    {
      image: "/images/home11.png",
      bgImage: "/images/homeblack1.png",
      title: "Election Awareness Drive 2",
      category: "Government Campaigns",
      location: "Mumbai",
    },
  ];

  // ✅ GSAP ANIMATION (REUSABLE STYLE)
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current!.children,
        { y: 50, opacity: 0, scale: 0.95 },
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
  }, [activeFilter]);

  useEffect(() => {
  if (!sectionRef.current) return;

  gsap.fromTo(
    ".divider",
    { scaleY: 0, opacity: 0 },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      transformOrigin: "center",
    }
  );
}, []);

  // ✅ FILTER LOGIC
  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((i) => i.category === activeFilter);

  return (
    <div ref={sectionRef} className="wrapper">



{/* done  */}
<div className="filterWrapper">
  <div className="filterScroll">
    {filters.map((item, index) => {
      const isLast = index === filters.length - 1;

      return (
        <div key={index} className="filterCard">
          <img src={item.image} className="filterImg" />

          <h2>{item.title}</h2>
          <p>{item.desc}</p>

   
          {!isLast && <span className="borderLine" />}
        </div>
      );
    })}
  </div>
</div>

     

      {/* ================= STYLE ================= */}
      <style jsx>{`
        .wrapper {
          width: 100%;
        }

.filterScroll {
  display: flex;
  gap: 0;
  overflow-x: auto;
  padding: 10px 15px;
  scrollbar-width: none;
}

.filterScroll::-webkit-scrollbar {
  display: none;
}

/* ===== CARD ===== */
.filterCard {
  flex: 0 0 auto;
  width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
  padding: 0px 20px;

  position: relative;
  text-align: center;
}

/* ===== FULL HEIGHT BORDER ===== */
.borderLine {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: #000; /* black border */
  opacity: 0.4;
}

/* REMOVE BORDER ON LAST */
.filterCard:last-child .borderLine {
  display: none;
}

/* IMAGE */
.filterImg {
  width: 100%;
  max-width: 140px;
  object-fit: contain;
}

/* TEXT */
.filterCard h2 {
  font-size: 20px;
  font-weight: 700;
}

.filterCard p {
  font-size: 14px;
  font-weight: 300;
}

/* CENTER ON DESKTOP */
@media (min-width: 1024px) {
  .filterScroll {
    justify-content: center;
    overflow-x: hidden;
  }
}

     

        /* ===== GRID ===== */
        .mainBox {
          padding: 30px 15px;
        }


       

        @media (min-width: 1024px) {
        

          .filterScroll {
            justify-content: center;
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkWithUs;