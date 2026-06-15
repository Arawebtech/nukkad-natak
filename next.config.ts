// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   poweredByHeader: false,

//   async headers() {
//     return [
//       {
//         source: "/:all*(js|css)",
//         headers: [
//           {
//             key: "Cache-Control",
//             value:
//               "no-store, no-cache, must-revalidate, proxy-revalidate",
//           },
//           {
//             key: "Pragma",
//             value: "no-cache",
//           },
//           {
//             key: "Expires",
//             value: "0",
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:all*(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;