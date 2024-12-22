import Image from "next/image";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import Marquee from "react-fast-marquee"; // Importing the react-fast-marquee
import Projects from "../data/Projects"
type Props = {};

export default function WorkExperienceMarquee({ }: Props) {
  return (
    <section className="view-container mt-24 mb-6 px-4">
      {/* Marquee Section */}
      <div className="relative w-[99vw] text-xl bg-black dark:bg-neutral-800 text-white dark:text-gray-200 py-2 left-1/2 right-1/2 -mx-[50vw] mb-5 overflow-hidden">
        <Marquee gradient={false} speed={80}>
          {" "}
          {/* Adding react-fast-marquee */}
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              Open to work &nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp; Open to work &nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp; Open to work &nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp;
              &nbsp; Open to work &nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp;
              &nbsp;Open to work&nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp;
              &nbsp;Open to work&nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp;
              &nbsp;Open to work&nbsp;
              <Image
                src="/star.svg"
                alt="star"
                width={48}
                height={48}
                className="inline-block"
              />
              &nbsp;
              &nbsp;Open to work&nbsp;
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

      {/* Open to work Grid */}
      <div className="items-center justify-between mt-12 sm:flex mb-6">
        <div>
          <a href="#my-tech-stack">
            <h2
              className="text-3xl font-semibold tracking-tighttext-zinc-100"
              id="my-tech-stack"
            >
              My Projects
            </h2>
          </a>
          <p className="mt-2 text-base text-zinc-600 ">
            Building beautiful things.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-8 p-1">
        {Projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
