"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RiWhatsappFill } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


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
      link: "/team",
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
    overflow: "hidden",

  }}
>
        <div className="website-container-with-bg-img">
          <div
            style={{
              position: "relative",
            }}
          >
         {/* HEADER BOTTOM LINE */}
<div
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
/>
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
          {navLinks.map((item) => {
  const isActive = pathname === item.link;

  return (
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
  color: isActive ? "#EB631D" : "#ffffff",
}}
                    >
                      {item.title}

                      {/* LINE */}
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
    width: isActive ? "100%" : "",
  }}
/>
                    </Link>
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

                {/* RIGHT SIDE */}
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "28px",
                  }}
                > */}
        
              {/* <Link
  href="/contact"
  style={{
    position: "relative",
    overflow: "hidden",
    borderRadius: "999px",
    textDecoration: "none",
    backgroundImage: "url('/images/header1.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "18px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    transition: "all 0.35s ease",
    transform: "scale(1)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.06)";
    e.currentTarget.style.filter = "brightness(1.1)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.filter = "brightness(1)";
  }}
>
  <span
    style={{
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      transition: "all 0.35s ease",
    }}
  >
    <span
      style={{
        fontSize: "16px",
      }}
    >
      ✓
    </span>

    Enquiry Now
  </span>
</Link> */}

                  {/* ICON */}
                  {/* <Link
                    href="mailto:contact@nukkadnatak.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      textDecoration: "none",
                    }}
                  >
                    <Mail size={18} />
                  </Link> */}

                  {/* ICON */}
                  {/* <Link
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      textDecoration: "none",
                    }}
                  >
                    <MessageCircle size={18} />
                  </Link> */}
                {/* </div> */}
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
  {navLinks.map((item) => {
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
            borderBottom:
              "1px solid rgba(255,255,255,0.08)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#EB631D";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#ffffff";
          }}
        >
          <span>{item.title}</span>

          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "18px",
            }}
          >
            →
          </span>

          {/* LINE */}
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