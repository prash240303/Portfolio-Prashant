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

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page",
};

const page = () => {
  return (
    <section className="">
      <div className="relative w-full h-64">
        <Image
          src="/herobg.jpg"
          className="md:object-cover object-fill"
          alt="Logo"
          fill
        />
      </div>

      <div className="pb-3 -mt-20 bg-transparent ">
        <div className="flex px-4 md:px-12 md:items-center items-start md:gap-0 gap-5 md:flex-row flex-col justify-between">
          <div className="flex flex-col items-start justify-start gap-5">
            <AvatarHairpin />
            <div>
              <BlurFade delay={0.5}>
                <h1 className="mb-1 mt-0 font-instrumentSerif italic text-4xl font-medium dark:text-white">
                  Prashant Prabhakar
                </h1>
              </BlurFade>
              <BlurFade delay={0.6}>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  21 • frontend engineer • developer • builder
                </div>
              </BlurFade>
            </div>
          </div>

          <div>
            <SocialsIcons />
          </div>
        </div>

        <BlurFade className="px-4 md:px-12" delay={0.7}>
          <Intro />
        </BlurFade>
        <Divider />

        <BlurFade className="px-4 md:px-12" delay={0.7}>
          <WorkExperience isHomeView={true} />
        </BlurFade>

        <Divider />

        <BlurFade className="px-4 md:px-12" delay={0.7}>
          <div className="flex mt-4 md:mt-8 flex-col items-start justify-center">
            <h1 className="text-3xl font-instrumentSerif font-medium tracking-tight">
              Projects
            </h1>
          </div>
          <div>
            <div className="my-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-8">
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
