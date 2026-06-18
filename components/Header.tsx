"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { RiWhatsappFill } from "react-icons/ri";
import { useServices } from "@/hooks/useServices";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const { services } = useServices();

  const isServicesActive = pathname.startsWith("/services");

  const handleServicesMouseEnter = () => {
    if (servicesHoverTimeout.current) clearTimeout(servicesHoverTimeout.current);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesHoverTimeout.current = setTimeout(() => setServicesOpen(false), 120);
  };


   const navLinks = [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "Join Our Team",
      link: "/join-our-team",
    },

        {
      title: "Enquire Now",
      link: "/enquiry",
    },
  ];
 
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
  <header
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 999,
    overflow: "visible",

  }}
>
        <div className="website-container-with-bg-img">
          <div
            style={{
              position: "relative",
            }}
          >
         {/* HEADER BOTTOM LINE */}
{/* <div
  style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0), rgba(235,99,29,0.9), rgba(255,255,255,0))",
    opacity: 0.5,
    boxShadow: "0 0 12px rgba(235,99,29,0.7)",
    zIndex: 30,
  }}
/> */}
            {/* MAIN */}
            <div
              style={{
                position: "relative",
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                gap: "20px",
              }}
            >
              {/* LOGO */}
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  // src="/main-logo1.png"
                  src="/images/last-logo2.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  style={{
                    width: "130px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>

              {/* DESKTOP RIGHT */}
              <div
                className="
                hidden
                lg:flex
                items-center
                gap-10
                "
              >
                {/* NAV LINKS */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    
                    gap: "40px",
                  }}
                >
    {navLinks.map((item, index) => {
  const isActive = pathname === item.link;

  return (
       <>
  <Link
    key={item.title}
    href={item.link}
    className="
      group
      relative
      inline-block
      text-[15px]
      font-medium
      transition-all
      duration-300
      hover:text-[#EB631D]
    "
    style={{
      color: pathname === item.link ? "#EB631D" : "#ffffff",
    }}
  >
    {item.title}

    <span
      className="
        absolute
        left-0
        -bottom-2
        h-[2px]
        w-0
        rounded-full
        bg-[#EB631D]
        transition-all
        duration-500
        ease-in-out
        group-hover:w-full
      "
      style={{
        width: pathname === item.link ? "100%" : "",
      }}
    />
  </Link>

  {/* Services dropdown — inserted after "About Us" (index 0) */}
  {index === 0 && (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleServicesMouseEnter}
      onMouseLeave={handleServicesMouseLeave}
    >
      {/* Trigger button */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "15px",
          fontWeight: 500,
          color: isServicesActive ? "#EB631D" : "#ffffff",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          transition: "color 0.3s ease",
          position: "relative",
        }}
      >
        Services
        <ChevronDown
          size={15}
          style={{
            transition: "transform 0.3s ease",
            transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
        {/* Active underline */}
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: "-8px",
            height: "2px",
            width: isServicesActive ? "100%" : "0%",
            borderRadius: "999px",
            background: "#EB631D",
            transition: "width 0.5s ease-in-out",
          }}
        />
      </button>

      {/* Dropdown panel — rendered in a portal-like fixed wrapper to avoid overflow clipping */}
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 18px)",
          left: 0,
          minWidth: "260px",
          background: "linear-gradient(145deg, #111 0%, #0d0d0d 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "14px",
          zIndex: 999999,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(235,99,29,0.08)",
          opacity: servicesOpen ? 1 : 0,
          visibility: servicesOpen ? "visible" : "hidden",
          transform: servicesOpen ? "translateY(0px)" : "translateY(12px)",
          transition: "opacity 0.28s ease, transform 0.28s ease, visibility 0.28s ease",
          // Scrollable when many services
          maxHeight: "360px",
          overflowY: "auto",
          // Custom scrollbar
          scrollbarWidth: "thin",
          scrollbarColor: "#EB631D33 transparent",
        } as React.CSSProperties}
      >
        {/* Top accent line */}
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #EB631D, rgba(235,99,29,0.2))",
            flexShrink: 0,
          }}
        />
        {services.length === 0 ? (
          <div style={{ padding: "18px", color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            No services found
          </div>
        ) : (
          services.map((service, i) => (
            <Link
              key={service._id}
              href={`/services/${service.slug}`}
              onClick={() => setServicesOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "13px 18px",
                color: pathname === `/services/${service.slug}` ? "#EB631D" : "#e0e0e0",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 450,
                borderBottom: i < services.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                background:
                  pathname === `/services/${service.slug}`
                    ? "rgba(235,99,29,0.08)"
                    : "transparent",
                transition: "background 0.2s ease, color 0.2s ease, padding-left 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(235,99,29,0.12)";
                e.currentTarget.style.color = "#EB631D";
                e.currentTarget.style.paddingLeft = "22px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  pathname === `/services/${service.slug}`
                    ? "rgba(235,99,29,0.08)"
                    : "transparent";
                e.currentTarget.style.color =
                  pathname === `/services/${service.slug}` ? "#EB631D" : "#e0e0e0";
                e.currentTarget.style.paddingLeft = "18px";
              }}
            >
              {/* <span>{service.name}</span> */}
              <span>{service.heroBanner?.heading}</span>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>→</span>
            </Link>
          ))
        )}
      </div>
    </div>
  )}
</>
         );
})}
                </div>

                <Link
  href="https://wa.me/919310996542"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "transparent",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: "6px",
    border :"1px solid gray",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
  <RiWhatsappFill color="#25D366" size={20} />
  Chat on WhatsApp
</Link>


              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(true)}
                className="
                flex
                lg:hidden
                items-center
                justify-center
                w-[46px]
                h-[46px]
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                text-white
                transition-all
                duration-300
                hover:bg-[#EB631D]
                "
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
        fixed
        inset-0
        z-[99]
        bg-black/60
        backdrop-blur-sm
        transition-all
        duration-500
        ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
        `}
      />

   <div
   className="main-bg-image"
style={{
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 100000,
  height: "100vh",
  width: "88%",
  maxWidth: "420px",
  overflow: "hidden",
  textDecoration: "none",

  backgroundColor: "#000000",

  backgroundImage:
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,

  backgroundRepeat: "repeat",

  borderLeft: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 0 60px rgba(0,0,0,0.6)",
  transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",

  transform: menuOpen
    ? "translateX(0)"
    : "translateX(100%)",

  opacity: menuOpen ? 1 : 0,
}}
>
  {/* BACKGROUND EFFECT */}
  {/* <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at top right, rgba(235,99,29,0.15), transparent 40%)",
      pointerEvents: "none",
    }}
  /> */}

  {/* TOP */}
  <div
    style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(14px)",
    }}
  >
    {/* <Image
      src="/main-logo1.png"
      alt="Logo"
      width={145}
      height={55}
      style={{
        width: "90px",
        height: "auto",
      }}
    /> */}
    <Link href="/" onClick={() => setMenuOpen(false)}>
  <Image
    // src="/main-logo1.png"
    src="/images/last-logo2.png"
    alt="Logo"
    width={145}
    height={55}
    style={{
      width: "90px",
      height: "auto",
      cursor: "pointer",
    }}
  />
</Link>

    <button
      onClick={() => setMenuOpen(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.04)",
        color: "#ffffff",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#EB631D";
        e.currentTarget.style.borderColor = "#EB631D";
        e.currentTarget.style.transform = "rotate(90deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "rgba(255,255,255,0.04)";
        e.currentTarget.style.borderColor =
          "rgba(255,255,255,0.1)";
        e.currentTarget.style.transform = "rotate(0deg)";
      }}
    >
      <X size={19} />
    </button>
  </div>

  {/* CONTENT */}
  <div
    style={{
      position: "relative",
      height: "calc(100vh - 88px)",
      overflowY: "auto",
      padding: "0px 24px 35px 24px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    {/* LINKS */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
  {/* "About Us" — first nav link */}
  {navLinks.slice(0, 1).map((item) => {
    const isActive = pathname === item.link;
    return (
      <Link
        key={item.title}
        href={item.link}
        onClick={() => setMenuOpen(false)}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
          color: isActive ? "#EB631D" : "#ffffff",
          fontSize: "16px",
          fontWeight: 500,
          textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "#EB631D"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#EB631D" : "#ffffff"; }}
      >
        <span>{item.title}</span>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>→</span>
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "2px",
            background: "#EB631D",
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s ease",
          }}
          className="menu-line"
        />
      </Link>
    );
  })}

  {/* MOBILE SERVICES ACCORDION */}
  <div
    style={{
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    {/* Accordion trigger */}
    <button
      onClick={() => setMobileServicesOpen((prev) => !prev)}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: isServicesActive ? "#EB631D" : "#ffffff",
        fontSize: "16px",
        fontWeight: 500,
        transition: "color 0.3s ease",
      }}
    >
      <span>Services</span>
      <ChevronDown
        size={18}
        style={{
          color: "rgba(255,255,255,0.5)",
          transition: "transform 0.35s ease",
          transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </button>

    {/* Accordion content — animated height via max-height trick */}
    <div
      style={{
        maxHeight: mobileServicesOpen ? "280px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        style={{
          overflowY: "auto",
          maxHeight: "280px",
          paddingBottom: "12px",
          scrollbarWidth: "thin",
          scrollbarColor: "#EB631D33 transparent",
        } as React.CSSProperties}
      >
        {services.length === 0 ? (
          <div style={{ padding: "10px 0", color: "rgba(255,255,255,0.35)", fontSize: "14px" }}>
            No services available
          </div>
        ) : (
          services.map((service) => {
            const isServiceActive = pathname === `/services/${service.slug}`;
            return (
              <Link
                key={service._id}
                href={`/services/${service.slug}`}
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "13px 0 13px 16px",
                  color: isServiceActive ? "#EB631D" : "rgba(255,255,255,0.75)",
                  fontSize: "14px",
                  fontWeight: 450,
                  textDecoration: "none",
                  borderLeft: `2px solid ${isServiceActive ? "#EB631D" : "rgba(255,255,255,0.1)"}`,
                  marginBottom: "2px",
                  borderRadius: "0 6px 6px 0",
                  background: isServiceActive ? "rgba(235,99,29,0.06)" : "transparent",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#EB631D";
                  e.currentTarget.style.borderLeftColor = "#EB631D";
                  e.currentTarget.style.background = "rgba(235,99,29,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isServiceActive ? "#EB631D" : "rgba(255,255,255,0.75)";
                  e.currentTarget.style.borderLeftColor = isServiceActive ? "#EB631D" : "rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = isServiceActive ? "rgba(235,99,29,0.06)" : "transparent";
                }}
              >
                <span>{service.name}</span>
                <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", paddingRight: "4px" }}>→</span>
              </Link>
            );
          })
        )}
      </div>
    </div>
  </div>

  {/* Remaining nav links (Gallery, Join Our Team, Enquire Now) */}
  {navLinks.slice(1).map((item) => {
    const isActive = pathname === item.link;
    return (
      <Link
        key={item.title}
        href={item.link}
        onClick={() => setMenuOpen(false)}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
          color: isActive ? "#EB631D" : "#ffffff",
          fontSize: "16px",
          fontWeight: 500,
          textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "#EB631D"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#EB631D" : "#ffffff"; }}
      >
        <span>{item.title}</span>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>→</span>
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "2px",
            background: "#EB631D",
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s ease",
          }}
          className="menu-line"
        />
      </Link>
    );
  })}
    </div>

    {/* BOTTOM */}
    <div
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* BUTTON */}
      {/* <Link
        href="/contact"
        onClick={() => setMenuOpen(false)}
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          borderRadius: "999px",
             textDecoration: "none",
                      backgroundImage: "url('/images/header1.png')",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
          padding: "16px 24px",
          color: "#ffffff",
      
          fontSize: "15px",
          fontWeight: 600,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        ✓ Enquiry Now
      </Link> */}

      {/* ICONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Link
          href="mailto:contact@nukkadnatak.com"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "#ffffff",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#EB631D";
            e.currentTarget.style.borderColor = "#EB631D";
            e.currentTarget.style.transform =
              "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor =
              "rgba(255,255,255,0.1)";
            e.currentTarget.style.transform =
              "translateY(0)";
          }}
        >
          <Mail size={18} />
        </Link>

                   {/* <Link
  href="https://wa.me/919310996542"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "#ffffff",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#EB631D";
            e.currentTarget.style.borderColor = "#EB631D";
            e.currentTarget.style.transform =
              "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor =
              "rgba(255,255,255,0.1)";
            e.currentTarget.style.transform =
              "translateY(0)";
          }}
        >
          <MessageCircle size={18} />
        </Link> */}
                        <Link
  href="https://wa.me/919310996542"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "transparent",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: "6px",
    border :"1px solid gray",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
  <RiWhatsappFill color="#25D366" size={20} />
  Chat on WhatsApp
</Link>
      </div>
    </div>
  </div>
</div>
    </>
  );
}