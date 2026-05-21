// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const GalleryPopup = ({ open, onClose, data }: any) => {
//   const overlayRef = useRef(null);
//   const boxRef = useRef(null);

//   const cover =
//     data?.coverImage?.url || data?.images?.[0]?.url;

//   const category =
//     typeof data?.category === "object"
//       ? data?.category?.title
//       : data?.category;

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

//         {/* IMAGE */}
//         <div className="imageWrap">
//           <img src={cover} className="popupImg" />
//         </div>

//         {/* SCROLLABLE CONTENT */}
//         <div className="popupContent">

//           <div className="topRow">
//             <h2>{data.title}</h2>
//             <span className="badge">{category}</span>
//           </div>

//           <p className="meta">📍 {data.location}</p>
//           <p className="desc">{data.desc}</p>
//           <p className="metaSmall">Gallery No: {data.galleryNo}</p>

//           {/* 🔥 IMPROVED IMAGE GRID */}
//           <div className="imgGrid">
//             {data.images?.map((img: any, i: number) => (
//               <div key={i} className="imgItem">
//                 <img src={img.url} />
//               </div>
//             ))}
//           </div>

//           <button className="closeBtn" onClick={onClose}>
//             Close
//           </button>

//         </div>
//       </div>

//       <style jsx>{`
//         .popupOverlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.75);
//           backdrop-filter: blur(6px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 999;
//           padding: 20px;
//         }

//         .popupBox {
//           width: 100%;
//           max-width: 950px;
//           max-height: 90vh;
//           background: #111;
//           border-radius: 14px;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//         }

//         .imageWrap {
//           flex-shrink: 0;
//         }

//         .popupImg {
//           width: 100%;
//           height: 320px;
//           object-fit: cover;
//         }

//         /* ================= SCROLL AREA ================= */
//         .popupContent {
//           padding: 22px;
//           color: white;
//           overflow-y: auto;
//           max-height: calc(90vh - 320px);
//         }

//         .topRow {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .badge {
//           background: #ff5b00;
//           padding: 4px 10px;
//           border-radius: 20px;
//         }

//         .meta {
//           margin-top: 8px;
//           color: #bbb;
//           font-size: 13px;
//         }

//         .metaSmall {
//           margin-top: 5px;
//           color: #888;
//           font-size: 12px;
//         }

//         .desc {
//           margin-top: 12px;
//           font-size: 14px;
//           line-height: 1.6;
//           color: #ddd;
//         }

//         /* ================= 🔥 IMPROVED GRID ================= */
//         .imgGrid {
//           margin-top: 18px;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
//           gap: 14px;
//         }

//         .imgItem {
//           border-radius: 10px;
//           overflow: hidden;
//           background: #000;
//           aspect-ratio: 1 / 1;
//           transition: transform 0.25s ease;
//         }

//         .imgItem:hover {
//           transform: scale(1.05);
//         }

//         .imgItem img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ================= BUTTON ================= */
//         .closeBtn {
//           margin-top: 20px;
//           width: 100%;
//           padding: 10px;
//           background: #ff5b00;
//           border: none;
//           color: white;
//           border-radius: 8px;
//           font-weight: 600;
//           cursor: pointer;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GalleryPopup;


"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const GalleryPopup = ({ open, onClose, data }: any) => {
  const overlayRef = useRef(null);
  const boxRef = useRef(null);

  const [activeImage, setActiveImage] = useState("");

  const cover = data?.coverImage?.url || data?.images?.[0]?.url;

  const category =
    typeof data?.category === "object"
      ? data?.category?.title
      : data?.category;

  /* ================= ACTIVE IMAGE ================= */
  useEffect(() => {
    if (cover) {
      setActiveImage(cover);
    }
  }, [cover]);

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
        {/* LEFT IMAGE SECTION */}
        <div className="gallerySection">
          <div className="mainImageWrap">
            <img src={activeImage} className="mainImage" />
          </div>

          {/* THUMBNAILS */}
          <div className="thumbGrid">
            {data.images?.map((img: any, i: number) => (
              <div
                key={i}
                className={`thumbItem ${
                  activeImage === img.url ? "activeThumb" : ""
                }`}
                onClick={() => setActiveImage(img.url)}
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

          <button className="closeBtn" onClick={onClose}>
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
          height: 90vh;
          background: #111;
          border-radius: 18px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        /* ================= LEFT ================= */

        .gallerySection {
          display: flex;
          flex-direction: column;
          background: #000;
          padding: 18px;
          gap: 14px;
        }

        .mainImageWrap {
          flex: 1;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          min-height: 0;
        }

        .mainImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ================= THUMB GRID ================= */

        .thumbGrid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
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
            max-height: 120px;
          }

          .popupContent {
            padding: 20px;
          }

          .topRow h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPopup;