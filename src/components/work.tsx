import Image from "next/image";
import Link from "next/link";
import React from "react";


type ItemProps = {
  logoSrc: string;
  altText: string;
  title: string;
  link: string;
  subtitle: string;
  dateRange: string;
};

const Item = ({ logoSrc, altText, title, link, subtitle, dateRange }: ItemProps) => {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          alt={altText}
          loading="lazy"
          width="48"
          height="48"
          decoding="async"
          data-nimg="1"
          className="p-1 rounded-full"
          src={logoSrc}
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          <Link href={link} target="_blank">{title}</Link>
        </dd>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{subtitle}</dd>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={dateRange}
        >
          {dateRange}
        </dd>
      </dl>
    </li>
  );
};

const workExperience = [
  {
    logoSrc: "/logos/raptorx-logo.svg",
    altText: "raptorx",
    title: "RaptorX.ai",
    link: "https://raptorx.ai",
    subtitle: "Frontend Engineer",
    dateRange: "Jan 2025 — July 2025",
  },
  {
    logoSrc: "/logos/kofferx-logo.png",
    altText: "KofferX",
    title: "KofferX",
    link: "https://kofferx.com",
    subtitle: "Frontend/UI Engineer",
    dateRange: "July 2024 — Aug 2024",
  },
  {
    logoSrc: "/logos/jse-logo.png",
    altText: "Jolly Soothing Era Foundation",
    link: "https://jsefoundation.com",
    title: "Jolly Soothing Era Foundation",
    subtitle: "Frontend Developer/Designer",
    dateRange: "Nov 2023 — Dec 2023",
  },
  {
    logoSrc: "/logos/grovr-logo.webp",
    altText: "Grovr",
    link: "https://www.grovrtesting.com/",
    title: "Grovr User Testing",
    subtitle: "Frontend Engineer",
    dateRange: "Jan 2024 — Feb 2024",
  },
];

const education = [
  {
    logoSrc: "/logos/nitj-logo.png",
    altText: "University Logo",
    link: "https://nitj.ac.in/",
    title: "Dr B R Ambedkar National Institute of Technology Jalandhar",
    subtitle: "Bachelor of Computer Science",
    dateRange: "Nov 2021 — July 2025",
  },
];

const WorkExp = () => {
  return (
    <div className="view-container mt-12 px-4 flex flex-col gap-4">
      <div className="items-center justify-between sm:flex">
        <div>
          <a href="#my-tech-stack">
            <h2
              className="text-3xl font-semibold tracking-tighttext-zinc-100"
              id="my-tech-stack"
            >
              Work Experience and Education
            </h2>
          </a>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Places I have gained tech-experiences and my education 🎓
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
        {/* Work Experience */}
        <div className="rounded-2xl mt-4 border view-container border-black-10 p-6 dark:border-zinc-700/40 flex-1">
          <div className="flex w-full items-center justify-between">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
              <span className="ml-3">Work</span>
            </h2>
          </div>
          <ol className="mt-6 space-y-4">
            {workExperience.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </ol>
        </div>

        {/* Education Section */}
        <div className="rounded-2xl mt-4 border view-container border-black-10 p-6 dark:border-zinc-700/40 flex-1">
          <div className="flex w-full items-center justify-between">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
              <span className="ml-3">Education</span>
            </h2>
          </div>
          <ol className="mt-6 space-y-4">
            {education.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
