

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AwarenessBanner from "@/components/AwarenessBanner";
import Home2 from "@/components/Home2";
import Services from "@/components/Services";
import Home4 from "@/components/Home4";
import Home5 from "@/components/Home5";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhoAreWe from "@/components/home/WhoAreWe";
import WhyStreetPlays from "./enquiry/WhyStreetPlays";
import ServicesPage from "./services/page";
import StatsStrip from "@/components/Statsstrip";
import FreeQuet from "@/components/common/FreeQuet";

// export default function HomeClient({ services }: any) {
export default function HomeClient() {

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    if (
      !titleRef.current ||
      !btnRef.current ||
      !iconRef.current
    ) return;

    gsap.from(titleRef.current,{
      y:100,
      opacity:0,
      duration:1,
      ease:"power4.out"
    });

    gsap.from(btnRef.current,{
      scale:0,
      opacity:0,
      delay:0.5,
      duration:1,
      ease:"back.out(1.7)"
    });

    gsap.from(iconRef.current,{
      rotate:360,
      scale:0,
      duration:1.2,
      ease:"elastic.out(1,0.5)"
    });

  },[]);

  return (
    <div>


   
    
   <AwarenessBanner/>
   <div className="website-container">
    <WhoAreWe/>
    <WhatWeDo/>
   </div>
   <Home2/>
   <div className="website-container">
   {/* <Services /> */}
       <ServicesPage  />
     </div>

        <div className="website-container-with-bg-img">
   {/* <Services /> */}
       <StatsStrip  />
     </div>

        <div className="website-container">
   <Home4 />  
     </div>
        <div className="website-container">
  
   <WhyStreetPlays />
   <Home5 />
     </div>

             <div className="website-container-with-bg-img">
   {/* <Services /> */}
       <FreeQuet  />
     </div>


    </div>
  );
}
