// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import {
//   BriefcaseBusiness,
//   GraduationCap,
//   Upload,
//   UserRound,
//   Drama,
//   Lock,
//   ChevronDown,
//   Send,
// } from "lucide-react";

// const CareerSection = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".fade-up", {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         stagger: 0.15,
//         ease: "power3.out",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // small helper for inline fallback spacing
//   const inputStyle = {
//     paddingLeft: "16px",
//     paddingRight: "16px",
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#efe9e2] py-8 px-4 md:px-8"
//     >
//       <div className="max-w-7xl mx-auto border border-[#6d6259] rounded-[12px] p-5 md:p-8">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//           {/* ================= LEFT ================= */}
//           <div className="fade-up flex flex-col gap-10">

//             {/* Vision */}
//             <div>
//               <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

//                 <div className="max-w-[300px]">
//                   <h2 className="text-[42px] leading-none font-black text-black">
//                     Our <span className="text-[#f26a0a]">Vision</span>
//                   </h2>

//                   <div className="w-[115px] h-[5px] bg-[#f26a0a] rounded-full mt-3 mb-6" />

//                   <p className="text-[18px] leading-[42px] text-black font-semibold max-w-[270px]">
//                     To be India&apos;s most trusted street play agency inspiring
//                     behavioral change and building a better tomorrow.
//                   </p>
//                 </div>

//                 <div className="relative w-full md:w-[300px] h-[180px]">
//                   <Image
//                     src="/images/team2.png"
//                     alt="Vision"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>

//               </div>
//             </div>

//             <div className="w-full h-[1px] bg-[#b8aea5]" />

//             {/* Who Can Apply */}
//             <div>
//               <h2 className="text-[42px] leading-none font-black text-black">
//                 Who Can <span className="text-[#f26a0a]">Apply?</span>
//               </h2>

//               <div className="w-[230px] h-[5px] bg-[#f26a0a] rounded-full mt-3 mb-6" />

//               <p className="text-[18px] leading-[42px] text-black font-semibold max-w-[430px]">
//                 We welcome passionate individuals from different backgrounds.
//               </p>

//               {/* Cards */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
//                 {[
//                   { icon: GraduationCap, title: "Students" },
//                   { icon: BriefcaseBusiness, title: "Freshers" },
//                   { icon: UserRound, title: "Freelancers" },
//                   { icon: Drama, title: "Artists" },
//                 ].map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={index}
//                       className="flex flex-col items-center justify-center border-r last:border-r-0 border-[#9e948b] px-2"
//                     >
//                       <div className="w-[95px] h-[95px] flex items-center justify-center">
//                         <Icon strokeWidth={1.8} className="w-16 h-16 text-black" />
//                       </div>

//                       <h4 className="text-[20px] font-extrabold text-black mt-2 text-center">
//                         {item.title}
//                       </h4>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Bottom Box */}
//               <div className="mt-8 border border-[#b8aea5] rounded-[4px] p-5 flex gap-4 items-start bg-[#f7f2ec]">
//                 <Send className="w-10 h-10 text-[#f26a0a]" />

//                 <div>
//                   <h4 className="text-[18px] font-bold text-black">
//                     Don&apos;t see a role that fits?
//                   </h4>
//                   <p className="text-[16px] text-black mt-1">
//                     We&apos;d love to hear from you! Send us your resume.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT ================= */}
//           <div className="fade-up">

//             <h2 className="text-[44px] leading-none font-black text-black">
//               Join <span className="text-[#f26a0a]">Our Team</span>
//             </h2>

//             <p className="text-[17px] text-black font-semibold mt-4 mb-8">
//               Fill out the form below and our team will get in touch with you.
//             </p>

//             <form className="space-y-5">

//               {/* Name + Phone */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                 <div>
//                   <label className="block text-[12px] font-semibold mb-2 text-black">
//                     Full Name*
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                     style={inputStyle}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-[12px] font-semibold mb-2 text-black">
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                     style={inputStyle}
//                   />
//                 </div>

//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-[12px] font-semibold mb-2 text-black">
//                   Email Address*
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                   style={inputStyle}
//                 />
//               </div>

//               {/* Position */}
//               <div>
//                 <label className="block text-[12px] font-semibold mb-2 text-black">
//                   Position Applying For
//                 </label>

//                 <div className="relative">
//                   <select
//                     className="appearance-none w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                     style={inputStyle}
//                   >
//                     <option>Select Position</option>
//                     <option>Actor</option>
//                     <option>Writer</option>
//                     <option>Marketing</option>
//                     <option>Designer</option>
//                   </select>

//                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
//                 </div>
//               </div>

//               {/* Experience */}
//               <div>
//                 <label className="block text-[12px] font-semibold mb-2 text-black">
//                   Experience (in years)
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                   style={inputStyle}
//                 />
//               </div>

//               {/* Location + Availability */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                 <div>
//                   <label className="block text-[12px] font-semibold mb-2 text-black">
//                     Location*
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                     style={inputStyle}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-[12px] font-semibold mb-2 text-black">
//                     Select Availability
//                   </label>

//                   <div className="relative">
//                     <select
//                       className="appearance-none w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                       style={inputStyle}
//                     >
//                       <option>Availability</option>
//                       <option>Full Time</option>
//                       <option>Part Time</option>
//                       <option>Freelance</option>
//                     </select>

//                     <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
//                   </div>
//                 </div>

//               </div>

//               {/* Upload */}
//               <div>
//                 <label className="block text-[12px] font-semibold mb-2 text-black">
//                   Upload Resume*
//                 </label>

//                 <div className="border border-dashed border-[#cfc5bc] rounded p-6 text-center">
//                   <Upload className="w-8 h-8 mx-auto text-[#6d6259]" />
//                   <p className="text-[#6d6259] mt-2">
//                     Click to upload or drag & drop
//                   </p>
//                   <span className="text-sm text-[#6d6259]">
//                     PDF, DOC, DOCX (Max 5MB)
//                   </span>
//                 </div>
//               </div>

//               {/* About */}
//               <div>
//                 <label className="block text-[12px] font-semibold mb-2 text-black">
//                   Tell us about yourself*
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full border border-[#b8aea5] bg-transparent outline-none text-black resize-none"
//                   style={{ padding: "12px 16px" }}
//                 />
//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="w-full h-[60px] bg-[#f26a0a] hover:bg-[#de5f08] transition-all duration-300 text-white font-bold text-[22px]"
//               >
//                 Submit Application
//               </button>

//               {/* Footer */}
//               <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6 border-t border-[#b8aea5] pt-5">

//                 <div className="text-[12px] text-[#6d6259] leading-6">
//                   By submitting this form, you agree to{" "}
//                   <span className="text-black font-semibold underline cursor-pointer">
//                     Privacy Policy
//                   </span>{" "}
//                   and{" "}
//                   <span className="text-black font-semibold underline cursor-pointer">
//                     Terms & Conditions
//                   </span>.
//                 </div>

//                 <div className="flex items-center gap-2 text-[#6d6259] text-[12px]">
//                   <Lock className="w-4 h-4" />
//                   Your data is 100% secure
//                 </div>

//               </div>

//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerSection;




// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   BriefcaseBusiness,
//   GraduationCap,
//   Upload,
//   UserRound,
//   Drama,
//   Lock,
//   ChevronDown,
//   Send,
// } from "lucide-react";

// import Heading2 from "@/components/common/Heading2";

// gsap.registerPlugin(ScrollTrigger);

// const CareerSection = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       // LEFT + RIGHT SECTION
//       gsap.from(".fade-up", {
//         opacity: 0,
//         y: 80,
//         duration: 1.2,
//         stagger: 0.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//         },
//       });

//       // IMAGE REVEAL
//       gsap.from(".image-reveal", {
//         clipPath: "inset(0 100% 0 0)",
//         duration: 1.5,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".image-reveal",
//           start: "top 85%",
//         },
//       });

//       // IMAGE SCALE
//       gsap.from(".image-scale", {
//         scale: 1.2,
//         duration: 1.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".image-scale",
//           start: "top 85%",
//         },
//       });

//       // FORM FIELDS
//       gsap.from(".form-animate", {
//         opacity: 0,
//         y: 40,
//         duration: 1,
//         stagger: 0.08,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".form-wrapper",
//           start: "top 85%",
//         },
//       });

//       // ICONS
//       gsap.from(".icon-pop", {
//         opacity: 0,
//         scale: 0.7,
//         duration: 0.8,
//         stagger: 0.12,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: ".icon-wrapper",
//           start: "top 85%",
//         },
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const inputStyle = {
//     paddingLeft: "16px",
//     paddingRight: "16px",
//   };

//   return (
//   <section
//   ref={sectionRef}
//   className="w-full"
//   style={{
//     marginTop: "32px",
//     background: "rgba(239, 233, 226, 0.35)", // very light
//   }}
// >

//    <div
//   className="mx-auto border border-black  border-b-0"
//   style={{
//     paddingTop: "32px",
//     paddingBottom: "32px",
//     paddingLeft: "clamp(16px, 4vw, 32px)",
//     paddingRight: "clamp(16px, 4vw, 32px)",
//     borderColor: "black", // very light border
//     borderRadius: "12px 12px 0 0", // top-left & top-right only
//   }}
// >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//           {/* LEFT */}
//           <div className="fade-up flex flex-col gap-10">

//             {/* Vision */}
//             <div>
//              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">

//                 <div className="max-w-[300px]">

//               <Heading2 title="Our" color="black" title2={true} title2Text="Vision" 
//                 mobileSize="30px"
//   desktopSize="50px"
//               />

//                   {/* <div className="w-[115px] h-[5px] bg-[#f26a0a] rounded-full mt-3 mb-6" /> */}

//                   <p className="text-[16px] leading-[34px] pt-3 text-black font-semibold max-w-[270px]">
//                     To be India&apos;s most trusted street play agency inspiring
//                     behavioral change and building a better tomorrow.
//                   </p>
//                 </div>

//             <div className="relative w-full md:w-[300px] h-[180px] image-reveal">
//                   <Image
//                     src="/images/team2.png"
//                     alt="Vision"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>

//               </div>
//             </div>

//             <div className="w-full h-[1px] bg-[#b8aea5]" />

//             {/* Who Can Apply */}
//             <div>
//                         <Heading2 title="Who Can" color="black" title2={true} title2Text="Apply?" 
//                 mobileSize="30px"
//   desktopSize="50px"
//               />

//               {/* <div className="w-[230px] h-[5px] bg-[#f26a0a] rounded-full mt-3 mb-6" /> */}

//               <p className="text-[16px] leading-[34px] text-black font-semibold max-w-[430px]">
//                 We welcome passionate individuals from different backgrounds.
//               </p>

//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 " style={{
//                 margin:"20px 0px"
//               }}>
//                 {[
//                   { icon: GraduationCap, title: "Students" },
//                   { icon: BriefcaseBusiness, title: "Freshers" },
//                   { icon: UserRound, title: "Freelancers" },
//                   { icon: Drama, title: "Artists" },
//                 ].map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                  <div
//   key={index}
//   className="icon-pop flex flex-col items-center justify-center border-r last:border-r-0 border-[#9e948b] px-2"
// >
//                       <div className="w-[120px] h-[80px] flex items-center justify-center">
//                         <Icon strokeWidth={1.8} className="w-20 h-20 text-black" />
//                       </div>

//                       <h4 className="text-[20px] font-extrabold text-black text-center">
//                         {item.title}
//                       </h4>
//                     </div>
//                   );
//                 })}
//               </div>

//              <div
//   className="border border-[#b8aea5] rounded-[4px] flex gap-4 items-start bg-[#f7f2ec]"
//   style={{
//     padding: "20px",
//     marginTop: "clamp(10px, 5vw, 60px)",
//   }}
// >
//                 <Send size={20} className="w-15 h-15 text-[#f26a0a]" />

//                 <div>
//                   <h4 className="text-[16px] font-bold text-black">
//                     Don&apos;t see a role that fits?
//                   </h4>
//                   <p className="text-[16px] text-black" style={{
//                     marginTop:"5px"
//                   }}>
//                     We&apos;d love to hear from you! Send us your resume.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="fade-up">

//             {/* <h2 className="text-[44px] leading-none font-black text-black">
//               Join <span className="text-[#f26a0a]">Our Team</span>
//             </h2> */}
//                           <Heading2 title="Join" color="black" title2={true} title2Text="Our Team" 
//                 mobileSize="30px"
//   desktopSize="50px"
//               />

//             <p className="text-[16px] text-black font-bold" style={{
//                 marginTop:"10px",
//                 paddingBottom:"10px"
//             }}>
//               Fill out the form below and our team will get in touch with you.
//             </p>

//             <form className="space-y-5">

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                 <div
//   className="form-animate"
//   style={{
//     paddingBottom:"15px"
//   }}
// >
//                   <label className="block text-[12px] font-semibold  text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                     Full Name*
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                     style={inputStyle}
//                   />
//                 </div>

//                 <div
//   className="form-animate"
//   style={{
//     paddingBottom:"15px"
//   }}
// >
//                   <label className="block text-[12px] font-semibold  text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                     style={inputStyle}
//                   />
//                 </div>

//               </div>

//              <div
//   className="form-animate"
//   style={{
//     paddingBottom:"15px"
//   }}
// >

//                 <label className="block text-[12px] font-semibold  text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                   Email Address*
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                   style={inputStyle}
//                 />
//               </div>

//            <div
//   className="form-animate"
//   style={{
//     paddingBottom:"15px"
//   }}
// >

//                 <label className="block text-[12px] font-semibold text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                   Position Applying For
//                 </label>

//                 <div className="relative">
//                   <select
//                     className="appearance-none w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                     style={inputStyle}
//                   >
//                     <option>Select Position</option>
//                     <option>Actor</option>
//                     <option>Writer</option>
//                     <option>Marketing</option>
//                     <option>Designer</option>
//                   </select>

//                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
//                 </div>
//               </div>

//                <div
//   className="form-animate"
//   style={{
//     paddingBottom:"15px"
//   }}
// >

//                 <label className="block text-[12px] font-semibold mb-2 text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                   Experience (in years)
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full h-[32px] border border-[#b8aea5] bg-transparent outline-none text-black"
//                   style={inputStyle}
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{
//                 paddingBottom:"15px"
//               }}>

//                 <div>
//                   <label className="block text-[12px] font-semibold  text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                     Location*
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                     style={inputStyle}
//                   />
//                 </div>

//                 <div className="" style={{
//                     paddingBottom:"0px"
//                 }}>

//                   <label className="block text-[12px] font-semibold  text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                     Select Availability
//                   </label>

//                   <div className="relative">
//                     <select
//                       className="appearance-none w-full h-[35] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
//                       style={inputStyle}
//                     >
//                       <option>Availability</option>
//                       <option>Full Time</option>
//                       <option>Part Time</option>
//                       <option>Freelance</option>
//                     </select>

//                     <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
//                   </div>
//                 </div>

//               </div>

//               <div
//   className="form-animate"
//   style={{
//     paddingBottom:"15px"
//   }}
// >
//                 <label className="block text-[12px] font-semibold  text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                   Upload Resume*
//                 </label>

//                 <div className="form-animate border border-dashed border-[#cfc5bc] rounded text-center flex items-center justify-center" style={{
//                     padding:"20px"
//                 }}>
//                   <Upload className="w-8 h-8 mx-auto text-[#6d6259]" />
//                   <p className="text-[#6d6259] mt-2">
//                     Click to upload or drag & drop
//                   </p>
//                   <span className="text-sm text-[#6d6259]">
//                     PDF, DOC, DOCX (Max 5MB)
//                   </span>
//                 </div>
//               </div>

//             <div
//   className="form-animate"
//   style={{
//     paddingBottom:"15px"
//   }}
// >
//                 <label className="block text-[12px] font-semibold  text-black" style={{
//                     marginBottom:"5px"
//                   }}>
//                   Tell us about yourself*
//                 </label>
//                 <textarea
//                   rows={2}
//                   className="  w-full border border-[#b8aea5] bg-transparent outline-none text-black resize-none"
//                   style={{ padding: "12px 16px" }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full h-[40px] rounded-t-md bg-[#f26a0a] hover:bg-[#de5f08] transition-all duration-300 text-white  text-[18px]"
//               >
//                 Submit Application
//               </button>

//             </form>
//             <div className="flex items-center justify-center gap-2" style={{
//                 padding:"10px 0px ",
//                 fontWeight:"300",
//                 fontSize:"14px"
//             }}>
//                <Lock size={20}/> We respect your privacy. Your information is safe with us.
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerSection;




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
} from "lucide-react";

import Heading2 from "@/components/common/Heading2";

gsap.registerPlugin(ScrollTrigger);

const CareerSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
        className="mx-auto border border-black border-b-0"
        style={{
          paddingTop: "32px",
          paddingBottom: "32px",
          paddingLeft: "clamp(16px, 4vw, 32px)",
          paddingRight: "clamp(16px, 4vw, 32px)",
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

                <div className="max-w-[300px]">

                  <Heading2
                    title="Our"
                    color="black"
                    title2={true}
                    title2Text="Vision"
         
                  />

                  <p className="text-[16px] leading-[26px] pt-3 text-black font-semibold max-w-[270px]">
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

              <p className="text-[16px] leading-[26px] text-black font-semibold max-w-[430px]">
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

                      <h4 className="text-[16px] font-extrabold text-black text-center">
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

                <Send size={16} className="w-14 h-14 text-[#f26a0a]" />

                <div>

                  <h4 className="text-[16px] font-bold text-black">
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
              Fill out the form below and our team will get in touch with you.
            </p>

            <form className="space-y-5 form-wrapper">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div
                  className="form-animate"
                  style={{
                    paddingBottom:"12px",
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
                  />

                </div>

                <div
                  className="form-animate"
                  style={{
                    paddingBottom:"12px",
                  }}
                >

                  <label
                    className="block text-[12px] font-semibold text-black"
                    style={{
                      marginBottom: "5px",
                    }}
                  >
                    Phone Number
                  </label>

                  <input
                    type="text"
                    className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                    style={inputStyle}
                  />

                </div>

              </div>

              <div
                className="form-animate"
                style={{
                  paddingBottom:"12px",
                }}
              >

                <label
                  className="block text-[12px] font-semibold text-black"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Email Address*
                </label>

                <input
                  type="email"
                  className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                  style={inputStyle}
                />

              </div>

  <div
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                style={{
                  paddingBottom:"12px",
                }}
              >

              <div
                className="form-animate"
            
              >

                <label
                  className="block text-[12px] font-semibold text-black"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Position Applying For
                </label>

                <div className="relative">

                  <select
                    className="appearance-none w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                    style={inputStyle}
                  >
                    <option>Select Position</option>
                    <option>Actor</option>
                    <option>Writer</option>
                    <option>Marketing</option>
                    <option>Designer</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />

                </div>

              </div>

              <div
                className="form-animate"
            
              >

                <label
                  className="block text-[12px] font-semibold mb-2 text-black"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Experience (in years)
                </label>

                <input
                  type="text"
                  className="w-full h-[32px] border border-[#b8aea5] bg-transparent outline-none text-black"
                  style={inputStyle}
                />

              </div>

              </div>


              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                style={{
                  paddingBottom:"12px",
                }}
              >

                <div className="form-animate">

                  <label
                    className="block text-[12px] font-semibold text-black"
                    style={{
                      marginBottom: "5px",
                    }}
                  >
                    Location*
                  </label>

                  <input
                    type="text"
                    className="w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                    style={inputStyle}
                  />

                </div>

                <div className="form-animate">

                  <label
                    className="block text-[12px] font-semibold text-black"
                    style={{
                      marginBottom: "5px",
                    }}
                  >
                    Select Availability
                  </label>

                  <div className="relative">

                    <select
                      className="appearance-none w-full h-[35px] rounded-sm border border-[#b8aea5] bg-transparent outline-none text-black"
                      style={inputStyle}
                    >
                      <option>Availability</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Freelance</option>
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />

                  </div>

                </div>

              </div>

              <div
                className="form-animate"
                style={{
                  paddingBottom:"12px",
                }}
              >

                <label
                  className="block text-[12px] font-semibold text-black"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Upload Resume*
                </label>

                <div
                  className="border border-dashed border-[#cfc5bc] rounded text-center flex items-center justify-center"
                  style={{
                    padding: "10px 20px",
                    gap:"10px"
                  }}
                >

                  <Upload className="w-5 h-5 mx-auto text-[#6d6259]" />

                  <div>

                    <p className="text-[#6d6259] text-[12px]">
                      Click to upload or drag & drop
                    </p>

                    <span className="text-[14px] text-[#6d6259] ">
                      PDF, DOC, DOCX (Max 5MB)
                    </span>

                  </div>

                </div>

              </div>

              <div
                className="form-animate"
                style={{
                  paddingBottom:"12px",
                }}
              >

                <label
                  className="block text-[12px] font-semibold text-black"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Tell us about yourself*
                </label>

                <textarea
                  rows={2}
                  className="w-full border border-[#b8aea5] bg-transparent outline-none text-black resize-none"
                  style={{
                    padding: "12px 16px",
                  }}
                />

              </div>

          <button
                 type="submit"
                 className="w-full h-[35px] rounded-md bg-[#f26a0a] hover:bg-[#de5f08] transition-all duration-300 text-white  text-[16px]"
               >
                 Submit Application
               </button>

             </form>
             <div className="flex items-center justify-center gap-2" style={{
                 padding:"10px 0px ",
                 fontWeight:"300",
                 fontSize:"12px"
             }}>
                <Lock size={20}/> We respect your privacy. Your information is safe with us.
             </div>
           </div>

        </div>

      </div>

    </section>
  );
};

export default CareerSection;