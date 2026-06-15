// app/services/[slug]/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";

import HeroBanner from "@/components/common/HeroBanner";
import ServiceContent, {
  ServiceContentSkeleton,
} from "@/components/services/ServiceContent";
import ServiceFaqSection from "@/components/services/ServiceFaqSection";
import './style.css'

import { useService } from "@/hooks/useServices";
import Loading from "./loading";

// ─── Error state ─────────────────────────────────────────────────────────────

function ServiceError({ message }: { message: string }) {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        color: "#555",
      }}
    >
      <p style={{ fontSize: 18, fontWeight: 600 }}>Oops! Something went wrong.</p>
      <p style={{ fontSize: 14, color: "#888" }}>{message}</p>
      <a
        href="/services"
        style={{
          marginTop: 8,
          padding: "10px 24px",
          background: "#F56A28",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        ← Back to Services
      </a>
    </div>
  );
}



export default function ServiceDetailClient({
  slug,
}: {
  slug: string;
}) {
  const { service, loading, error } = useService(slug);





  if (error) return <ServiceError message={error} />;

   const faqs = service?.faqSection?.faqs ?? [];


   if (loading) {
  return <Loading />;
}

if (!service) {
  return null;
}


  return (
    <div style={styles.page}>


      <HeroBanner
        backgroundImage={service?.heroBanner?.image ?? "/images/brand-banner1.jpeg"}
       heading={service?.heroBanner?.heading || ""}

        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service?.name ?? "" },
        ]}
        // description={
        //   service?.heroBanner?.description ? (
        //     <span
        //       dangerouslySetInnerHTML={{ __html: service.heroBanner.description }}
        //     />
        //   ) : undefined
        // }

          description={
    <>
      Promote Your <span style={{ color: "#F56A28" }}>Brand</span>. Engage Your{" "}
      <span style={{ color: "#F56A28" }}>Audience</span>.
      <br />
      Create Lasting <span style={{ color: "#F56A28" }}>Impact</span>.
    </>
  }

        text={service?.heroBanner?.text ?? ""}
      />

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="website-container">
        {loading ? (
          <ServiceContentSkeleton />
        ) : service ? (
          <ServiceContent service={service} />
        ) : null}
      </div>

      {/* ── FAQ Section ──────────────────────────────────────── */}

{!loading && service?.faqSection && faqs.length > 0 && (
  <ServiceFaqSection faqSection={service.faqSection} />
)}

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-mobile {
            min-height: 500px !important;
            height: auto !important;
            padding-top: 90px !important;
            background-position: center !important;
          }
        }
      `}</style>
    </div>
  );
};



const styles: any = {
  page: {
    width: "100%",
    overflow: "hidden",
  },
};