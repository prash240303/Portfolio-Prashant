import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex md:mt-4 px-4 bg-neutral-50/85 dark:bg-neutral-800/85 bg-blur-lg view-container mt-4 flex-col items-center justify-center gap-10 border border-neutral-200 dark:border-neutral-700 rounded-[36px] shadow-lg">
      <div className="flex flex-col md:mt-[220px] mt-48 gap-4 items-start justify-start p-12">
        <div className="text-left text-2xl text-neutral-500 dark:text-neutral-400">
          <Image
            src={"/emojis/hand-emoji.png"}
            width={100}
            height={100}
            alt="hand"
            className="w-8 h-8 inline"
          />
          {` Yo, I'm Prashant, a cracked frontend developer and ...`}
        </div>
        <div className="text-left font-semibold text-3xl md:text-7xl lg:text-[80px] text-neutral-800 dark:text-neutral-100">
          I seek challenge, people and tech that excite my core, and to live on
          the edge.
        </div>
      </div>
    </section>
  );
};

export default Hero;
