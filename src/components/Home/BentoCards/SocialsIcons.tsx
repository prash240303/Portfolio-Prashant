import React from "react";
import Link from "next/link";
import { Github } from "@/components/Icons/Github";
import { Twitter } from "@/components/Icons/socials/Twitter";
import { Linkedin } from "@/components/Icons/socials/Linkedin";

import { Paperclip } from "lucide-react";
import ThemeSwitch from "@/components/shared/ThemeSwitch";

const socials = [
  { icon: Github, href: "https://github.com/prash240303", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/prash2403", label: "Twitter" },
  { icon: Paperclip, href: "/resume.pdf", label: "Resume" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/prash2403",
    label: "LinkedIn",
  },
];

function SocialsIcons() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {socials.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            w-10 h-10 rounded-full flex items-center justify-center
            bg-neutral-200 dark:bg-neutral-900
            text-neutral-700 dark:text-neutral-300
            hover:text-neutral-900 dark:hover:text-white
            hover:bg-neutral-300 dark:hover:bg-neutral-700
            transition-all duration-200 ease-out
            hover:scale-110 hover:shadow-md
            dark:hover:shadow-lg dark:hover:shadow-neutral-900/20
            border border-neutral-300 dark:border-neutral-700
          "
        >
          <Icon size={20} strokeWidth={1.5} />
        </Link>
      ))}

      <div
        className="
          w-10 h-10 rounded-full flex items-center justify-center
          bg-neutral-200 dark:bg-neutral-900
          transition-all duration-200 ease-out
          border border-neutral-300 dark:border-neutral-700
          hover:bg-neutral-300 dark:hover:bg-neutral-700
          hover:scale-110
        "
      >
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default SocialsIcons;
