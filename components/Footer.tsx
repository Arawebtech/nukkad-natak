"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {



    const quickLinks = [
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
      title: "Inquiry",
      link: "/enquiry",
    },
    // {
    //   title: "Brand Promotion",
    //   link: "/brand",
    // },
  ];
  const services = [
    "Government Campaigns",
    "Corporate Awareness",
    "CSR & College Activations",
    "Election Awareness",
    "And Many More...",
  ];

  const socials = [
    {
      icon: <TiSocialFacebook size={15} />,
      link: "https://www.facebook.com/nukkadnatakgroup/",
    },
    {
      icon: <FaLinkedinIn size={15} />,
      link: "https://www.linkedin.com/company/nukkadnatak-group/",
    },
 

     {
      icon: <AiFillInstagram  size={15} />,
      link: "https://www.instagram.com/nukkadnatakcom/",
    },

    {
      icon: <RiWhatsappFill size={15} />,
      link: " https://wa.me/919310996542",
    },
  ];

  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor:"#1a1008",
        backgroundImage: "url('/images/download.svg')",
  
      }}
    >
      {/* TOP GLOW LINE */}
{/* <div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "10px",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0), rgba(235,99,29,1), rgba(255,255,255,0))",
    boxShadow: "0 0 12px rgba(235,99,29,0.7)",
    zIndex: 20,
  }}
/> */}
{/* TOP LINE WITH BACKGROUND IMAGE */}
<div
  style={{
    position: "absolute",
    top: -5,
    left: 0,
    width: "100%",
    height: "12px",
    backgroundImage: "url('/images/footerline.png')",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "center",
    backgroundSize: "contain",
    zIndex: 20,
    opacity: 0.95,
  }}
/>
      <div
      className="website-container-with-bg-img main-padding-top"
        style={{
          position: "relative",
          zIndex: 10,
        //   width: "100%",
        //   maxWidth: "1400px",
        //   marginInline: "auto",
        //   paddingTop: "60px",
        //   paddingBottom: "60px",
        //   paddingLeft: "24px",
        //   paddingRight: "24px",
        }}
      >
        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "30px",
            paddingBottom: "5px",
          }}
        >
         
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Image
              // src="/main-logo1.png"
              src="/images/last-logo2.png"
              alt="Logo"
              width={150}
              height={80}
              style={{
                objectFit: "contain",
                height: "auto",
              }}
            />

            <p
              style={{
                color: "white",
                fontSize: "12px",
                lineHeight: "24px",
                maxWidth: "450px",
              }}
            >
            Creating awareness campaigns, CSR initiatives, and public engagement activities across India for government organizations, educational institutions, NGOs, and brands.
            </p>

            {/* CONTACT */}
      
          </div>

          {/* QUICK LINKS */}
          <div>
<h2
  style={{
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "20px",
    position: "relative",
    display: "inline-block",
    paddingBottom: "5px",
  }}
>
  Quick Links

  <span
    style={{
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "60%",
      height: "3px",
      background: "#EB631D",
      borderRadius: "5px",
    }}
  />
</h2>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {quickLinks.map((item,index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    style={{
                      position: "relative",
                      display: "inline-block",
                      width: "fit-content",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const target =
                        e.currentTarget as HTMLElement;

                      target.style.color = "#EB631D";

                      const line = target.querySelector(
                        ".footer-line"
                      ) as HTMLElement;

                      if (line) {
                        line.style.width = "100%";
                      }
                    }}
                    onMouseLeave={(e) => {
                      const target =
                        e.currentTarget as HTMLElement;

                      target.style.color =
                        "white";

                      const line = target.querySelector(
                        ".footer-line"
                      ) as HTMLElement;

                      if (line) {
                        line.style.width = "0";
                      }
                    }}
                  >
                    {item.title}

                    <span
                      className="footer-line"
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: "-5px",
                        width: "0",
                        height: "2px",
                        borderRadius: "999px",
                        background: "#EB631D",
                        transition: "all 0.5s ease",
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
       <h2
  style={{
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "20px",
    position: "relative",
    display: "inline-block",
    paddingBottom: "10px",
  }}
>
  Our Services

  <span
    style={{
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "60%",
      height: "3px",
      background: "#EB631D",
      borderRadius: "5px",
    }}
  />
</h2>

              <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {services.map((item,index) => (
                           <li key={index}>
                  <Link
                    href=""
                    style={{
                      position: "relative",
                      display: "inline-block",
                      width: "fit-content",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const target =
                        e.currentTarget as HTMLElement;

                      target.style.color = "#EB631D";

                      const line = target.querySelector(
                        ".footer-line"
                      ) as HTMLElement;

                      if (line) {
                        line.style.width = "100%";
                      }
                    }}
                    onMouseLeave={(e) => {
                      const target =
                        e.currentTarget as HTMLElement;

                      target.style.color =
                        "white";

                      const line = target.querySelector(
                        ".footer-line"
                      ) as HTMLElement;

                      if (line) {
                        line.style.width = "0";
                      }
                    }}
                  >

           
       
                
                  {item}

                  <span
                    className="service-line"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "-5px",
                      width: "0",
                      height: "2px",
                      borderRadius: "999px",
                      background: "#EB631D",
                      transition: "all 0.5s ease",
                    }}
                  />
                         </Link>
                </li>

              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
       <h2
  style={{
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "20px",
    position: "relative",
    display: "inline-block",
    paddingBottom: "5px",
  }}
>
  Follow Us

  <span
    style={{
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "60%",
      height: "3px",
      background: "#EB631D",
      borderRadius: "5px",
    }}
  />
</h2>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    padding:"0px 0px 30px 0px"
  }}
>

  <a
    href="tel:+919310996542"
    style={{
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: "25px",
        height: "15px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexShrink: 0,
      }}
    >
      <Phone
        size={18}
        style={{
          color: "#EB631D",
        }}
      />
    </div>

    <span
      style={{
        color: "rgba(255,255,255,0.8)",
        fontSize: "12px",
      }}
    >
      +91 9310996542
    </span>
  </a>


  <a
    href="mailto:contact@nukkadnatak.com"
    style={{
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: "26px",
        height: "44px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexShrink: 0,
      }}
    >
      <Mail
        size={18}
        style={{
          color: "#EB631D",
        }}
      />
    </div>

    <span
      style={{
        color: "rgba(255,255,255,0.8)",
        fontSize: "12px",
        wordBreak: "break-all",
      }}
    >
      contact@nukkadnatak.com
    </span>
  </a>


  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      marginTop: "6px",
    }}
  >
    <div
      style={{
        width: "26px",
    
        display: "flex",
        // alignItems: "flex-start",
        // justifyContent: "flex-start",
      }}
    >
      <MapPin
        size={17}
        style={{
          color: "#EB631D",
          marginTop: "2px",
        }}
      />
    </div>

    <span
      style={{
        color: "rgba(255,255,255,0.8)",
        fontSize: "12px",
        lineHeight: "18px",
      }}
    >
   
      Office No 11, 1st Floor, Pocket 13, Sector 24, Rohini, New Delhi, 110085
    </span>
  </div>
</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {socials.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                      target="_blank"
    rel="noopener noreferrer"
                  style={{
                    position: "relative",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    transition: "all 0.5s ease",
                    background:"white" ,
                    color: "#EB631D",
                    backdropFilter: "blur(10px)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const target =
                      e.currentTarget as HTMLElement;

                    target.style.transform =
                      "translateY(-5px)";
                    target.style.background = "#EB631D";
                    target.style.color = "#ffffff";
                    target.style.border =
                      "1px solid #EB631D";
                  }}
                  onMouseLeave={(e) => {
                    const target =
                      e.currentTarget as HTMLElement;

                    target.style.transform =
                      "translateY(0px)";
                    target.style.background =
                      "rgba(255,255,255,0.05)";
                    target.style.color = "#EB631D";
                    target.style.border =
                      "1px solid rgba(255,255,255,0.1)";
                  }}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          style={{
          
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingBottom:"20px",
            paddingTop:"20px"
          }}
        >
          {/* <p
            style={{
              fontSize: "12px",
              color: "white",
              lineHeight: "30px",
            }}
          >
            © 2025 VI Events (nukkadnatak.com). All Rights Reserved.
          </p> */}
          <p
  style={{
    fontSize: "12px",
    color: "white",
    lineHeight: "30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
  }}
>
  © {new Date().getFullYear()} (
  <a
    href="https://nukkadnatak.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#fff", textDecoration: "underline" }}
  >
    nukkadnatak.com
  </a>
  ). All Rights Reserved.
  <span>Developed & Designed by</span>
  <a
    href="https://arawebtechnologies.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#fff", textDecoration: "underline" }}
  >
    Ara Web Technologies
  </a>
</p>
        </div>
      </div>
    </footer>
  );
}