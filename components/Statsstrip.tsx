// "use client";

// import { useEffect, useRef, useState } from "react";
// import { HeadingUpdate } from "./common/HeadingUpdate";

// interface Stat {
//   value: number;
//   suffix: string;
//   label: string;
//   icon: string;
// }

// const STATS: Stat[] = [
//   { value: 15,  suffix: "+", label: "Years Experience",    icon: "👥" },
//   { value: 500, suffix: "+", label: "Campaigns Delivered",  icon: "🎭" },
//   { value: 10000,   suffix: "+", label: "Pan-India Reach",            icon: "🌐" },
//   { value: 350,  suffix: "+", label: "Customized Scripts",      icon: "📍" },
// ];

// function easeOutExpo(t: number): number {
//   return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
// }

// function useCountUp(target: number, duration: number, triggered: boolean) {
//   const [count, setCount] = useState(0);
//   const rafRef = useRef<number | null>(null);

//   useEffect(() => {
//     if (!triggered) return;
//     const start = performance.now();

//     const tick = (now: number) => {
//       const progress = Math.min((now - start) / duration, 1);
//       setCount(Math.round(easeOutExpo(progress) * target));
//       if (progress < 1) {
//         rafRef.current = requestAnimationFrame(tick);
//       }
//     };

//     rafRef.current = requestAnimationFrame(tick);
//     return () => {
//       if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
//     };
//   }, [triggered, target, duration]);

//   return count;
// }

// function StatCard({ stat, triggered, index }: { stat: Stat; triggered: boolean; index: number }) {
//   const count = useCountUp(stat.value, 1600, triggered);
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         background: hovered ? "rgba(235,99,29,0.06)" : "rgba(255,255,255,0.03)",
//         border: `1px solid ${hovered ? "rgba(235,99,29,0.35)" : "rgba(255,255,255,0.08)"}`,
//         borderRadius: "16px",
//         padding: "40px 28px 36px",
//         textAlign: "center",
//         overflow: "hidden",
//         transform: hovered ? "translateY(-6px)" : "translateY(0)",
//         transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, background 0.3s ease",
//         animationDelay: `${index * 100}ms`,
//       }}
//     >
//       {/* Top orange reveal line */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: "2px",
//           background: "linear-gradient(90deg, transparent, #EB631D, transparent)",
//           opacity: hovered ? 1 : 0,
//           transition: "opacity 0.3s ease",
//         }}
//       />

//       {/* Icon badge */}
//       {/* <div
//         style={{
//           display: "inline-flex",
//           alignItems: "center",
//           justifyContent: "center",
//           width: "52px",
//           height: "52px",
//           borderRadius: "12px",
//           background: "rgba(235,99,29,0.12)",
//           border: "1px solid rgba(235,99,29,0.2)",
//           fontSize: "22px",
//           marginBottom: "20px",
//         }}
//         aria-hidden="true"
//       >
//         {stat.icon}
//       </div> */}

//       {/* Animated number */}
//       <div
//         style={{
//           fontSize: "clamp(20px, 5vw, 30px)",
//           fontWeight: 700,
//           color: "#ffffff",
//           lineHeight: 1,
//           marginBottom: "10px",
//           letterSpacing: "-1px",
//         }}
//       >
//         {count.toLocaleString()}
//         <span style={{ color: "#EB631D" }}>{stat.suffix}</span>
//       </div>

//       {/* Accent divider */}
//       <div
//         style={{
//           width: "40px",
//           height: "2px",
//           background: "rgba(235,99,29,0.4)",
//           borderRadius: "2px",
//           margin: "12px auto",
//         }}
//       />

//       {/* Label */}
//       <div
//         style={{
//           fontSize: "14px",
//           fontWeight: 400,
//           color: "rgba(255,255,255,0.5)",
//           letterSpacing: "0.3px",
//           lineHeight: 1.4,
//         }}
//       >
//         {stat.label}
//       </div>
//     </div>
//   );
// }

// export default function StatsStrip() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [triggered, setTriggered] = useState(false);

//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTriggered(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.25 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={sectionRef} style={{ width: "100%", overflow: "hidden",paddingBottom:"60px" }}>

//    <div >
//         <HeadingUpdate
//           title="Our"
//           color="white"
//           title2={true}
//           title2Text="Impact"
//           mobileSize="25px"
//           desktopSize="30px"
//         />
//       </div>

//       {/* Stats grid */}
//       <div
//         style={{
//           position: "relative",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "20px",
   
//           margin: "0 auto",
//         }}
//       >
//         {STATS.map((stat, i) => (
//           <StatCard key={stat.label} stat={stat} triggered={triggered} index={i} />
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import { HeadingUpdate } from "./common/HeadingUpdate";

import {
  FiGlobe,
  FiFileText,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import { IndiaMapIcon } from "./common/IndiaMapIcon";
import { GrCopy } from "react-icons/gr";
import { GiIndiaGate } from "react-icons/gi";

interface Stat {
  value: number | null;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

// const STATS: Stat[] = [
//   { value: 15, suffix: "+", label: "Years Experience", icon: <FiUsers /> },
//   { value: 500, suffix: "+", label: "Campaigns Delivered", icon: <FiAward /> },
//   { value: null, suffix: "", label: "Pan-India Reach", icon: <FiGlobe /> },
//   { value: null, suffix: "", label: "Customized Scripts", icon: <FiFileText /> },
// ];

const STATS: Stat[] = [
  { value: 15, suffix: "+", label: "Years Experience", icon: null },
  { value: 300, suffix: "+", label: "Campaigns Delivered", icon: null },
  {
    value: null,
    suffix: "",
    label: "Pan-India Reach",
    icon: <GiIndiaGate  color="white" />,
//     icon: (
//   <img
//     src="/images/india-white.svg"
//     alt="India Map"
//     width={52}
//     height={52}
//     style={{
//       filter: "drop-shadow(0 0 4px #EB631D)",
//     }}
//   />
// ),
  },
  {
    value: null,
    suffix: "",
    label: "Customized Scripts",
    icon: <GrCopy  color="white" />
  },
];

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target: number | null, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!triggered || target === null) return;

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(easeOutExpo(progress) * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [triggered, target, duration]);

  return target === null ? 0 : count;
}

function StatCard({
  stat,
  triggered,
  index,
}: {
  stat: Stat;
  triggered: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1600, triggered);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? "rgba(235,99,29,0.06)"
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${
          hovered ? "rgba(235,99,29,0.35)" : "rgba(255,255,255,0.08)"
        }`,
        borderRadius: "16px",
        padding: "40px 28px 36px",
        textAlign: "center",
        overflow: "hidden",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition:
          "transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, background 0.3s ease",
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #EB631D, transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* NUMBER (stable layout, no shift) */}
      <div
        style={{
          fontSize: "clamp(30px, 5vw, 30px)",
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1,
          marginBottom: "10px",
          letterSpacing: "-1px",
          minHeight: "42px", // 👈 prevents layout jump
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* {stat.value === null ? (
          <span style={{ opacity: 0 }}>0</span> // invisible placeholder
        ) : (
          <>
            {count.toLocaleString()}
            <span style={{ color: "#EB631D" }}>{stat.suffix}</span>
          </>
        )} */}

        {stat.value === null ? (
  <span
    style={{
      fontSize: "40px",
      color: "#EB631D",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {stat.icon}
  </span>
) : (
  <>
    {count.toLocaleString()}
    <span style={{ color: "#EB631D" }}>{stat.suffix}</span>
  </>
)}
      </div>

      {/* divider */}
      <div
        style={{
          width: "40px",
          height: "2px",
          background: "rgba(235,99,29,0.4)",
          borderRadius: "2px",
          margin: "12px auto",
        }}
      />

      {/* label */}
      <div
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.3px",
          lineHeight: 1.4,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ width: "100%", overflow: "hidden", padding: "40px 0px" }}
    >
      {/* <HeadingUpdate
        title="Our"
        color="white"
        title2={true}
        title2Text="Impact"
        mobileSize="25px"
        desktopSize="30px"
      /> */}

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          margin: "0 auto",
        }}
      >
        {STATS.map((stat, i) => (
          <StatCard
            key={stat.label}
            stat={stat}
            triggered={triggered}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}