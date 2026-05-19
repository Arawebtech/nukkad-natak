// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }



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

export default function Home() {

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
   <Services />
     </div>

        <div className="website-container">
   <Home4 />
     </div>
        <div className="website-container">
  
   <Home5 />
     </div>


    </div>
  );
}
