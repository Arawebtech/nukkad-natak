
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const GalleryPopup = ({ open, onClose, data }: any) => {
//   const overlayRef = useRef(null);
//   const boxRef = useRef(null);

//   const [activeImage, setActiveImage] = useState("");

//   const cover = data?.coverImage?.url || data?.images?.[0]?.url;

//   const category =
//     typeof data?.category === "object"
//       ? data?.category?.title
//       : data?.category;

//   /* ================= ACTIVE IMAGE ================= */
//   useEffect(() => {
//     if (cover) {
//       setActiveImage(cover);
//     }
//   }, [cover]);

//   /* ================= LOCK SCROLL ================= */
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   /* ================= GSAP ================= */
//   useEffect(() => {
//     if (!open) return;

//     gsap.fromTo(
//       overlayRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 0.3 }
//     );

//     gsap.fromTo(
//       boxRef.current,
//       { y: 60, opacity: 0, scale: 0.95 },
//       { y: 0, opacity: 1, scale: 1, duration: 0.5 }
//     );
//   }, [open]);

//   if (!open || !data) return null;

//   return (
//     <div
//       ref={overlayRef}
//       className="popupOverlay"
//       onClick={onClose}
//     >
//       <div
//         ref={boxRef}
//         className="popupBox"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* LEFT IMAGE SECTION */}
//         <div className="gallerySection">
//           <div className="mainImageWrap">
//             <img src={activeImage} className="mainImage" />
//           </div>

//           {/* THUMBNAILS */}
//           <div className="thumbGrid">
//             {data.images?.map((img: any, i: number) => (
//               <div
//                 key={i}
//                 className={`thumbItem ${
//                   activeImage === img.url ? "activeThumb" : ""
//                 }`}
//                 onClick={() => setActiveImage(img.url)}
//               >
//                 <img src={img.url} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="popupContent">
//           <div className="topRow">
//             <h2>{data.title}</h2>
//             <span className="badge">{category}</span>
//           </div>

//           <p className="meta">📍 {data.location}</p>

//           <p className="desc">{data.desc}</p>

//           <p className="metaSmall">
//             Gallery No: {data.galleryNo}
//           </p>

//           <button className="closeBtn" onClick={onClose}>
//             Close Gallery
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .popupOverlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.82);
//           backdrop-filter: blur(8px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 999;
//           padding: 20px;
//         }

//         .popupBox {
//           width: 100%;
//           max-width: 1200px;
//           height: 90vh;
//           background: #111;
//           border-radius: 18px;
//           overflow: hidden;
//           display: grid;
//           grid-template-columns: 1.3fr 0.7fr;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
//         }

//         /* ================= LEFT ================= */

//         .gallerySection {
//           display: flex;
//           flex-direction: column;
//           background: #000;
//           padding: 18px;
//           gap: 14px;
//         }

//         .mainImageWrap {
//           flex: 1;
//           border-radius: 16px;
//           overflow: hidden;
//           background: #000;
//           min-height: 0;
//         }

//         .mainImage {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ================= THUMB GRID ================= */

//         .thumbGrid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
//           gap: 10px;
//           max-height: 160px;
//           overflow-y: auto;
//           padding-right: 2px;
//         }

//         .thumbItem {
//           border-radius: 10px;
//           overflow: hidden;
//           cursor: pointer;
//           border: 2px solid transparent;
//           transition: 0.25s ease;
//           aspect-ratio: 1 / 1;
//           background: #222;
//         }

//         .thumbItem:hover {
//           transform: scale(1.04);
//         }

//         .activeThumb {
//           border: 2px solid #ff5b00;
//           transform: scale(1.03);
//         }

//         .thumbItem img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ================= RIGHT ================= */

//         .popupContent {
//           padding: 30px;
//           overflow-y: auto;
//           color: white;
//           display: flex;
//           flex-direction: column;
//         }

//         .topRow {
//           display: flex;
//           align-items: flex-start;
//           justify-content: space-between;
//           gap: 10px;
//         }

//         .topRow h2 {
//           margin: 0;
//           font-size: 32px;
//           line-height: 1.2;
//         }

//         .badge {
//           background: #ff5b00;
//           padding: 6px 14px;
//           border-radius: 30px;
//           font-size: 13px;
//           font-weight: 600;
//           white-space: nowrap;
//         }

//         .meta {
//           margin-top: 12px;
//           color: #bbb;
//           font-size: 14px;
//         }

//         .metaSmall {
//           margin-top: 14px;
//           color: #888;
//           font-size: 13px;
//         }

//         .desc {
//           margin-top: 18px;
//           line-height: 1.9;
//           color: #ddd;
//           font-size: 15px;
//         }

//         /* ================= BUTTON ================= */

//         .closeBtn {
//           margin-top: auto;
//           width: 100%;
//           padding: 14px;
//           background: #ff5b00;
//           border: none;
//           color: white;
//           border-radius: 12px;
//           font-size: 15px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: 0.25s ease;
//         }

//         .closeBtn:hover {
//           transform: translateY(-2px);
//           opacity: 0.92;
//         }

//         /* ================= MOBILE ================= */

//         @media (max-width: 900px) {
//           .popupBox {
//             grid-template-columns: 1fr;
//             height: 95vh;
//           }

//           .gallerySection {
//             padding: 12px;
//           }

//           .mainImageWrap {
//             height: 320px;
//           }

//           .thumbGrid {
//             grid-template-columns: repeat(
//               auto-fill,
//               minmax(70px, 1fr)
//             );
//             max-height: 120px;
//           }

//           .popupContent {
//             padding: 20px;
//           }

//           .topRow h2 {
//             font-size: 24px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GalleryPopup;

"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

const GalleryPopup = ({ open, onClose, data }: any) => {
  const overlayRef = useRef(null);
  const boxRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const images = data?.images || [];

  const cover = data?.coverImage?.url || images?.[0]?.url;

  const category =
    typeof data?.category === "object"
      ? data?.category?.title
      : data?.category;

  /* ================= ACTIVE IMAGE ================= */
  useEffect(() => {
    if (cover && images?.length) {
      const coverIndex = images.findIndex(
        (img: any) => img.url === cover
      );

      setActiveIndex(coverIndex >= 0 ? coverIndex : 0);
    }
  }, [cover, images]);

  const activeImage = images?.[activeIndex]?.url;

  /* ================= NEXT / PREV ================= */

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  /* ================= KEYBOARD SUPPORT ================= */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === "ArrowRight") {
        nextSlide();
      }

      if (e.key === "ArrowLeft") {
        prevSlide();
      }

      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, images]);

  /* ================= LOCK SCROLL ================= */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* ================= GSAP ================= */

  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo(
      boxRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  }, [open]);

  if (!open || !data) return null;

  return (
    <div
      ref={overlayRef}
      className="popupOverlay"
      onClick={onClose}
    >
      <div
        ref={boxRef}
        className="popupBox"
        onClick={(e) => e.stopPropagation()}
      >

  {/* TOP CLOSE ICON */}

  <button
    className="topCloseBtn"
    onClick={onClose}
  >
    <X size={20} />
  </button>
        {/* LEFT IMAGE SECTION */}
        <div className="gallerySection">
          <div className="mainImageWrap">
            <img
              src={activeImage}
              className="mainImage"
            />

            {/* ARROWS */}
            {images.length > 1 && (
              <>
                <button
                  className="navBtn leftBtn"
                  onClick={prevSlide}
                >
                  ←
                </button>

                <button
                  className="navBtn rightBtn"
                  onClick={nextSlide}
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* THUMBNAILS */}
          <div className="thumbGrid">
            {images?.map((img: any, i: number) => (
              <div
                key={i}
                className={`thumbItem ${
                  activeIndex === i
                    ? "activeThumb"
                    : ""
                }`}
                onClick={() => setActiveIndex(i)}
              >
                <img src={img.url} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="popupContent">
          <div className="topRow">
            <h2>{data.title}</h2>
            <span className="badge">{category}</span>
          </div>

          <p className="meta">📍 {data.location}</p>

          <p className="desc">{data.desc}</p>

          <p className="metaSmall">
            Gallery No: {data.galleryNo}
          </p>

          <button
            className="closeBtn"
            onClick={onClose}
          >
            Close Gallery
          </button>
        </div>
      </div>

      <style jsx>{`
        .popupOverlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 20px;
        }

        .popupBox {
          width: 100%;
          max-width: 1200px;
position: relative;
          /* FIX CUTTING ISSUE */
          height: min(90vh, 920px);

          background: #111;
          border-radius: 18px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .topCloseBtn {
  position: absolute;

  top: 1px;
  right: 1px;

  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.65);

  backdrop-filter: blur(8px);

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  z-index: 50;

  transition: 0.25s ease;
}

.topCloseBtn:hover {
  background: #ff5b00;

  transform: rotate(90deg) scale(1.05);
}
        /* ================= LEFT ================= */

        .gallerySection {
          display: flex;
          flex-direction: column;
          background: #000;
          padding: 18px;
          gap: 14px;
          min-height: 0;
        }

        .mainImageWrap {
          flex: 1;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          min-height: 0;
          position: relative;
        }

        .mainImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ================= ARROWS ================= */

        .navBtn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          color: white;
          font-size: 24px;
          cursor: pointer;
          z-index: 5;
          transition: 0.25s ease;
        }

        .navBtn:hover {
          background: #ff5b00;
          transform: translateY(-50%) scale(1.08);
        }

        .leftBtn {
          left: 14px;
        }

        .rightBtn {
          right: 14px;
        }

        /* ================= THUMB GRID ================= */

        .thumbGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(90px, 1fr)
          );
          gap: 10px;
          max-height: 160px;
          overflow-y: auto;
          padding-right: 2px;
        }

        .thumbItem {
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: 0.25s ease;
          aspect-ratio: 1 / 1;
          background: #222;
        }

        .thumbItem:hover {
          transform: scale(1.04);
        }

        .activeThumb {
          border: 2px solid #ff5b00;
          transform: scale(1.03);
        }

        .thumbItem img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ================= RIGHT ================= */

        .popupContent {
          padding: 30px;
          overflow-y: auto;
          color: white;
          display: flex;
          flex-direction: column;
        }

        .topRow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .topRow h2 {
          margin: 0;
          font-size: 32px;
          line-height: 1.2;
        }

        .badge {
          background: #ff5b00;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }

        .meta {
          margin-top: 12px;
          color: #bbb;
          font-size: 14px;
        }

        .metaSmall {
          margin-top: 14px;
          color: #888;
          font-size: 13px;
        }

        .desc {
          margin-top: 18px;
          line-height: 1.9;
          color: #ddd;
          font-size: 15px;
        }

        /* ================= BUTTON ================= */

        .closeBtn {
          margin-top: auto;

          /* FIX CUT ISSUE */
          margin-bottom: 4px;

          width: 100%;
          padding: 14px;
          background: #ff5b00;
          border: none;
          color: white;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .closeBtn:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 900px) {
          .popupBox {
            grid-template-columns: 1fr;
            height: 95vh;
          }

          .gallerySection {
            padding: 12px;
          }

          .mainImageWrap {
            height: 320px;
          }

          .thumbGrid {
            grid-template-columns: repeat(
              auto-fill,
              minmax(70px, 1fr)
            );
            max-height: 160px;
          }

          .popupContent {
            padding: 20px;
          }

          .topRow h2 {
            font-size: 24px;
          }

          .navBtn {
            width: 42px;
            height: 42px;
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPopup;