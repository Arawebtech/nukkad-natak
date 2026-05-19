"use client";

import React from "react";

type MessageProps = {
  type?: "success" | "error";
  message: string;
  onClose?: () => void;
};

const Message: React.FC<MessageProps> = ({
  type = "success",
  message,
  onClose,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "14px 18px",
        borderRadius: "10px",
        color: "#fff",
        minWidth: "250px",
        zIndex: 9999,
        background:
          type === "success" ? "var(--color-primary)" : "#d93025",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span>{message}</span>

      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Message;