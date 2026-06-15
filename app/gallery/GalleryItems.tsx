



"use client";

import gsap from "gsap";
import {
  Circle,
  MapPin,
  Search,

  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { websiteApi } from "../api/website.api";
import GalleryPopup from "./GalleryPopup";
import Loader from "@/components/common/Loader";



const GalleryItems = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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

  const displayItems = items.length > 0 ? items : [];


  useEffect(() => {
  if (!loading && items.length === 0) {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 800);

    return () => clearTimeout(timer);
  }
}, [loading, items]);

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

       {!loading && displayItems.length === 0 ? (
  <div className="emptyState">
    <h2>No Gallery Data Found</h2>
    <p>Currently there are no gallery items available.</p>

    <button
      onClick={() => (window.location.href = "/")}
      className="homeBtn"
    >
      Go to Home
    </button>
  </div>
) : ( <div ref={gridRef} className="responsiveGrid">
      {displayItems?.map((item, index) => (
            <div key={index} className="gridItem">
              <div className="content">
              
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
        </div>)}

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