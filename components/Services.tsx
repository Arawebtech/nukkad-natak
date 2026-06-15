

// "use client";

// import React, { useEffect, useRef } from "react";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { HeadingUpdate } from "./common/HeadingUpdate";

// gsap.registerPlugin(ScrollTrigger);

// const Services = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const services = [
//     {
//       id: 1,
//       image: "/images/service1.png",
//       title: "Street Play Campaigns",
//     },
//     {
//       id: 2,
//       image: "/images/service2.png",
//       title: "Social Awareness Drives",
//     },
//     {
//       id: 3,
//       image: "/images/service3.png",
//       title: "Election Awareness",
//     },
//     {
//       id: 4,
//       image: "/images/service4.png",
//       title: "Health Awareness",
//     },
//     {
//       id: 5,
//       image: "/images/service5.png",
//       title: "Women Empowerment",
//     },
//     {
//       id: 6,
//       image: "/images/service6.png",
//       title: "Environmental Campaigns",
//     },
//     {
//       id: 7,
//       image: "/images/service7.png",
//       title: "Youth Engagement",
//     },
//     {
//       id: 8,
//       image: "/images/service8.png",
//       title: "Education Awareness",
//     },
//     {
//       id: 9,
//       image: "/images/service9.png",
//       title: "CSR Activities",
//     },
//     {
//       id: 10,
//       image: "/images/service10.png",
//       title: "Public Interaction Programs",
//     },
//   ];

//   useEffect(() => {
//     if (
//       !gridRef.current ||
//       !headingWrapRef.current ||
//       !sectionRef.current
//     ) {
//       return;
//     }

//     const ctx = gsap.context(() => {
//       // HEADING
//       gsap.fromTo(
//         headingWrapRef.current,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",

//           scrollTrigger: {
//             trigger: headingWrapRef.current,
//             start: "top 85%",
//             once: true,
//           },
//         }
//       );

//       // CARDS
//       gsap.fromTo(
//         ".gridItem",
//         {
//           y: 60,
//           opacity: 0,
//           scale: 0.96,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.9,
//           stagger: 0.1,
//           ease: "power2.out",

//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 88%",
//             once: true,
//           },
//         }
//       );

//       // HOVER SCALE
//       gsap.utils.toArray<HTMLElement>(".gridItem").forEach((card) => {
//         card.addEventListener("mouseenter", () => {
//           gsap.to(card, {
//             scale: 1.05,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//         });

//         card.addEventListener("mouseleave", () => {
//           gsap.to(card, {
//             scale: 1,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       {/* HEADING */}
//       <div ref={headingWrapRef}>
//         <HeadingUpdate
//           title="Our"
//           color="black"
//           title2={true}
//           title2Text="Services"
//           mobileSize="25px"
//           desktopSize="30px"
//         />
//       </div>

//       {/* GRID */}
//       <div className="servicesGrid" ref={gridRef}>
//         {services.map((item) => (
//           <div key={item.id} className="gridItem gsap-hover-text">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="image"
//             />

//             <h2 className="title">{item.title}</h2>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .servicesGrid {
//           width: 100%;
//           display: grid;
//           grid-template-columns: repeat(5, 1fr);
       
//   column-gap: 0px;
//   row-gap: 30px;


//           padding: 0px 60px 0px;
//         }

//         .gridItem {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           cursor: pointer;
//           will-change: transform, opacity;
//         }

//         .image {
//           width: 90%;
//           max-width: 170px;
//           height: 170px;
//           object-fit: contain;
//           display: block;
//         }

//         .title {
   
//           font-size: 14px;
//           font-weight: 700;
//           line-height: 1.4;
//         }

//         /* TABLET */
//         @media (max-width: 991px) {
//           .servicesGrid {
//             grid-template-columns: repeat(3, 1fr);
//             padding: 20px 30px 30px;
//             gap: 25px;
//           }

//           .image {
//             max-width: 130px;
//             height: 130px;
//           }
//         }

//         /* MOBILE */
//         @media (max-width: 767px) {
//           .servicesGrid {
//             grid-template-columns: repeat(3, 1fr);
//             padding: 10px 14px 20px;
//             gap: 18px;
//           }

//           .image {
//             max-width: 85px;
//             height: 85px;
//           }

//           .title {
//             font-size: 10px;
//             margin-top: 8px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Services;


"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "./common/HeadingUpdate";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  _id: string;
  title: string;
  image?: {
    url: string;
  };
}

  const Staticservices = [
    {
      id: 1,
      image: "/images/service1.png",
      title: "Street Play Campaigns",
    },
    {
      id: 2,
      image: "/images/service2.png",
      title: "Social Awareness Drives",
    },
    {
      id: 3,
      image: "/images/service3.png",
      title: "Election Awareness",
    },
    {
      id: 4,
      image: "/images/service4.png",
      title: "Health Awareness",
    },
    {
      id: 5,
      image: "/images/service5.png",
      title: "Women Empowerment",
    },
    {
      id: 6,
      image: "/images/service6.png",
      title: "Environmental Campaigns",
    },
    {
      id: 7,
      image: "/images/service7.png",
      title: "Youth Engagement",
    },
    {
      id: 8,
      image: "/images/service8.png",
      title: "Education Awareness",
    },
    {
      id: 9,
      image: "/images/service9.png",
      title: "CSR Activities",
    },
    {
      id: 10,
      image: "/images/service10.png",
      title: "Public Interaction Programs",
    },
  ];

const Services = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH SERVICES ================= */
  const fetchServices = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/services/public-services/all`
      );

      const json = await res.json();

      if (json.success) {
        setServices(json.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const displayServices =
  services.length > 0 ? services : Staticservices;

  /* ================= GSAP ANIMATION ================= */
  useEffect(() => {
    if (!gridRef.current || !headingWrapRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
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
        { y: 60, opacity: 0, scale: 0.96 },
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
          gsap.to(card, { scale: 1.05, duration: 0.3 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [services]);

  if (loading) {
    return <div style={{ textAlign: "center", padding: 40 }}>Loading...</div>;
  }

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

      {/* GRID */}
      <div className="servicesGrid" ref={gridRef}>
     {displayServices?.map((item: any) => (
         <div
  key={item._id || item.id}
  className="gridItem gsap-hover-text"
>
         <img
  src={item.image?.url || item.image || "/placeholder.png"}
  alt={item.title}
  className="image"
/>

            <h2 className="title">{item.title}</h2>
          </div>
        ))}
      </div>

      <style jsx>{`
        .servicesGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          column-gap: 0px;
          row-gap: 30px;
          padding: 0px 60px 0px;
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
};

export default Services;