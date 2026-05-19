"use client";

import Image from "next/image";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import axios from "axios";

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
} from "lucide-react";

import Heading2 from "@/components/common/Heading2";

gsap.registerPlugin(
  ScrollTrigger
);

const CareerSection = () => {
  const sectionRef =
    useRef<HTMLDivElement | null>(
      null
    );

  /* =========================
      STATES
  ========================= */

  const [loading, setLoading] =
    useState(false);

  const [fullName, setFullName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [position, setPosition] =
    useState("");

  const [
    experience,
    setExperience,
  ] = useState("");

  const [location, setLocation] =
    useState("");

  const [
    availability,
    setAvailability,
  ] = useState("");

  const [about, setAbout] =
    useState("");

  const [resume, setResume] =
    useState<File | null>(null);

  useEffect(() => {
    const ctx = gsap.context(
      () => {
        gsap.from(".fade-up", {
          opacity: 0,
          y: 80,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger:
              sectionRef.current,
            start: "top 85%",
          },
        });

        gsap.from(
          ".image-reveal",
          {
            clipPath:
              "inset(0 100% 0 0)",
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger:
                ".image-reveal",
              start: "top 85%",
            },
          }
        );

        gsap.from(".image-scale", {
          scale: 1.2,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger:
              ".image-scale",
            start: "top 85%",
          },
        });

        gsap.from(
          ".form-animate",
          {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger:
                ".form-wrapper",
              start: "top 85%",
            },
          }
        );

        gsap.from(".icon-pop", {
          opacity: 0,
          scale: 0.7,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger:
              ".icon-wrapper",
            start: "top 85%",
          },
        });
      },
      sectionRef
    );

    return () => ctx.revert();
  }, []);

  /* =========================
      SUBMIT
  ========================= */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "fullName",
        fullName
      );

      formData.append(
        "phone",
        phone
      );

      formData.append(
        "email",
        email
      );

      formData.append(
        "position",
        position
      );

      formData.append(
        "experience",
        experience
      );

      formData.append(
        "location",
        location
      );

      formData.append(
        "availability",
        availability
      );

      formData.append(
        "about",
        about
      );

      if (resume) {
        formData.append(
          "resume",
          resume
        );
      }

      const response =
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/career/create`,
          formData
        );

      alert(
        response.data.message
      );

      /* RESET */

      setFullName("");
      setPhone("");
      setEmail("");
      setPosition("");
      setExperience("");
      setLocation("");
      setAvailability("");
      setAbout("");
      setResume(null);
    } catch (error: any) {
      console.log(error);

      alert(
        error?.response?.data
          ?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

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
        background:
          "rgba(239, 233, 226, 0.35)",
      }}
    >
      <div
        className="mx-auto border border-black border-b-0"
        style={{
          paddingTop: "32px",
          paddingBottom: "32px",
          paddingLeft:
            "clamp(16px, 4vw, 32px)",
          paddingRight:
            "clamp(16px, 4vw, 32px)",
          borderColor: "black",
          borderRadius:
            "12px 12px 0 0",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="fade-up flex flex-col gap-10">

            {/* Vision */}
            <div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">

                <div className="max-w-[300px]">

                  <Heading2
                    title="Our"
                    color="black"
                    title2={true}
                    title2Text="Vision"
         
                  />

                  <p className="text-[14px] leading-[26px] pt-3 text-black font-semibold max-w-[270px]">
                    To be India&apos;s most trusted street play agency inspiring
                    behavioral change and building a better tomorrow.
                  </p>

                </div>

                <div className="relative w-full md:w-[300px] h-[180px] overflow-hidden image-reveal">

                  <Image
                    src="/images/team2.png"
                    alt="Vision"
                    fill
                    className="object-contain image-scale"
                  />

                </div>

              </div>

            </div>

            <div className="w-full h-[1px] bg-[#b8aea5]" />

            {/* Who Can Apply */}
            <div>

              <Heading2
                title="Who Can"
                color="black"
                title2={true}
                title2Text="Apply?"

              />

              <p className="text-[14px] leading-[26px] text-black font-semibold max-w-[430px]">
                We welcome passionate individuals from different backgrounds.
              </p>

              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 icon-wrapper"
                style={{
                  margin: "20px 0px",
                }}
              >

                {[
                  { icon: GraduationCap, title: "Students" },
                  { icon: BriefcaseBusiness, title: "Freshers" },
                  { icon: UserRound, title: "Freelancers" },
                  { icon: Drama, title: "Artists" },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="icon-pop flex flex-col items-center justify-center border-r last:border-r-0 border-[#9e948b] px-2"
                    >

                      <div className="w-[120px] h-[80px] flex items-center justify-center">

                        <Icon
                          strokeWidth={1.8}
                          className="w-14 h-14 text-black"
                        />

                      </div>

                      <h4 className="text-[15px] font-extrabold text-black text-center">
                        {item.title}
                      </h4>

                    </div>
                  );
                })}

              </div>

              <div
                className="border border-[#b8aea5] rounded-[4px] flex gap-4 items-start bg-[#f7f2ec]"
                style={{
                  padding: "20px",
                  marginTop: "clamp(10px, 5vw, 60px)",
                }}
              >

                <Send size={14} className="w-12 h-12 text-[#f26a0a]" />

                <div>

                  <h4 className="text-[14px] font-bold text-black">
                    Don&apos;t see a role that fits?
                  </h4>

                  <p
                    className="text-[12px] text-black"
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    We&apos;d love to hear from you! Send us your resume.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="fade-up">
            <Heading2
              title="Join"
              color="black"
              title2={true}
              title2Text="Our Team"
            />

            <p
              className="text-[12px] text-black font-bold"
              style={{
                marginTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Fill out the form below
              and our team will get in
              touch with you.
            </p>

            <form
              className="space-y-5 form-wrapper"
              onSubmit={
                handleSubmit
              }
            >
              {/* NAME + PHONE */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-animate" style={{
                  paddingBottom:"10px",
                  paddingTop:"5px"
                }}>
                  <label className="block text-[12px] font-semibold text-black mb-[5px]">
                    Full Name*
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(
                        e.target.value
                      )
                    }
                    className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                    style={inputStyle}
                  />
                </div>

                <div className="form-animate" style={{
                  paddingBottom:"10px",
                  paddingTop:"5px"
                }}>
                  <label className="block text-[12px] font-semibold text-black mb-[5px]">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    value={phone}
                    onChange={(e) =>
                      setPhone(
                        e.target.value
                      )
                    }
                    className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div className="form-animate" style={{
                paddingBottom:"10px",
                paddingTop:"5px"
              }}>
                <label className="block text-[12px] font-semibold text-black mb-[5px]">
                  Email Address*
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                  style={inputStyle}
                />
              </div>

              {/* POSITION + EXPERIENCE */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-animate" style={{
                  paddingBottom:"10px",
                  paddingTop:"5px"
                }}>
                  <label className="block text-[12px] font-semibold text-black mb-[5px]">
                    Position Applying
                    For
                  </label>

                  <div className="relative">
                    <select
                      value={
                        position
                      }
                      onChange={(e) =>
                        setPosition(
                          e.target.value
                        )
                      }
                      className="appearance-none w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                      style={
                        inputStyle
                      }
                    >
                      <option value="">
                        Select Position
                      </option>

                      <option>
                        Actor
                      </option>

                      <option>
                        Writer
                      </option>

                      <option>
                        Marketing
                      </option>

                      <option>
                        Designer
                      </option>
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
                  </div>
                </div>

                <div className="form-animate" style={{
                  paddingBottom:"10px",
                  paddingTop:"5px"
                }}>
                  <label className="block text-[12px] font-semibold text-black mb-[5px]">
                    Experience
                  </label>

                  <input
                    type="text"
                    value={
                      experience
                    }
                    onChange={(e) =>
                      setExperience(
                        e.target.value
                      )
                    }
                    className="w-full h-[35px] border border-[#b8aea5] bg-transparent outline-none text-black"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* LOCATION + AVAILABILITY */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-animate" style={{
                  paddingBottom:"10px",
                  paddingTop:"5px"
                }}>
                  <label className="block text-[12px] font-semibold text-black mb-[5px]">
                    Location*
                  </label>

                  <input
                    type="text"
                    value={location}
                    onChange={(e) =>
                      setLocation(
                        e.target.value
                      )
                    }
                    className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                    style={inputStyle}
                  />
                </div>

                <div className="form-animate" style={{
                  paddingBottom:"10px",
                  paddingTop:"5px"
                }}>
                  <label className="block text-[12px] font-semibold text-black mb-[5px]">
                    Availability
                  </label>

                  <div className="relative">
                    <select
                      value={
                        availability
                      }
                      onChange={(e) =>
                        setAvailability(
                          e.target.value
                        )
                      }
                      className="appearance-none w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                      style={
                        inputStyle
                      }
                    >
                      <option value="">
                        Availability
                      </option>

                      <option>
                        Full Time
                      </option>

                      <option>
                        Part Time
                      </option>

                      <option>
                        Freelance
                      </option>
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* RESUME */}

              <div className="form-animate" style={{
                paddingBottom:"10px",
                paddingTop:"5px"
              }}>
                <label className="block text-[12px] font-semibold text-black mb-[5px]">
                  Upload Resume*
                </label>

                <label
                  className="border border-dashed border-[#cfc5bc] rounded text-center flex items-center justify-center cursor-pointer"
                  style={{
                    padding:
                      "10px 20px",
                    gap: "10px",
                  }}
                >
                  <Upload className="w-5 h-5 text-[#6d6259]" />

                  <div>
                    <p className="text-[#6d6259] text-[12px]">
                      Click to upload
                    </p>

                    <span className="text-[14px] text-[#6d6259]">
                      PDF, DOC,
                      DOCX
                    </span>
                  </div>

                  <input
                    type="file"
                    hidden
                    accept=".pdf,.doc,.docx"
                    onChange={(
                      e
                    ) => {
                      if (
                        e.target
                          .files?.[0]
                      ) {
                        setResume(
                          e.target
                            .files[0]
                        );
                      }
                    }}
                  />
                </label>
              </div>

              {/* ABOUT */}

              <div className="form-animate" style={{
                paddingBottom:"10px",
                paddingTop:"5px"
              }}>
                <label className="block text-[12px] font-semibold text-black mb-[5px]">
                  Tell us about
                  yourself*
                </label>

                <textarea
                  rows={2}
                  value={about}
                  onChange={(e) =>
                    setAbout(
                      e.target.value
                    )
                  }
                  className="w-full border border-[#b8aea5] bg-transparent outline-none text-black resize-none"
                  style={{
                    padding:
                      "12px 16px",
                  }}
                />
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[35px] rounded-md bg-[#f26a0a] hover:bg-[#de5f08] transition-all duration-300 text-white text-[16px]"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Application"}
              </button>
            </form>

            <div
              className="flex items-center justify-center gap-2"
              style={{
                padding:
                  "10px 0px",
                fontWeight: "300",
                fontSize: "12px",
              }}
            >
              <Lock size={20} />
              We respect your
              privacy. Your
              information is safe
              with us.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;