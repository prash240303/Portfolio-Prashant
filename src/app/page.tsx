"use client";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import TechStack from "@/components/TechStack";
import WorkExp from "@/components/work";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import CTAComponent from "@/components/CTA";
function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className={`hero-section ${showContent ? "fade-in" : ""
          } grid grid-cols-1 md:gap-6 gap-12 item-start justify-start`}
      >
        <div className="md:px-0 px-2">
          <Hero />
        </div>

        <Marquee />
        <div className="flex flex-col gap-4">
          <TechStack />
          <WorkExp />
        </div>

        <CTAComponent/>

      

      </div>
    </>
  );
}

export default Home;





