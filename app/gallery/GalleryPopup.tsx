"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GalleryPopup = ({ open, onClose, data }: any) => {
  const overlayRef = useRef(null);
  const boxRef = useRef(null);

  const cover =
    data?.coverImage?.url || data?.images?.[0]?.url;

  const category =
    typeof data?.category === "object"
      ? data?.category?.title
      : data?.category;

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

        {/* IMAGE */}
        <div className="imageWrap">
          <img src={cover} className="popupImg" />
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="popupContent">

          <div className="topRow">
            <h2>{data.title}</h2>
            <span className="badge">{category}</span>
          </div>

          <p className="meta">📍 {data.location}</p>
          <p className="desc">{data.desc}</p>
          <p className="metaSmall">Gallery No: {data.galleryNo}</p>

          {/* 🔥 IMPROVED IMAGE GRID */}
          <div className="imgGrid">
            {data.images?.map((img: any, i: number) => (
              <div key={i} className="imgItem">
                <img src={img.url} />
              </div>
            ))}
          </div>

          <button className="closeBtn" onClick={onClose}>
            Close
          </button>

        </div>
      </div>

      <style jsx>{`
        .popupOverlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 20px;
        }

        .popupBox {
          width: 100%;
          max-width: 950px;
          max-height: 90vh;
          background: #111;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .imageWrap {
          flex-shrink: 0;
        }

        .popupImg {
          width: 100%;
          height: 320px;
          object-fit: cover;
        }

        /* ================= SCROLL AREA ================= */
        .popupContent {
          padding: 22px;
          color: white;
          overflow-y: auto;
          max-height: calc(90vh - 320px);
        }

        .topRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .badge {
          background: #ff5b00;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .meta {
          margin-top: 8px;
          color: #bbb;
          font-size: 13px;
        }

        .metaSmall {
          margin-top: 5px;
          color: #888;
          font-size: 12px;
        }

        .desc {
          margin-top: 12px;
          font-size: 14px;
          line-height: 1.6;
          color: #ddd;
        }

        /* ================= 🔥 IMPROVED GRID ================= */
        .imgGrid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 14px;
        }

        .imgItem {
          border-radius: 10px;
          overflow: hidden;
          background: #000;
          aspect-ratio: 1 / 1;
          transition: transform 0.25s ease;
        }

        .imgItem:hover {
          transform: scale(1.05);
        }

        .imgItem img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ================= BUTTON ================= */
        .closeBtn {
          margin-top: 20px;
          width: 100%;
          padding: 10px;
          background: #ff5b00;
          border: none;
          color: white;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default GalleryPopup;