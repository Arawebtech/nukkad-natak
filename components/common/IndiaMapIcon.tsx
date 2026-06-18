// export function IndiaMapIcon() {
//   return (
//     <svg
//       width="42"
//       height="42"
//       viewBox="0 0 512 512"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M213 44L246 61L270 96L308 110L330 150L356 184L343 224L370 258L360 302L386 344L360 390L322 408L292 454L244 442L208 468L172 446L142 404L104 382L92 334L60 294L74 246L58 204L88 164L116 126L150 102L176 64L213 44Z"
//         fill="rgba(235,99,29,0.08)"
//         stroke="#EB631D"
//         strokeWidth="12"
//         strokeLinejoin="round"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }


export function IndiaMapIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main India Shape */}
      <path
        d="M52 5
           L58 10
           L60 18
           L66 22
           L70 30
           L68 38
           L74 45
           L72 54
           L78 62
           L74 70
           L66 74
           L60 82
           L50 80
           L44 86
           L36 82
           L30 74
           L22 70
           L20 62
           L14 54
           L18 46
           L16 38
           L22 30
           L28 24
           L32 18
           L38 12
           L44 8
           Z"
        stroke="#EB631D"
        strokeWidth="2.5"
        fill="rgba(235,99,29,0.06)"
        strokeLinejoin="round"
      />

      {/* North-East Separate Hint (like real map feel) */}
      <path
        d="M78 28
           L86 26
           L90 30
           L88 36
           L82 34
           Z"
        stroke="#EB631D"
        strokeWidth="2.5"
        fill="rgba(235,99,29,0.06)"
        strokeLinejoin="round"
      />
    </svg>
  );
}