import AvatarHairpin from "@/components/Home/AvatarHairpin";
import Bento from "@/components/Home/Bento";
import SocialsCard from "@/components/Home/BentoCards/SocialsCard";
import SocialsIcons from "@/components/Home/BentoCards/SocialsIcons";
import { Intro } from "@/components/Home/Intro";
import BlurFade from "@/components/ui/BlurFade";
import WorkExperience from "@/components/work";
import Image from "next/image";

const page = () => {
  return (
    <section className="md:pb-16">
      <div className="relative w-full h-64">
        <Image src="/herobg.jpg" className="object-cover " alt="Logo" fill />
      </div>

      <div className="pb-3 -mt-20 px-4 md:px-12 bg-transparent ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-start gap-5">
            <AvatarHairpin />
            <div>
              <BlurFade delay={0.5}>
                <h1 className="mb-1 mt-0 font-instrumentSerif italic text-4xl font-medium dark:text-white">
                  Prashant Prabhakar
                </h1>
              </BlurFade>
              <BlurFade delay={0.6}>
                <div className="max-w-[58ch] text-sm text-zinc-600 dark:text-zinc-400">
                  21 • frontend engineer • developer • builder
                </div>
              </BlurFade>
            </div>
          </div>

          <div>
            <SocialsIcons />
          </div>
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
      </div>
    </section>
  );
};
export default page;
