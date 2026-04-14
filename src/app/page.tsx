import AvatarHairpin from "@/components/Home/AvatarHairpin";
import SocialsIcons from "@/components/Home/BentoCards/SocialsIcons";
import { Intro } from "@/components/Home/Intro";
import ProjectCard from "@/components/Project/ProjectCard";
import BlurFade from "@/components/ui/BlurFade";
import WorkExperience from "@/components/work";
import { Metadata } from "next";
import Image from "next/image";
import { topProjects } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import StacksCard from "@/components/Home/BentoCards/StacksCard";
import BookACall from "@/components/Home/BentoCards/BookACall";
import Divider from "@/components/ui/Divider";
import CraftsSection from "@/components/Home/BentoCards/CraftsCard";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page",
};

const page = () => {
  return (
    <section className="">
      <div className="relative w-full h-40 sm:h-52 md:h-64">
        <Image src="/herobg.jpg" className="object-cover" alt="Logo" fill />
      </div>
      <div className="pb-3 -mt-20 bg-transparent overflow-x-clip">
        <div className="flex px-4 md:px-12 items-start md:items-center gap-4 md:gap-0 flex-col md:flex-row justify-between">
          <div className="flex flex-col items-start justify-start gap-2 md:gap-5 min-w-0 w-full md:w-auto">
            <div className="pl-0">
              <AvatarHairpin />
            </div>
            <div className="pl-1 min-w-0 overflow-hidden">
              <BlurFade delay={0.5}>
                <h1 className="mb-1 mt-0 font-instrumentSerif italic text-2xl md:text-4xl font-medium dark:text-white leading-tight truncate-none">
                  Prashant Prabhakar
                </h1>
              </BlurFade>
              <BlurFade delay={0.6}>
                <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                  21 • frontend engineer • developer • builder
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Socials */}
          <div className="w-full md:w-auto pl-1">
            <SocialsIcons />
          </div>
        </div>

        <BlurFade className="px-4 md:px-12 md:mt-4 mt-8" delay={0.7}>
          <Intro />
        </BlurFade>

        <Divider />

        <BlurFade className="px-4 md:px-12" delay={0.7}>
          <WorkExperience isHomeView={true} />
        </BlurFade>
        <Divider />

        <BlurFade className="px-4 md:px-12" delay={0.7}>
          <div className="flex mt-8 flex-col items-start justify-center">
            <h1 className="text-3xl md:text-3xl font-instrumentSerif font-medium tracking-tight">
              Projects
            </h1>
          </div>
          <div>
            <div className="my-6 md:my-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
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
        </BlurFade>
        <Divider />
        <BlurFade className="px-4 md:px-12" delay={0.7}>
          <CraftsSection />
        </BlurFade>
        <Divider />

        <BlurFade className="px-4 md:block hidden md:px-12" delay={0.7}>
          <StacksCard />
        </BlurFade>
        <Divider />

        <BlurFade className="px-4 md:px-12" delay={0.7}>
          <BookACall />
        </BlurFade>
        <Divider />
      </div>
    </section>
  );
};
export default page;
