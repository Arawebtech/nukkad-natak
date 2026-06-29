"use client";

import HeroBanner from "@/components/common/HeroBanner";
import ServiceContent from "@/components/services/ServiceContent";
import ServiceFaqSection from "@/components/services/ServiceFaqSection";
import "./style.css";

import type { ServiceDetail } from "@/types/service";
import FreeQuet from "@/components/common/FreeQuet";

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
  initialService,
}: {
  initialService: ServiceDetail;
}) {
  const service = initialService;
  const faqs = service?.faqSection?.faqs ?? [];

  if (!service) {
    return <ServiceError message="Service not found." />;
  }

  return (
    <div style={styles.page}>
      <HeroBanner
        backgroundImage={
          service?.heroBanner?.image ?? "/images/brand-banner1.jpeg"
        }

           backgroundImageMobile={
          service?.backgroundImageMobile?.imageUrl ??  service?.heroBanner?.image ?? "/images/brand-banner1.jpeg"
        }

        heading={service?.heroBanner?.heading || ""}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service?.heroBanner?.heading ?? "" },
        ]}
        description={
          <>
            Promote Your <span style={{ color: "#F56A28" }}>Brand</span>. Engage
            Your <span style={{ color: "#F56A28" }}>Audience</span>.
            <br />
            Create Lasting <span style={{ color: "#F56A28" }}>Impact</span>.
          </>
        }
        text={service?.heroBanner?.text ?? ""}
      />

      <div className="website-container">
        <ServiceContent service={service} />
      </div>

         <div className="website-container-with-bg-img">
        <FreeQuet />
      </div>

      {service?.faqSection && faqs.length > 0 && (
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
}

const styles = {
  page: {
    width: "100%",
    overflow: "hidden",
  },
} as const;
