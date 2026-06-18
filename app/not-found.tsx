import Link from "next/link";

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Explore our Nukkad Natak services, awareness campaigns, and street play programs across India.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Sorry, the page you are looking for does not exist or may have been
          moved. Explore our Nukkad Natak services and awareness campaign
          programs across India.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "12px 24px",
              background: "#000",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            Back to Home
          </Link>

          <Link
            href="/services"
            style={{
              padding: "12px 24px",
              border: "1px solid #000",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            Our Services
          </Link>

          <Link
            href="/enquiry"
            style={{
              padding: "12px 24px",
              border: "1px solid #000",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

