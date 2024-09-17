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
          <p className="mt-2 text-base text-zinc-600 ">
            Places I have gained tech-experiences and my education 🎓
          </p>
        </div>
      </div>
      <div className="  grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 ">
        {/* Work Experience  */}
        <div className="rounded-2xl mt-4 border view-container border-zinc-100 p-6 dark:border-zinc-700/40 flex-1">
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
            <a
              className="text-xs italic underline decoration-dotted underline-offset-4 hover:decoration-solid"
              href="mailto:prash2402@gmail.com"
            >
              hire me
            </a>
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
                  src="/icons/kofferx-logo.png"
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
                  src="/icons/jse-logo.webp"
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
                  src="/icons/grovr-logo.webp"
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
          <a
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
            download=""
            target="_blank"
            href="https://drive.google.com/file/d/1wkYxQO2XK6280JiK5wrMog4dwL5h5yaw/view?usp=sharing"
          >
            Download Resume
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
            >
              <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>

        {/* Education Section */}
        <div className="rounded-2xl mt-4 border view-container border-zinc-100 p-6 dark:border-zinc-700/40 flex-1">
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
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  alt="University Logo"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="p-1 rounded-full"
                  src="/icons/nitj-logo.png"
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Dr B R Ambedkar National Institute of Technology Jalandhar
                </dd>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
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
