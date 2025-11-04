import Link from "next/link";
import { Separator } from "../ui/separator";
import { ArrowUpRight } from "lucide-react";

export const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-300">
      <div className="space-y-5 text-left">
        <p>
          Hi, I&apos;m Prashant, a Front-end developer from India. I love
          crafting intuitive and dynamic{" "}
          <span className="relative inline-block group">
            <span className="relative z-10 bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              UIs
            </span>
            <span className="absolute inset-0 bg-gradient-to-l from-purple-400 to-yellow-400 blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            <span className="absolute inset-0 bg-gradient-to-l from-purple-400 to-yellow-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          </span>{" "}
          with Next.js. 
        </p>
        <p>
          I specialize in building responsive and user-friendly websites,
          creating smooth and secure experiences.
        </p>

        <p>
          I enjoy browsing the web and crafting components. You can find my{" "}
          <Link href="https://crafts-three.vercel.app" target="_blank">
            <span className="wavvy relative inline-block text-black dark:text-white underline-offset-2 cursor-pointer group transition-all duration-300">
              <span className="relative z-10 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 bg-clip-text transition-all duration-300 group-hover:text-transparent">
                crafts
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
              <span className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:animate-none" />
            </span>
          </Link>{" "}
          here. Currently, I&apos;m exploring AI and backend technologies.
        </p>

        <div className="flex">
          A Snapshot of my
          <Link href={"/work"} className="group ml-1 flex">
            {" "}
            work exp .
            <div className="relative size-5 -translate-x-px translate-y-[-2px] overflow-hidden">
              <ArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-4 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
        </div>
        <div className="flex w-full items-center justify-center">
          <Separator className="w-14 bg-[#888]/40" />
        </div>
        <p>
          Find me on twitter at{" "}
          <Link
            href={"https://x.com/prash2403"}
            target="_blank"
            className="wavvy underline-offset-2"
          >
            x.com
          </Link>{" "}
          or drop a{" "}
          <Link
            target="_blank"
            href={"mailto:prash2402@gmail.com"}
            className="wavvy underline-offset-2"
          >
            email
          </Link>
        </p>
      </div>
    </section>
  );
};
