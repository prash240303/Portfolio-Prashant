"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";
import Hero from "../components/Landing";
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
        className={`hero-section ${showContent ? "fade-in" : ""
          }  grid grid-cols-1 md:gap-24 gap-12 item-start justify-start`}
      >
        <Hero />


        <section className="view-container px-4">
          <div className="font-bold view-container flex items-center justify-start text-2xl text-zinc-900 dark:text-zinc-300 mb-5">
            Projects
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-1 ">
            {projects.map((project, index) => (
              <ProjectCard
                tags={project.tags}
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </section>
        <TechStack/>
        <WorkExp/>
      </div>
    </>
  );
}

export default Home;
