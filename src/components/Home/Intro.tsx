import Link from "next/link";

export const Intro = () => {
  return (
    <section className="mt-4 md:mt-8 w-full text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
      <div className="space-y-3 md:space-y-5 text-left">
        <p className="leading-snug sm:leading-relaxed">
          Hi, I&apos;m Prashant, a Front-end developer from India. I love
          crafting intuitive and{" "}
          <span className="relative inline-block group">
            <button className="rounded-md mx-0.5 md:mx-1 border border-neutral-300/80 bg-gradient-to-b from-neutral-100 to-neutral-200 px-1 md:px-1.5 py-0.5 text-neutral-500 shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors hover:from-neutral-50 hover:to-neutral-100 dark:border-none dark:bg-[#2f2f2f] dark:bg-none dark:text-[#d4d4d4] dark:shadow-[0_6px_16px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] dark:hover:bg-[#333]">
              <span className="text-xs md:text-sm font-medium tracking-wide">
                Dynamic UI
              </span>
            </button>
          </span>
          with Next.js.
        </p>
        <p className="leading-snug sm:leading-relaxed">
          I specialize in building responsive and user-friendly websites,
          creating smooth and secure experiences.
        </p>

        <p className="leading-snug sm:leading-relaxed">
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
      </div>
    </section>
  );
};