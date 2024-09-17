import Image from "next/image";
import React from "react";
import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard";
import Marquee from "react-fast-marquee"; // Importing the react-fast-marquee

type Props = {};

export default function WorkExperienceMarquee({}: Props) {
  return (
    <section className="view-container mt-24 mb-6 px-4">
      {/* Marquee Section */}
      <div className="relative w-[99vw] bg-black dark:bg-neutral-800 text-white dark:text-gray-200 py-2 left-1/2 right-1/2 -mx-[50vw] mb-5 overflow-hidden">
        <Marquee gradient={false} speed={80}>
          {" "}
          {/* Adding react-fast-marquee */}
          {[...Array(2)].map((_, i) => (
            <div key={i}>
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
              &nbsp;
              &nbsp; Work Experience &nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp;
              &nbsp; Work Experience &nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp;
            </div>
          ))}
        </Marquee>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 mt-12 grid-cols-1 gap-8 p-1">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
