"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Circle, Icon, MapPin, Search } from "lucide-react";

import {
  Megaphone,
  Users,
  Building2,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";

const WorkWithUs = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [activeFilter, setActiveFilter] = useState("All");

  // const filters = [
  //   { title: "Meaningful Work", 
  //     image: "/images/team1.png" ,
  //     desc:"Use your skills to create awareness and bring positive change."
  //   },
  //   { title: "Meaningful Work",  image: "/images/team1.png",
  //      desc:"Use your skills to create awareness and bring positive change."
  //    },
  //   { title: "Meaningful Work",  image: "/images/team1.png",

  //         desc:"Use your skills to create awareness and bring positive change."
  //    },
  //   { title: "Meaningful Work",  image: "/images/team1.png",
  //         desc:"Use your skills to create awareness and bring positive change."
  //    },
  //   { title: "Meaningful Work",  image: "/images/team1.png",
  //         desc:"Use your skills to create awareness and bring positive change."
  //    },
  // ];

const filters = [
  {
    id: 1,
    image: "/images/services/public-awareness.jpg",
    icon: Megaphone,
    title: "Public Awareness",
    desc:
      "Use live performances to spread important social and public awareness messages.",
  },

  {
    id: 2,
    image: "/images/services/community-engagement.jpg",
    icon: Users,
    title: "Community Engagement",
    desc:
      "Connect directly with people through interactive audience participation and storytelling.",
  },

  {
    id: 3,
    image: "/images/services/csr-campaigns.jpg",
    icon: Building2,
    title: "CSR Campaigns",
    desc:
      "Support CSR activities with meaningful street play and awareness performances.",
  },

  {
    id: 4,
    image: "/images/services/educational-programs.jpg",
    icon: GraduationCap,
    title: "Educational Programs",
    desc:
      "Create awareness activities for schools, colleges, and educational institutions.",
  },

  {
    id: 5,
    image: "/images/services/social-outreach.jpg",
    icon: Globe2,
    title: "Social Outreach",
    desc:
      "Reach wider audiences through impactful communication and public interaction.",
  },
];


  const items = [
    {
      image: "/images/home9.webp",
      bgImage: "/images/homeblack1.png",
      title: "Swachh Bharat Drive",
      category: "Government Campaigns",
      location: "Bangalore",
    },
    {
      image: "/images/home10.webp",
      bgImage: "/images/homeblack1.png",
      title: "BSES Energy Awareness",
      category: "Government Campaigns",
      location: "Delhi",
    },
    {
      image: "/images/home11.webp",
      bgImage: "/images/homeblack1.png",
      title: "Election Awareness Drive",
      category: "Government Campaigns",
      location: "Mumbai",
    },
    {
      image: "/images/home11.webp",
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

      <div >
        <HeadingUpdate
          title="Why"
          color="black"
          title2={true}
          title2Text="Work With Us?"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

{/* done  */}
<div className="filterWrapper">
  <div className="filterScroll">
    {filters.map((item, index) => {
      const isLast = index === filters.length - 1;
        const Icon = item.icon;

      return (
        <div key={index} className="filterCard">
          {/* <img src={item.image} className="filterImg" /> */}

                  <div className="iconBox">
            <Icon size={50} color="#eb631d"/>
          </div>



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
  overflow: auto;
  padding: 0px 0px 60px 0px;
  scrollbar-width: none;
}

// .iconBox {
//   width: 45px;
//   height: 45px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   border-radius: 50%;
//   background: #f5f5f5;

//   margin-top: 5px;
// }

.filterScroll::-webkit-scrollbar {
  display: none;
}

/* ===== CARD ===== */
.filterCard {
  flex: 0 0 auto;
  width: 270px;

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
  max-width: 100px;
  object-fit: contain;
}

/* TEXT */
.filterCard h2 {
  font-size: 16px;
  font-weight: 700;
}

.filterCard p {
  font-size: 12px;
  font-weight: 300;
}



     

        /* ===== GRID ===== */
        .mainBox {
          padding: 30px 15px;
        }


        }
      `}</style>
    </div>
  );
};

export default WorkWithUs;