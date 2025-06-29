// "use client";
// import { useState, useEffect } from "react";
// import Hero from "../components/Hero";
// import TechStack from "@/components/TechStack";
// import WorkExp from "@/components/work";
// import Marquee from "@/components/Marquee";
// import Image from "next/image";
// import CTAComponent from "@/components/CTA";
// function Home() {
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowContent(true);
//     }, 500);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <>
//       <div
//         className={`hero-section ${showContent ? "fade-in" : ""
//           } grid grid-cols-1 md:gap-6 gap-12 item-start justify-start`}
//       >
//         <div className="md:px-0 px-2">
//           <Hero />
//         </div>

//         <Marquee />
//         <div className="flex flex-col gap-4">
//           <TechStack />
//           <WorkExp />
//         </div>

//         <CTAComponent/>

//       </div>
//     </>
//   );
// }

// export default Home;

import AvatarHairpin from "@/components/Home/AvatarHairpin";
import Bento from "@/components/Home/Bento";
import { Intro } from "@/components/Home/Intro";
import BlurFade from "@/components/ui/BlurFade";
import WorkExperience from "@/components/work";

const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <div className="flex flex-col items-start justify-start gap-5 md:flex-row md:items-center md:justify-between">
        {" "}
        <div>
          {" "}
          <BlurFade delay={0.5}>
            <h1 className="mb-1 mt-0 text-3xl font-semibold dark:text-white">
              Prashant Prabhakar
            </h1>
          </BlurFade>
          <BlurFade delay={0.6}>
            <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
              Frontend Engineer
            </div>
          </BlurFade>
        </div>{" "}
        <AvatarHairpin />
      </div>

      <BlurFade delay={0.7}>
        <Intro />
      </BlurFade>

      <BlurFade delay={0.7}>
        <Bento />
      </BlurFade>

      <BlurFade delay={0.7}>
        <WorkExperience isHomeView={true} />
      </BlurFade>
    </section>
  );
};
export default page;
