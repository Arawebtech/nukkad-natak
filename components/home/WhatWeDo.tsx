// "use client";

// import React, { useEffect, useRef } from "react";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { HeadingUpdate } from "../common/HeadingUpdate";

// gsap.registerPlugin(ScrollTrigger);

// const WhatWeDo = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (
//       !gridRef.current ||
//       !headingWrapRef.current ||
//       !sectionRef.current
//     )
//       return;

//     const ctx = gsap.context(() => {
//       // HEADING ANIMATION
//       gsap.fromTo(
//         headingWrapRef.current,
//         {
//           y: 60,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           force3D: true,

//           scrollTrigger: {
//             trigger: headingWrapRef.current,
//             start: "top 85%",
//             once: true,
//           },
//         }
//       );

//       // TEXT ANIMATION
//       gsap.fromTo(
//         gridRef.current,
//         {
//           y: 80,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           force3D: true,

//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 85%",
//             once: true,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={sectionRef}>
//       {/* HEADING */}
//       <div ref={headingWrapRef}>
//         <HeadingUpdate
//           title="What"
//           color="black"
//           title2={true}
//           title2Text="We Do"
//           mobileSize="25px"
//           desktopSize="30px"
//         />
//       </div>

//       {/* TEXT */}
//       {/* <div ref={gridRef} className="textWrapper">
//         <span className="whatText">

//   <span>
//     We create professional Nukkad Natak and Street Play performances for organizations, institutions, brands, government campaigns, and social initiatives looking to engage audiences in a meaningful and memorable way.
//   </span>

//   <br />
//   <br />

//   <span>
//     Our performances are designed around real audience behaviour. Instead of one-way communication, we focus on interaction, storytelling, emotion, and participation so people feel connected to the message rather than simply hearing it. Whether it is a social awareness campaign, a public outreach activity, a college program, or a brand engagement event, our team works closely to create performances that fit the audience, location, and purpose of the campaign.
//   </span>

//   <br />
//   <br />

//   <span>
//     From social awareness topics and public education drives to corporate CSR campaigns and promotional activities, our experienced performers know how to capture attention in crowded public spaces and turn everyday conversations into impactful live experiences through street theatre.
//   </span>

//         </span>
//       </div> */}


//       <div ref={gridRef} className="textWrapper">
//   <span className="whatText">

//     <span>
//       We provide professional Street Play and IEC Activation services designed to create awareness, encourage participation, and build stronger audience engagement on the ground level. From concept development and script writing to artist management and live execution, our team handles complete end-to-end campaign delivery across different industries and social initiatives.
//     </span>

//     <br />
//     <br />

//     <span>
//       Our work includes public awareness campaigns, CSR activities, BTL activations, educational programs, social awareness drives, rural outreach campaigns, and brand engagement activities conducted at schools, colleges, villages, marketplaces, residential communities, exhibitions, corporate events, and public spaces across India.
//     </span>

//     <br />
//     <br />

//     <span>
//       By combining storytelling, live interaction, and culturally relevant performances, we help organizations communicate important messages in a way that audiences genuinely connect with and remember.
//     </span>
//   </span>
// </div>

//       <style jsx>{`
//         .textWrapper {
//           width: 100%;
//           display: flex;
//           justify-content: center;
//         }

//         .whatText {
//           width: 100%;
//           // padding: 0 50px;

//           font-size: 16px;
//           line-height: 24px;
//           font-weight: 400;

//           text-align: left;

//           display: block;
//         }

//         /* MOBILE */
//         @media (max-width: 768px) {
//           .whatText {
//             padding: 0;

//             font-size: 14px;
//             line-height: 22px;

//             text-align: left;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WhatWeDo;


"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "../common/HeadingUpdate";
import CommonContentSection from "../CommonContentSection";

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

//   return (
//     <div ref={sectionRef}>
  
//       <div ref={headingWrapRef}>
//         <HeadingUpdate
//           title="What"
//           color="black"
//           title2={true}
//           title2Text="We Do"
//           mobileSize="25px"
//           desktopSize="30px"
//         />
//       </div>

   


//       <div ref={gridRef} className="textWrapper">
//   <span className="whatText">

//     <span>
//       We provide professional Street Play and IEC Activation services designed to create awareness, encourage participation, and build stronger audience engagement on the ground level. From concept development and script writing to artist management and live execution, our team handles complete end-to-end campaign delivery across different industries and social initiatives.
//     </span>

//     <br />
//     <br />

//     <span>
//       Our work includes public awareness campaigns, CSR activities, BTL activations, educational programs, social awareness drives, rural outreach campaigns, and brand engagement activities conducted at schools, colleges, villages, marketplaces, residential communities, exhibitions, corporate events, and public spaces across India.
//     </span>

//     <br />
//     <br />

//     <span>
//       By combining storytelling, live interaction, and culturally relevant performances, we help organizations communicate important messages in a way that audiences genuinely connect with and remember.
//     </span>
//   </span>
// </div>

//       <style jsx>{`
//         .textWrapper {
//           width: 100%;
//           display: flex;
//           justify-content: center;
//         }

//         .whatText {
//           width: 100%;
//           // padding: 0 50px;

//           font-size: 16px;
//           line-height: 24px;
//           font-weight: 400;

//           text-align: left;

//           display: block;
//         }

//         /* MOBILE */
//         @media (max-width: 768px) {
//           .whatText {
//             padding: 0;

//             font-size: 14px;
//             line-height: 22px;

//             text-align: left;
//           }
//         }
//       `}</style>
//     </div>
//   );

  return (
    <CommonContentSection
      title="What"
      title2Text="We Do"
      paragraphs={[
        "We provide professional Street Play and IEC Activation services designed to create awareness, encourage participation, and build stronger audience engagement on the ground level. From concept development and script writing to artist management and live execution, our team handles complete end-to-end campaign delivery across different industries and social initiatives.",
        " Our work includes public awareness campaigns, CSR activities, BTL activations, educational programs, social awareness drives, rural outreach campaigns, and brand engagement activities conducted at schools, colleges, villages, marketplaces, residential communities, exhibitions, corporate events, and public spaces across India.",
        "  By combining storytelling, live interaction, and culturally relevant performances, we help organizations communicate important messages in a way that audiences genuinely connect with and remember.",
      ]}
    />
  );

};

export default WhatWeDo;