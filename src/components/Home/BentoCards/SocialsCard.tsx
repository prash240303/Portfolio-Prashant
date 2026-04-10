import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const socials = [
  {
    name: "Email",
    link: "mailto:prash2402works@gmail.com",
    translateX: "-24px",
    rotate: "20deg",
    zIndex: 0,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prashant2403/",
    translateX: "12px",
    rotate: "-10deg",
    zIndex: 1,
  },
  {
    name: "GitHub",
    link: "https://github.com/prash240303",
    translateX: "-4px",
    rotate: "3deg",
    zIndex: 2,
  },
  {
    name: "Twitter",
    link: "https://x.com/prash2403",
    translateX: "4px",
    rotate: "-3deg",
    zIndex: 3,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1YurYayR7ggCCYNwXq-3PLcR6NYzJFgn4/view?usp=sharing",
    translateX: "4px",
    rotate: "-3deg",
    zIndex: 3,
  },
];

const SocialsCard = () => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-[5px]">
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="text-xl text-neutral-700 dark:text-neutral-300 font-instrumentSerif font-semibold">
          Let&apos;s connect
        </div>
        <div className="text-base text-neutral-500 dark:text-neutral-400">
          Find me on these platforms
        </div>
      </div>
      <div className="flex gap-3 flex-wrap md:justify-center justify-start">
        {socials.map((social) => (
          <SocialCard key={social.name} link={social.link} name={social.name} />
        ))}
      </div>
    </div>
  );
};

const SocialCard = ({
  link,
  className,
  style,
  name,
}: {
  link: string;
  className?: string;
  style?: React.CSSProperties;
  name: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        " group font-instrumentSerif tracking-wider flex h-fit hover:text-green-600 dark:hover:text-green-600 font-semibold hover:scale-105 transition-all duration-300 ease-in-out items-center justify-center gap-2 rounded-xl  py-3 md:px-2 pr-3",
        className,
      )}
      style={style}
    >
      {name}
      <ArrowRight className="size-4 hover:scale-105 rotate-0 group-[hover]:rotate-45 rounded-full border border-transparent stroke-1 transition-all duration-300 ease-linear group-hover:-rotate-45 group-hover:border-slate-50 group-hover:stroke-[2px] dark:group-hover:border-slate-950" />
    </Link>
  );
};

export default SocialsCard;
