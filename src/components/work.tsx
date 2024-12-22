import Image from "next/image";
import React from "react";

type Props = {};

const WorkExp = (props: Props) => {
  return (
    <div className="view-container mt-12  px-4 flex flex-col gap-4">
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
      <div className="  grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 ">
        {/* Work Experience  */}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  alt="KofferX"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="p-1 rounded-full"
                  src="/logos/kofferx-logo.png"
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  KofferX
                </dd>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Frontend/UI Engineer
                </dd>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="July 2024 to Aug 2024"
                >
                  <time>July 2024</time> <span aria-hidden="true">—</span>{" "}
                  <time>Aug 2024</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  alt="KofferX"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="p-1 rounded-full"
                  src="/logos/jse-logo.webp"
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Jolly Soothing Era Foundation
                </dd>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Web-app developer
                </dd>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="July 2024 to Aug 2024"
                >
                  <time>Nov 2023</time> <span aria-hidden="true">—</span>{" "}
                  <time>Dec 2023</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  alt="KofferX"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="p-1 rounded-full"
                  src="/logos/grovr-logo.webp"
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Grovr user-testing
                </dd>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Frontend Engineer
                </dd>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="July 2024 to Aug 2024"
                >
                  <time>Jan 2024</time> <span aria-hidden="true">—</span>{" "}
                  <time>Feb 2024</time>
                </dd>
              </dl>
            </li>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
              <span className="ml-3">Education</span>
            </h2>
          </div>
          <ol className="mt-6 space-y-4">
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-16  w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  alt="University Logo"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="p-1 w-16 h-16 rounded-full"
                  src="/logos/nitj-logo.png"
                />
              </div>
              <dl className="flex flex-auto flex-wrap ">
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Dr B R Ambedkar National Institute of Technology Jalandhar
                </dd>
                <dd className="text-xs text-zinc-500 mt-1 dark:text-zinc-400">
                  Bachelor of Computer Science
                </dd>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="Graduation Year"
                >
                  <time>Nov 2021</time> <span aria-hidden="true">—</span>{" "}
                  <time>July 2025</time>
                </dd>
              </dl>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
