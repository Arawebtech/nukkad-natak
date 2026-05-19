"use client";

import React from "react";

interface LoaderProps {
  show?: boolean;
}

const Loader = ({
  show = true,
}: LoaderProps) => {
  if (!show) return null;

  return (
    <>
      <div className="loaderOverlay">
        <div className="loaderBox">
          <div className="spinner"></div>

          <h3>Loading...</h3>
        </div>
      </div>

      <style jsx>{`
        .loaderOverlay {
          position: fixed;

          inset: 0;

          width: 100%;
          height: 100vh;

          background: rgba(0, 0, 0, 0.55);

          backdrop-filter: blur(6px);

          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          animation: fadeIn 0.35s ease;
        }

        .loaderBox {
          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 14px;

          padding: 30px 40px;

          border-radius: 18px;

          background: rgba(255, 255, 255, 0.08);

          backdrop-filter: blur(12px);

          border: 1px solid rgba(255, 255, 255, 0.1);

          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
        }

        .spinner {
          width: 58px;
          height: 58px;

          border-radius: 50%;

          border: 4px solid
            rgba(255, 255, 255, 0.15);

          border-top: 4px solid #ff5b00;

          animation: spin 0.8s linear infinite;
        }

        .loaderBox h3 {
          margin: 0;

          color: white;

          font-size: 16px;
          font-weight: 600;

          letter-spacing: 0.5px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Loader;