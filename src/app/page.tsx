"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";
import Hero from "../components/Hero";
import TechStack from "@/components/TechStack";
import WorkExp from "@/components/work";

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
        className={`hero-section ${
          showContent ? "fade-in" : ""
        } grid grid-cols-1 md:gap-24 gap-12 item-start justify-start`}
      >
        <div className="md:px-0 px-2">
        <Hero />
        </div>

        <section className="view-container px-4">
          <div className="relative w-[99vw] bg-black dark:bg-neutral-800 text-white dark:text-gray-200 py-2 left-1/2 right-1/2  -mx-[50vw] mb-5">
            <div className="overflow-hidden whitespace-nowrap w-full">
              <div
                className="inline-block animate-marquee font-bold text-2xl transform rotate-3"
                style={{
                  whiteSpace: "nowrap",
                  animation: "marquee 20s linear infinite",
                }}
              >
                Work Experience &nbsp;
                <Image
                  src="/star.svg"
                  alt="star"
                  width={48}
                  height={48}
                  className="inline-block"
                />
                &nbsp; Work Experience &nbsp;
                <Image
                  src="/star.svg"
                  alt="star"
                  width={48}
                  height={48}
                  className="inline-block"
                />
                &nbsp; Work Experience &nbsp;
                <Image
                  src="/star.svg"
                  alt="star"
                  width={48}
                  height={48}
                  className="inline-block"
                />
                &nbsp; Work Experience &nbsp;
                <Image
                  src="/star.svg"
                  alt="star"
                  width={48}
                  height={48}
                  className="inline-block"
                />
                &nbsp; Work Experience
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mt-12 grid-cols-1 gap-8 p-1">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </section>
        <TechStack />
        <WorkExp />
      </div>
    </>
  );
}

export default Home;
