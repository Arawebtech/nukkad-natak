
// "use client";

// import React, { useEffect, useRef } from "react";

// import { Circle } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { HeadingUpdate } from "./common/HeadingUpdate";

// gsap.registerPlugin(ScrollTrigger);

// const Home4 = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   // DATA
//   const items = [
//     {
//       image: "/images/home9.webp",
//       bgImage: "/images/homeblack1.png",
//       title: "Swachh Bharat Drive",
//       buttonTitle: "View More",
//       icon: <Circle size={14} />,
//     },
//     {
//       image: "/images/home10.webp",
//       bgImage: "/images/homeblack1.png",
//           title: "Swachh Bharat Drive",
//       buttonTitle: "View More",
//       icon: <Circle size={14} />,
//     },
//     {
//       image: "/images/home11.webp",
//       bgImage: "/images/homeblack1.png",
//            title: "Swachh Bharat Drive",
//       buttonTitle: "View More",
//       icon: <Circle size={14} />,
//     },
//   ];

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
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.1,
//           ease: "power2.out",
//           force3D: true,

//           scrollTrigger: {
//             trigger: headingWrapRef.current,
//             start: "top 85%",
//             once: true,
//           },
//         }
//       );

//       // GRID ITEMS ANIMATION
//   gsap.fromTo(
//   gridRef.current!.children,
//   {
//     y: 70,
//     opacity: 0,
//     scale: 0.96,
//   },
//   {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     duration: 1,
//     stagger: 0.18,
//     ease: "power2.out",
//     force3D: true,

//     scrollTrigger: {
//       trigger: gridRef.current,
//       start: "top 88%",
//       once: true,
//     },
//   }
// );
//    // ENTRY ANIMATION
//       gsap.fromTo(
//         ".gridItem",
//         {
//           y: 60,
//           opacity: 0,
//           scale: 0.98,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.9,
//           stagger: 0.12,
//           ease: "power2.out",

//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 88%",
//             once: true,
//           },
//         }
//       );

   
//       gsap.utils.toArray<HTMLElement>(".gridItem").forEach((card) => {
//         gsap.to(card, {
//           scale: 1.01,
//           duration: 0.4,
//           ease: "power2.out",

//           scrollTrigger: {
//             trigger: card,
//             start: "top center",
//             end: "bottom center",
//             scrub: 1,

//             onEnter: () => {
//               gsap.to(card, {
//                 scale: 1.01,
//                 duration: 0.4,
//                 ease: "power2.out",
//               });
//             },

//             onLeave: () => {
//               gsap.to(card, {
//                 scale: 1,
//                 duration: 0.1,
//                 ease: "power2.out",
//               });
//             },

//             onEnterBack: () => {
//               gsap.to(card, {
//                 scale: 1.01,
//                 duration: 0.4,
//                 ease: "power2.out",
//               });
//             },

//             onLeaveBack: () => {
//               gsap.to(card, {
//                 scale: 1,
//                 duration: 0.4,
//                 ease: "power2.out",
//               });
//             },
//           },
//         });
//       });


//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//     className="main-box"
//     >
//       {/* HEADING */}
//       <div ref={headingWrapRef}>
      

//           <HeadingUpdate
//                     title="Our Recent"
//                     color="black"
//                     title2={true}
//                     title2Text="Campaigns"
//                     mobileSize="25px"
//                     desktopSize="30px"
//                   />
//       </div>

//       <div
//         className=""
//         style={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "50px",
//         }}
//       >
//         {/* GRID */}
//         <div ref={gridRef} className="responsiveGrid">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="gridItem"
//             >
//               <div className="content">
//                 {/* IMAGE */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     objectFit: "cover",
//                     display: "block",
//                   }}
//                 />

               
//                 <div
//                   className="bottomBox"
//                   style={{
//                     backgroundImage: `url("/images/download.svg")`,
//                     backgroundColor:"#000000"
//                   }}
//                 >
//                   {/* TITLE */}
//                   <div className="title">
//                     {item.title}
//                   </div>

//                   {/* BUTTON */}
//                   <div className="main-background-primary buttonWrap">
//                     {item.icon}

//                     <button className="btn">
//                       {item.buttonTitle}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

     
//       <style jsx>{`
//         .responsiveGrid {
//           width: 100%;
//           display: grid;
//           grid-template-columns: repeat(1, 1fr);
//           gap: 24px;
//         }

//            .main-box {
//           width: 100%;
//         padding:0px
//         }

//         .gridItem {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;

//           will-change: transform, opacity;
//         }

//         .content {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           overflow: hidden;
//           border-radius: 16px;

//           transform: translateZ(0);
//           backface-visibility: hidden;
//         }

//         .bottomBox {
//           width: 100%;
//           background-size: cover;
//           background-position: center;

//           display: flex;
//           align-items: center;
//           justify-content: space-between;

//           gap: 16px;

//           padding: 16px 20px;
//           flex-wrap: wrap;
//         }

//   .title {
//   font-size: 16px;
//   font-weight: 700;
//   line-height: 1.4;

//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;

//   overflow: hidden;

// }

//         .buttonWrap {
//           display: flex;
//           align-items: center;
//           gap: 6px;

//           padding: 8px 12px;
//           border-radius: 6px;

//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 1px;

//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .buttonWrap:hover {
//           transform: translateY(-2px);
//         }

//         .btn {
//           background: transparent;
//           border: none;
//           outline: none;
//           color: inherit;
//           font-size: inherit;
//           font-weight: inherit;
//           cursor: pointer;
//           white-space:nowrap
//         }

//         @media (min-width: 768px) {
//           .bottomBox {
//             flex-wrap: nowrap;
//           }
            
//         }

//         @media (min-width: 1024px) {
//           .responsiveGrid {
//             grid-template-columns: repeat(3, 1fr);
//           }
//                    .main-box {
//           width: 100%;
//         padding:0px 60px 0px 60px
//         }

//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home4;

"use client";

import React, { useEffect, useRef, useState } from "react";

import { Circle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "./common/HeadingUpdate";
import { websiteApi } from "@/app/api/website.api";
import GalleryPopup from "@/app/gallery/GalleryPopup";

gsap.registerPlugin(ScrollTrigger);

const Home4 = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [openPopup, setOpenPopup] = useState(false);

  // STATIC FALLBACK
  const staticItems = [
    {
      image: "/images/home9.webp",
      bgImage: "/images/homeblack1.png",
      title: "Swachh Bharat Drive",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
    },
    {
      image: "/images/home10.webp",
      bgImage: "/images/homeblack1.png",
      title: "Swachh Bharat Drive",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
    },
    {
      image: "/images/home11.webp",
      bgImage: "/images/homeblack1.png",
      title: "Swachh Bharat Drive",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
    },
  ];

  /* ================= FETCH LATEST 3 ================= */

  const fetchGallery = async () => {
    try {
      const res = await websiteApi.get("/gallery/public-gallery", {
        params: {
          page: 1,
          limit: 3,
          status: true,
        },
      });

      setGalleryItems(res?.data?.data || []);
    } catch (error) {
      console.log("Gallery Error:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // IF API EMPTY => SHOW STATIC
  const items =
    galleryItems?.length > 0
      ? galleryItems.slice(0, 3)
      : staticItems;

  // CHECK DYNAMIC DATA
  const isDynamicData = galleryItems?.length > 0;

  // OPEN POPUP
  const handleOpenPopup = (item: any) => {
    // ONLY DYNAMIC DATA CLICKABLE
    if (!isDynamicData) return;

    setSelectedItem(item);
    setOpenPopup(true);
  };

  // CLOSE POPUP
  const handleClosePopup = () => {
    setOpenPopup(false);

    // SMOOTH CLEAR
    setTimeout(() => {
      setSelectedItem(null);
    }, 300);
  };

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
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          force3D: true,

          scrollTrigger: {
            trigger: headingWrapRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // GRID ITEMS ANIMATION
      gsap.fromTo(
        gridRef.current!.children,
        {
          y: 70,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power2.out",
          force3D: true,

          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      // ENTRY ANIMATION
      gsap.fromTo(
        ".gridItem",
        {
          y: 60,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",

          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".gridItem").forEach((card) => {
        gsap.to(card, {
          scale: 1.01,
          duration: 0.4,
          ease: "power2.out",

          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: 1,

            onEnter: () => {
              gsap.to(card, {
                scale: 1.01,
                duration: 0.4,
                ease: "power2.out",
              });
            },

            onLeave: () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.1,
                ease: "power2.out",
              });
            },

            onEnterBack: () => {
              gsap.to(card, {
                scale: 1.01,
                duration: 0.4,
                ease: "power2.out",
              });
            },

            onLeaveBack: () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            },
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={sectionRef} className="main-box">
      {/* POPUP */}

      {isDynamicData && (
        <GalleryPopup
          open={openPopup}
          data={selectedItem}
          onClose={handleClosePopup}
        />
      )}

      {/* HEADING */}

      <div ref={headingWrapRef}>
        <HeadingUpdate
          title="Our Recent"
          color="black"
          title2={true}
          title2Text="Campaigns"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {/* GRID */}

        <div ref={gridRef} className="responsiveGrid">
          {items.map((item: any, index) => (
            <div
              key={index}
              className={`gridItem ${
                isDynamicData ? "clickable" : ""
              }`}
            >
              <div className="content">
                {/* IMAGE */}

                <img
                  src={
                    item?.coverImage?.url ||
                    item?.images?.[0]?.url ||
                    item?.image
                  }
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* BOTTOM */}

                <div
                  className="bottomBox"
                  style={{
                    backgroundImage: `url("/images/download.svg")`,
                    backgroundColor: "#000000",
                    display:"flex",
                    flexDirection:"column",
                    gap:"5px",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  {/* TITLE */}

                  <div className="title">{item.title}</div>

                  {/* BUTTON */}

                  <div
                    className={`main-background-primary buttonWrap ${
                      !isDynamicData ? "disabledBtn" : ""
                    }`}
                    onClick={() => handleOpenPopup(item)}
                  >
                    <Circle size={14} />

                    <button
                      className="btn"
                      disabled={!isDynamicData}
                    >
                      {item.buttonTitle || "View More"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .responsiveGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
        }

        .main-box {
          width: 100%;
          padding: 0px;
        }

        .gridItem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;

          will-change: transform, opacity;
        }

        .clickable {
          cursor: pointer;
        }

        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 16px;

          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .bottomBox {
          width: 100%;
          background-size: cover;
          background-position: center;

     

          padding: 10px 10px;
  
        }

        .title {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
          min-height:45px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          
          overflow: hidden;
          }
          
          .buttonWrap {
            display: flex;
            align-items: center;
            float:right;
            gap: 6px;
            width:fit-content;
            margin-top:6px;
          padding: 8px 12px;
          border-radius: 6px;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;

          cursor: pointer;
          transition: all 0.3s ease;
        }

        .buttonWrap:hover {
          transform: translateY(-2px);
        }

        .disabledBtn {
          opacity: 0.6;
          cursor: not-allowed;
          pointer-events: none;
        }

        .btn {
          background: transparent;
          border: none;
          outline: none;
          color: inherit;
          font-size: inherit;
          font-weight: inherit;
          cursor: pointer;
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .bottomBox {
            flex-wrap: nowrap;
          }
        }

        @media (min-width: 1024px) {
          .responsiveGrid {
            grid-template-columns: repeat(3, 1fr);
          }

          .main-box {
            width: 100%;
            padding: 0px 60px 0px 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home4;