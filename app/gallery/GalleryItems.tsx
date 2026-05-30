// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { Circle, MapPin, Search } from "lucide-react";

// const GalleryItems = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const [activeFilter, setActiveFilter] = useState("All");

//   const filters = [
//     { title: "All", image: "/images/gallery2.png" },
//     { title: "Government Campaigns", image: "/images/gallery2.png" },
//     { title: "Corporate Awareness", image: "/images/gallery3.png" },
//     { title: "CSR & College Activations", image: "/images/gallery2.png" },
//     { title: "Election Awareness", image: "/images/gallery3.png" },
//   ];

//   const items = [
//     {
//       image: "/images/home9.webp",
//       bgImage: "/images/homeblack1.png",
//       title: "Swachh Bharat Drive",
//       category: "Government Campaigns",
//       location: "Bangalore",
//     },
//     {
//       image: "/images/home10.webp",
//       bgImage: "/images/homeblack1.png",
//       title: "BSES Energy Awareness",
//       category: "Government Campaigns",
//       location: "Delhi",
//     },
//     {
//       image: "/images/home11.webp",
//       bgImage: "/images/homeblack1.png",
//       title: "Election Awareness Drive",
//       category: "Government Campaigns",
//       location: "Mumbai",
//     },
//     {
//       image: "/images/home11.webp",
//       bgImage: "/images/homeblack1.png",
//       title: "Election Awareness Drive 2",
//       category: "Government Campaigns",
//       location: "Mumbai",
//     },
//   ];

//   // ✅ GSAP ANIMATION (REUSABLE STYLE)
//   useEffect(() => {
//     if (!gridRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         gridRef.current.children,
//         { y: 50, opacity: 0, scale: 0.95 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.12,
//           ease: "power3.out",
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [activeFilter]);

//   // ✅ FILTER LOGIC
//   const filteredItems =
//     activeFilter === "All"
//       ? items
//       : items.filter((i) => i.category === activeFilter);

//   return (
//     <div ref={sectionRef} className="wrapper">
//       {/* ================= FILTER BAR ================= */}
//       <div className="filterWrapper">
//         <div className="filterScroll">
//           {filters.map((item, index) => {
//             const isActive = activeFilter === item.title;

//             return (
//               <div
//                 key={index}
//                 className={`filterCard ${isActive ? "active" : ""}`}
//                 onClick={() => setActiveFilter(item.title)}
//               >
//                 <img src={item.image} className="filterImg" />
//                 <div className={`filterTitle ${isActive ? "activeTitle" : ""}`}>
//                   {item.title}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ================= GRID ================= */}
//       <div className="mainBox">
//         <div ref={gridRef} className="grid">
//           {filteredItems.map((item, index) => (
//             <div key={index} className="card">
//               <div className="cardInner">
//                 <img src={item.image} className="cardImg" />

//                 {/* OVERLAY */}
//                 <div className="overlay">
//                   <Search size={34} />
//                   <button className="viewBtn">View More</button>
//                 </div>

//                 {/* BOTTOM */}
//                 <div
//                   className="bottom"
//                   style={{ backgroundImage: `url(${item.bgImage})` }}
//                 >
//                   <div>
//                     <h3>{item.title}</h3>
//                     <p>
//                       <MapPin size={12} /> {item.location}
//                     </p>
//                   </div>

//                   <span className="tag">
//                     <Circle size={10} /> {item.category}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= STYLE ================= */}
//       <style jsx>{`
//         .wrapper {
//           width: 100%;
//         }

//         /* ===== FILTER MOBILE SCROLL ===== */
//         .filterWrapper {
//           width: 100%;
//           padding: 15px 0;
//         }

//         .filterScroll {
//           display: flex;
//           gap: 12px;
//           overflow-x: auto;
//           padding: 10px 15px;
//           scrollbar-width: none;
//         }

//         .filterScroll::-webkit-scrollbar {
//           display: none;
//         }

//         .filterCard {
//           flex: 0 0 auto;
//           text-align: center;
//           cursor: pointer;
//           padding: 10px;
//           border-radius: 12px;
//           transition: 0.3s;
//         }

//         .filterImg {
//           width: 90px;
//           height: auto;
//         }

//         .filterTitle {
//           font-size: 13px;
//           margin-top: 8px;
//           font-weight: 600;
//         }

//         .activeTitle {
//           background: #f97316;
//           color: #fff;
//           padding: 6px 10px;
//           border-radius: 8px;
//         }

//         /* ===== GRID ===== */
//         .mainBox {
//           padding: 30px 15px;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 20px;
//         }

//         .cardInner {
//           position: relative;
//           overflow: hidden;
//           border-radius: 14px;
//         }

//         .cardImg {
//           width: 100%;
//           transition: 0.4s;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(0, 0, 0, 0.8),
//             rgba(0, 0, 0, 0.2)
//           );
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           color: #fff;
//           transform: translateY(100%);
//           transition: 0.4s;
//         }

//         .cardInner:hover .overlay {
//           transform: translateY(0);
//         }

//         .cardInner:hover .cardImg {
//           transform: scale(1.05);
//         }

//         .viewBtn {
//           margin-top: 10px;
//           padding: 6px 18px;
//           background: #f97316;
//           border: none;
//           color: #fff;
//           border-radius: 8px;
//           cursor: pointer;
//         }

//         .bottom {
//           display: flex;
//           justify-content: space-between;
//           align-items: end;
//           padding: 10px;
//           background-size: cover;
//           color: #fff;
//         }

//         .bottom h3 {
//           font-size: 14px;
//         }

//         .bottom p {
//           font-size: 11px;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }

//         .tag {
//           font-size: 10px;
//           background: #f97316;
//           padding: 6px 10px;
//           border-radius: 6px;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }

//         /* ===== RESPONSIVE ===== */
//         @media (min-width: 768px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (min-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(4, 1fr);
//           }

//           .filterScroll {
//             justify-content: center;
//             overflow-x: hidden;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };




"use client";

import gsap from "gsap";
import {
  Circle,
  MapPin,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { websiteApi } from "../api/website.api";
import GalleryPopup from "./GalleryPopup";
import Loader from "@/components/common/Loader";

  const staticData = [
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

const GalleryItems = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
const [openPopup, setOpenPopup] = useState(false);

  const limit = 4;

  /* ================= FETCH API ================= */

  const fetchGallery = async (page: number, searchText: string) => {
    try {
      setLoading(true);

      const res = await websiteApi.get("/gallery/public-gallery", {
        params: {
          page,
          limit,
          search: searchText,
          status: true,
        },
      });

      console.log("get the data",res.data)

      setItems(res.data.data || []);

      setTotalPages(res.data.pagination?.totalPages || 1);
    } catch (error) {
      console.log("Gallery Error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* ================= FIRST LOAD ================= */

  useEffect(() => {
    fetchGallery(currentPage, search);
  }, [currentPage]);

  /* ================= SEARCH DEBOUNCE ================= */

  useEffect(() => {
    const delay = setTimeout(() => {
      setCurrentPage(1);
      fetchGallery(1, search);
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  /* ================= GSAP ================= */

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gridItem",
        {
          y: 80,
          opacity: 0,
          scale: 0.92,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentPage]);

  const displayItems = items.length > 0 ? items : staticData;

  return (
    <div ref={sectionRef}>

   
{
  loading && <Loader />
}


            <GalleryPopup  open={openPopup}
  data={selectedItem}
  onClose={() => setOpenPopup(false)}
/>
      <div className="main-box">
        {/* GRID */}

        <div ref={gridRef} className="responsiveGrid">
      {displayItems?.map((item, index) => (
            <div key={index} className="gridItem">
              <div className="content">
                {/* IMAGE */}
<img
  src={
    item.coverImage?.url ||
    item.images?.[0]?.url ||
    item.image ||
    "/placeholder.jpg"
  }
  alt={item.title}
  className="cardImg"
/>



                {/* OVERLAY */}

                <div className="overlay">
                  <Search size={38} />

                  <button className="overlayBtn"   onClick={() => {
    setSelectedItem(item);
    setOpenPopup(true);
  }}
>
                    View More
                  </button>
                </div>

                {/* CONTENT */}

                <div className="bottomContent">
                  {/* TITLE */}

                  <h2>{item.title}</h2>

                  {/* LOCATION */}

                  <div className="locationWrap">
                    <MapPin
                      size={12}
                      fill="#ff5b00"
                      color="#ff5b00"
                    />

                    <h4>{item.location}</h4>
                  </div>

                  {/* CATEGORY */}

                  <div className="categoryWrap">
                  <button>
  {typeof item.category === "object"
    ? item.category?.title
    : item.category}
</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}

        {items.length > 0 && (
  <div ref={gridRef} className="paginationWrap">


      
   

          <button
            className={`pageBtn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft  size={18} />
          </button>

          {/* NUMBERS */}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pageNumber ${
                currentPage === page ? "activePage" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          {/* NEXT */}

          <button
            className={`pageBtn ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowRight  size={18} />
          </button>
        </div>
)}
      </div>



      <style jsx>{`
        .main-box {
          padding: 50px 0;
        }

        /* ================= GRID ================= */

        .responsiveGrid {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(1, 1fr);

          gap: 30px;
        }

        .gridItem {
          width: 100%;
        }

      .content {
  position: relative;
  overflow: hidden;

  border-radius: 10px;

  background-color: #111;

  /* NOISE TEXTURE */

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");

  background-repeat: repeat;
  background-size: 180px;

  /* SMOOTH EFFECT */

  transition: all 0.4s ease;
}

/* OPTIONAL HOVER EFFECT */



        /* ================= IMAGE ================= */

       .cardImg {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition: transform 0.7s ease;
}

.content:hover .cardImg {
  transform: scale(1.08);
}

        .content:hover .cardImg {
          transform: scale(1.08);
        }

        /* ================= OVERLAY ================= */

    /* ================= OVERLAY ================= */

.overlay {
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.65);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 14px;

  color: white;

  /* START FROM BOTTOM */

  transform: translateY(100%);
  opacity: 0;

  transition:
    transform 0.45s ease,
    opacity 0.45s ease;
}

/* HOVER => OVERLAY UP */

.content:hover .overlay {
  transform: translateY(0%);
  opacity: 1;
}

/* LEAVE => AGAIN GO DOWN */

.content:not(:hover) .overlay {
  transform: translateY(100%);
  opacity: 0;
}

        .overlayBtn {
          border: none;

          background: #ff5b00;

          color: white;

          padding: 6px 28px;

          border-radius: 6px;

          font-size: 12px;
          font-weight: 700;

          cursor: pointer;
        }

        /* ================= BOTTOM CONTENT ================= */

        .bottomContent {
   

          width: 100%;

          padding: 10px;

          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.96),
            rgba(0, 0, 0, 0.6),
            transparent
          );
        }

        /* TITLE */

        .bottomContent h2 {
          margin: 0;

          color: white;

          font-size: 16px;
          font-weight: 700;

         line-height: 24px;
  min-height: 48px;
  max-height: 48px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

        }

        /* LOCATION */

        .locationWrap {
          display: flex;
          align-items: center;

          gap: 6px;

          margin-top: 4px;
        }

        .locationWrap h4 {
          margin: 0;

          color: rgba(255, 255, 255, 0.9);

          font-size: 10px;
          font-weight: 400;
        }

        /* CATEGORY BUTTON */

        .categoryWrap {
          width: 100%;

          display: flex;
          justify-content: flex-end;

          margin-top: 5px;
        }

        .categoryWrap button {
          border: none;

          background: #ff5b00;

          color: white;

          padding: 5px 28px;

          border-radius: 6px;

          font-size: 10px;
          font-weight: 700;

          white-space: nowrap;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .categoryWrap button:hover {
          transform: translateY(-2px);
        }

        /* ================= PAGINATION ================= */

        .paginationWrap {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-top: 55px;

          flex-wrap: wrap;
        }

        .pageBtn,
        .pageNumber {
          width: 42px;
          height: 42px;

          border: none;
          border-radius: 4px;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;
          border:1px solid black;

          // background: ;

          font-weight: 700;

          transition: 0.3s ease;
        }

        .pageBtn:hover,
        .pageNumber:hover {
          transform: translateY(-2px);
        }

        .activePage {
          background: #ff5b00;
          color: white;
          border:none
        }

        .disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* ================= TABLET ================= */

        @media (min-width: 768px) {
          .responsiveGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ================= DESKTOP ================= */

        @media (min-width: 1024px) {
          .responsiveGrid {
            grid-template-columns: repeat(4, 1fr);
          }

          .bottomContent h2 {
            font-size: 18px;
          }

          .locationWrap h4 {
            font-size: 14px;
          }

          .categoryWrap button {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryItems;