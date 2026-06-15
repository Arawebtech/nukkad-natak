export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
      }}
    >
      <div className="loader"></div>

      <style>
        {`
          .loader {
            width: 60px;
            height: 60px;
            border: 5px solid white;
            border-top: 5px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}