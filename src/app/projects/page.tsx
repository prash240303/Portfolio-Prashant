import ProjectCard from "@/components/Project/ProjectCard";
import CdBack from "@/components/shared/CdBack";
import { topProjects } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects and creations.",
};

const page = () => {
  return (
    <section className="pb-16 w-full pt-8 md:mt-8 lg:mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-semibold tracking-tight">
          Projects
        </h1>
        <h2 className="mt-3 text-center text-gray-400">
          Projects I&apos;ve crafted.
        </h2>
      </div>
      <div>
        <div className="my-8 space-y-14">
          {topProjects.map((project, index) => (
            <ProjectCard
              key={index}
              delay={index * 0.2}
              imageSrc={project.imageSrc}
              videoSrc={project.videoSrc}
              title={project.title}
              tags={project.tags}
              timeline={project.timeline}
              tagline={project.tagline}
              liveDemoHref={project.liveDemoHref}
              sourceCodeHref={project.sourceCodeHref}
            />
          ))}
        </div>
      </div>{" "}
      <div>
        <h1 className="my-14 text-black dark:text-white text-xl">
          View more on{" "}
          <Link
            href="https://github.com/prash240303?tab=repositories"
            className="peer inline-flex items-center justify-start font-neu  font-bold"
            target="_blank"
          >
            Github
          </Link>
          {" & "}
          <Link
            href="https://crafts-three.vercel.app/"
            className="peer inline-flex items-center justify-start font-bold font-neu"
            target="_blank"
          >
            crafts
          </Link>
          <ArrowRight className="ml-2 inline-block size-4 rounded-full border border-transparent stroke-black stroke-1 transition-all duration-300 ease-linear peer-hover:-rotate-45 peer-hover:border-slate-950 peer-hover:stroke-[2px] dark:stroke-white dark:peer-hover:border-slate-50" />
        </h1>
        <h1 className="mt-24 bg-gradient-to-r hover:animate-pulse from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-center font-neu text-4xl font-extrabold text-transparent opacity-30 md:text-7xl">
          Shipping More Soon
        </h1>
      </div>
      <CdBack />
    </section>
  );
};
export default page;
