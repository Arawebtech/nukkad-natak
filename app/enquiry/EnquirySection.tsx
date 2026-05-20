
"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BriefcaseBusiness,
  GraduationCap,
  Upload,
  UserRound,
  Drama,
  Lock,
  ChevronDown,
  Send,
  ShieldCheck,
  Target,
  Lightbulb,
  Users,
  PhoneCall,
} from "lucide-react";

import Heading2 from "@/components/common/Heading2";
import { websiteApi } from "../api/website.api";

gsap.registerPlugin(ScrollTrigger);

const EnquirySection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
    const leftItemsRef = useRef<
      (HTMLDivElement | null)[]
    >([]);

    const leftData = [
    {
      icon: <Users size={40} />,
      title: "Experienced Team",
      desc: "Skilled artists, directors & campaign managers with years of expertise.",
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Impactful Approach",
      desc: "Creative, engaging & result-driven performances.",
    },
    {
      icon: <Target size={40} />,
      title: "Pan India Reach",
      desc: "Delivering campaigns across cities, towns & rural areas.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Trusted by Leaders",
      desc: "Partnered with NDMC, SDMC, BSES & many leading organizations.",
    },
       {
      icon: <ShieldCheck size={40} />,
      title: "Trusted by Leaders",
      desc: "Partnered with NDMC, SDMC, BSES & many leading organizations.",
    },
       {
      icon: <ShieldCheck size={40} />,
      title: "Trusted by Leaders",
      desc: "Partnered with NDMC, SDMC, BSES & many leading organizations.",
    },
  ];


  const [form, setForm] = React.useState({
  fullName: "",
  designation: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  inquiryType: "",
  objective: "",
  locations: "",
  duration: "",
  audience: "",
  budget: "",
  requirements: "",
  terms: false,
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm((prev) => ({
    ...prev,
    terms: e.target.checked,
  }));
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
   const result =  await websiteApi.post("/enquiry/create", form);

   if(result.data.success) {
     alert("Submitted Successfully");

     
     
     setForm({
       fullName: "",
      designation: "",
      company: "",
      email: "",
      phone: "",
      city: "",
      inquiryType: "",
      objective: "",
      locations: "",
      duration: "",
      audience: "",
      budget: "",
      requirements: "",
      terms: false,
    });
  }
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    const ctx = gsap.context(() => {

      // LEFT + RIGHT SECTION
      gsap.from(".fade-up", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

          leftItemsRef.current.forEach(
        (item, index) => {
          if (!item) return;

          gsap.from(item, {
            opacity: 0,
            x: -80,
            duration: 1,
            delay: index * 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          });
        }
      );
      // IMAGE REVEAL
      gsap.from(".image-reveal", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".image-reveal",
          start: "top 85%",
        },
      });

      // IMAGE SCALE
      gsap.from(".image-scale", {
        scale: 1.2,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-scale",
          start: "top 85%",
        },
      });

      // FORM FIELDS
      gsap.from(".form-animate", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".form-wrapper",
          start: "top 85%",
        },
      });

      // ICONS
      gsap.from(".icon-pop", {
        opacity: 0,
        scale: 0.7,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".icon-wrapper",
          start: "top 85%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const inputStyle = {
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        marginTop: "32px",
        background: "rgba(239, 233, 226, 0.35)",
      }}
    >

      <div
        className="mx-auto "
        style={{
          // paddingTop: "32px",
          // paddingBottom: "32px",
  
          borderColor: "black",
          borderRadius: "12px 12px 0 0",
        }}
      >

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="fade-up flex flex-col gap-10">

            {/* Vision */}
            <div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">

                <div className="">

                 <div className="" style={{
                  padding:"20px 20px 40px 0px"
                 }}>
                   <Heading2
                    title="Let's Plan"
                    color="black"
                    title2={true}
                    title2Text="Campaign"
               
                  />
                 </div>

                  <p className="text-[16px] leading-[26px] pt-3 text-black font-semibold">
                Share your requirements and our team will help you plan and execute the perfect street play campaign that connects with people and delivers real impact.
                  </p>

                </div>

                

              </div>

            </div>

            <div className="w-full h-[1px] bg-[#b8aea5]" />

            {/* Who Can Apply */}
            <div>

             

             <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            {leftData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  leftItemsRef.current[index] = el;
                }}
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    color: "#F56A28",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3
                    style={{
                      color: "#000",
                      margin: 0,
                      fontSize: "16px",
                 paddingBottom:"4px",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#000",
                      lineHeight: "1.5",
                      fontSize: "12px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

    

            <div
  className="border border-[#b8aea5] rounded-[4px] flex items-start gap-4 "
  style={{
    padding: "22px 24px",
    marginTop: "clamp(10px, 5vw, 60px)",
  }}
>
  {/* Icon Box */}
  <div
    className="flex items-center justify-center rounded-[4px] bg-[#f26a0a]"
    style={{
      width: "50px",
      height: "50px",
      minWidth: "50px",
    }}
  >
    <PhoneCall size={20} className="text-white" strokeWidth={2.2} />
  </div>

  {/* Content */}
  <div>
    <h4
      className="font-bold text-black leading-none"
      style={{
        fontSize: "clamp(16px, 2vw, 20px)",
      }}
    >
      Prefer to talk to us?
    </h4>

    <p
      className="text-black"
      style={{
        marginTop: "10px",
        fontSize: "clamp(14px, 1.5vw, 16px)",
        lineHeight: "1.5",
      }}
    >
      Call Us:{" "}
      <span className="text-[#f26a0a] font-bold">
        +91 9310996542
      </span>
      <br />
      (Mon - Sat, 10 AM - 7 PM)
      <br />
      Email: contact@nukkadnatak.com
    </p>
  </div>
</div>

            </div>

          </div>

          {/* RIGHT */}
   <div
  className="fade-up border border-black border-b-0"
  style={{
  
      padding: "clamp(20px, 5vw, 40px) clamp(0px, 5vw, 40px)",
    borderRadius: "12px 12px 0 0",
  }}
>
  <Heading2
    title="Tell Us"
    color="black"
    title2={true}
    title2Text="About Your Campaign"
  />

  <p
    className="text-[14px] text-black font-bold"
    style={{
      marginTop: "10px",
      paddingBottom: "10px",
    }}
  >
    Fill out the form below and our team will get in touch with you.
  </p>

<form className="space-y-5 form-wrapper" onSubmit={handleSubmit}>
    {/* Row 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        className="form-animate"
        style={{
          paddingBottom: "15px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Full Name*
        </label>

        <input
          type="text"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="fullName"
  value={form.fullName}
  onChange={handleChange}
        />
      </div>

      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Designation*
        </label>

        <input
          type="text"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="designation"
  value={form.designation}
  onChange={handleChange}
        />
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Company/Organization Name*
        </label>

        <input
          type="text"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="company"
  value={form.company}
  onChange={handleChange}
        />
      </div>

      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Email ID*
        </label>

        <input
          type="email"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="email"
  value={form.email}
  onChange={handleChange}
        />
      </div>
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Mobile Number*
        </label>

        <input
          type="text"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="phone"
  value={form.phone}
  onChange={handleChange}
        />
      </div>

      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          City*
        </label>

        <input
          type="text"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="city"
  value={form.city}
  onChange={handleChange}
        />
      </div>
    </div>

    {/* Inquiry */}
    <div
      className="form-animate"
      style={{
        paddingBottom: "10px",
      }}
    >
      <label
        className="block text-[12px] font-semibold text-black"
        style={{
          marginBottom: "5px",
        }}
      >
        Type of Inquiry / Campaign*
      </label>

      <div className="relative">
        <select
          className="appearance-none w-full h-[35px] text-[12px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="inquiryType"
  value={form.inquiryType}
  onChange={handleChange}
        >
          <option>Select Inquiry Type</option>
          <option>Brand Promotion</option>
          <option>Street Play</option>
          <option>Corporate Event</option>
          <option>Awareness Campaign</option>
        </select>

        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
      </div>
    </div>

    {/* Campaign Objective */}
    <div
      className="form-animate"
      style={{
        paddingBottom: "10px",
      }}
    >
      <label
        className="block text-[12px] font-semibold text-black"
        style={{
          marginBottom: "5px",
        }}
      >
        Campaign Objective / Purpose*
      </label>

      <textarea
        rows={2}
          name="objective"
  value={form.objective}
  onChange={handleChange}
        className="w-full border border-[#b8aea5] bg-transparent outline-none text-black resize-none"
        style={{
          padding: "12px 16px",
        }}
      />
    </div>

    {/* Row 4 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Expected Locations
        </label>

        <input
          type="text"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="locations"
  value={form.locations}
  onChange={handleChange}
        />
      </div>

      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Expected Date / Duration
        </label>

        <input
          type="date"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="duration"
  value={form.duration}
  onChange={handleChange}
        />
      </div>
    </div>

    {/* Row 5 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Approx. Audience Size
        </label>

        <input
          type="text"
          className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
          style={inputStyle}
            name="audience"
  value={form.audience}
  onChange={handleChange}
        />
      </div>

      <div
        className="form-animate"
        style={{
          paddingBottom: "10px",
        }}
      >
        <label
          className="block text-[12px] font-semibold text-black"
          style={{
            marginBottom: "5px",
          }}
        >
          Budget Range (Approx.) *
        </label>

        <div className="relative">
          <select
            className="appearance-none w-full text-[12px] h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
            style={inputStyle}
              name="budget"
  value={form.budget}
  onChange={handleChange}
          >
            <option>Select Budget</option>
            <option>₹10,000 - ₹50,000</option>
            <option>₹50,000 - ₹1,00,000</option>
            <option>₹1,00,000 - ₹5,00,000</option>
            <option>₹5,00,000+</option>
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
        </div>
      </div>
    </div>

    {/* Additional Requirements */}
    <div
      className="form-animate"
      style={{
        paddingBottom: "10px",
      }}
    >
      <label
        className="block text-[12px] font-semibold text-black"
        style={{
          marginBottom: "5px",
        }}
      >
        Additional Requirements
      </label>

      <textarea
        rows={2}
        className="w-full border border-[#b8aea5] bg-transparent outline-none text-black resize-none"
        style={{
          padding: "12px 16px",
        }}
          name="requirements"
  value={form.requirements}
  onChange={handleChange}
      />
    </div>

    {/* Checkbox */}
    <div className="flex items-center gap-3" style={{
      paddingBottom:"10px"
    }}>
      {/* <input type="checkbox" className="w-4 h-4" /> */}

      <input
  type="checkbox"
  checked={form.terms}
  onChange={handleCheckbox}
  className="w-4 h-4"
/>

      <p className="text-[12px] font-semibold text-black">
        I agree to the Terms & Conditions and Privacy Policy.
      </p>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full h-[40px] rounded-md bg-[#f26a0a] hover:bg-[#de5f08] transition-all duration-300 text-white text-[16px] font-semibold"
    >
      Submit Application
    </button>
  </form>

  <div
    className="flex items-center gap-2"
    style={{
      padding: "14px 0px 0px",
      fontWeight: "300",
      fontSize: "14px",
      color: "#6d6259",
    }}
  >
    <Lock size={18} />
    We respect your privacy. Your information is safe with us.
  </div>
</div>

        </div>

      </div>

    </section>
  );
};

export default EnquirySection;