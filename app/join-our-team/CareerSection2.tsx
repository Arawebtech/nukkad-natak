"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
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

const CareerSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#efe9e2] py-8 px-4 md:px-8"
  
    >
      <div className="max-w-7xl mx-auto border border-[#6d6259] rounded-[12px] p-5 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ================= LEFT SIDE ================= */}
          <div className="fade-up flex flex-col gap-10">

            {/* Vision */}
            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="max-w-[300px]">
                  <h2 className="text-[42px] leading-none font-black text-black">
                    Our <span className="text-[#f26a0a]">Vision</span>
                  </h2>

                  <div className="w-[115px] h-[5px] bg-[#f26a0a] rounded-full mt-3 mb-6" />

                  <p className="text-[18px] leading-[42px] text-black font-semibold max-w-[270px]">
                    To be India&apos;s most trusted street play agency inspiring
                    behavioral change and building a better tomorrow.
                  </p>
                </div>

                <div className="relative w-full md:w-[300px] h-[180px]">
                  <Image
                    src="/images/team2.png"
                    alt="Vision"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#b8aea5]" />

            {/* Who Can Apply */}
            <div>
              <h2 className="text-[42px] leading-none font-black text-black">
                Who Can <span className="text-[#f26a0a]">Apply?</span>
              </h2>

              <div className="w-[230px] h-[5px] bg-[#f26a0a] rounded-full mt-3 mb-6" />

              <p className="text-[18px] leading-[42px] text-black font-semibold max-w-[430px]">
                We welcome passionate individuals from different backgrounds who
                want to use their talent for a purpose.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
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
                      className="flex flex-col items-center justify-center border-r last:border-r-0 border-[#9e948b] px-2"
                    >
                      <div className="w-[95px] h-[95px] flex items-center justify-center">
                        <Icon strokeWidth={1.8} className="w-16 h-16 text-black" />
                      </div>

                      <h4 className="text-[20px] font-extrabold text-black mt-2 text-center">
                        {item.title}
                      </h4>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Box */}
              <div className="mt-8 border border-[#b8aea5] rounded-[4px] p-5 flex gap-4 items-start bg-[#f7f2ec]">
                <Send className="w-10 h-10 text-[#f26a0a]" />

                <div>
                  <h4 className="text-[18px] font-bold text-black">
                    Don&apos;t see a role that fits?
                  </h4>
                  <p className="text-[16px] text-black mt-1">
                    We&apos;d love to hear from you! Send us your resume.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="fade-up">
            <h2 className="text-[44px] leading-none font-black text-black">
              Join <span className="text-[#f26a0a]">Our Team</span>
            </h2>

            <p className="text-[17px] text-black font-semibold mt-4 mb-8">
              Fill out the form below and our team will get in touch with you.
            </p>

            <form className="space-y-5">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input placeholder="Full Name*" className="input" />
                <input placeholder="Phone Number" className="input" />
              </div>

              {/* Email */}
              <input placeholder="Email Address*" className="input" />

              {/* Position */}
              <div className="relative">
                <select className="select">
                  <option>Select Position</option>
                  <option>Actor</option>
                  <option>Writer</option>
                  <option>Marketing</option>
                  <option>Designer</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
              </div>

              {/* Experience */}
              <input placeholder="Experience (in years)" className="input" />

              {/* Location + Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input placeholder="Location*" className="input" />

                <div className="relative">
                  <select className="select">
                    <option>Availability</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Freelance</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Upload */}
              <div className="border border-dashed border-[#cfc5bc] rounded p-6 text-center">
                <Upload className="w-8 h-8 mx-auto text-[#6d6259]" />
                <p className="text-[#6d6259] mt-2">Click to upload or drag & drop</p>
                <span className="text-sm text-[#6d6259]">PDF, DOC, DOCX (Max 5MB)</span>
              </div>

              {/* About */}
              <textarea placeholder="Tell us about yourself*" rows={4} className="input h-auto" />

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-[60px] bg-[#f26a0a] hover:bg-[#de5f08] text-white font-bold text-[22px]"
              >
                Submit Application
              </button>

              {/* Footer */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mt-6 border-t border-[#b8aea5] pt-5">
                <p className="text-[14px] text-[#6d6259]">
                  By submitting you agree to{" "}
                  <span className="underline font-semibold text-black">Privacy Policy</span>{" "}
                  and{" "}
                  <span className="underline font-semibold text-black">Terms</span>.
                </p>

                <div className="flex items-center gap-2 text-[#6d6259] text-[14px]">
                  <Lock className="w-4 h-4" />
                  100% secure
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>

  
      <style jsx>{`
        .input {
          width: 100%;
          height: 52px;
          border: 1px solid #b8aea5;
          background: transparent;
          padding: 0 16px;
          outline: none;
          color: black;
        }

        .select {
          width: 100%;
          height: 52px;
          border: 1px solid #b8aea5;
          background: transparent;
          padding: 0 16px;
          appearance: none;
          color: black;
        }
      `}</style>
    </section>
  );
};

export default CareerSection;