"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";
import Link from "next/link";
import Hero from "../components/Landing";
function Home() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className={`hero-section ${showContent ? "fade-in" : ""
          }  grid grid-cols-1 item-start justify-start`}
      >
        <Hero />
        <section className="md:my-8 my-4 py-4">
          <div className="about-content-wrapper leading-6 text-lg text-center font-light text-zinc-100 md:px-0 px-2 mt-6">
            <p>
              {
                "Hello! I'm an student/engineer focused on building scalable products with a strong emphasis on user experience, design, developer experience, and meaningful impact."
              }{" "}
            </p>
          </div>
          <div className="rounded-lg bg-[#333333cc]  text-zinc-100   border-[2px] border-[#ffffff14] text-base font-normal p-4 leading-6 mt-12 ">
            <p>
              I am actively seeking part-time engineering roles that revolve
              around user interface and experience design, with a focus on
              frontend engineering.{" "}
            </p>
            <p className="mt-2 mb-4 ">
              A dynamic team of engineers and designers is collaboratively
              crafting exceptional products. I am eager to contribute and
              collaborate with your team. Please feel free to reach out to me.
            </p>
            <div className="flex flex-row items-center justify-start gap-7">
              <Link
                href="/resume"
                className="flex flex-row items-center justify-start gap-0.5 transition-all text-zinc-300 hover:text-zinc-500 hover:gap-2 active:text-cyan-500  font-[500] text-lg"
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentcolor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 "
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
              <a
                href="https://www.linkedin.com/in/prashant2403/"
                className="flex flex-row items-center justify-start gap-0.5 transition-all text-zinc-300 hover:text-zinc-500 hover:gap-2 active:text-cyan-500  font-[500] text-lg"
              >
                <span>LinkedIn</span>
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
                  className="w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="font-bold flex items-center justify-start text-2xl text-zinc-300 mb-5">
            Projects
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-0 p-1 ">
            {projects.map((project, index) => (
              <ProjectCard
                tags={project.tags}
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </section>
        <section className="md:mb-24 mb-4 flex flex-col gap-3 ">
          <div className="bg-dot-black/[0.1] dark:bg-dot-white/[0.1]">
            <div className="items-center justify-between sm:flex">
              <div>
                <a href="#my-tech-stack">
                  <h2
                    className="text-3xl font-semibold tracking-tighttext-zinc-100"
                    id="my-tech-stack"
                  >
                    My Tech Stack
                  </h2>
                </a>
                <p className="mt-2 text-base text-zinc-600 ">
                  Technologies that I use to get the job done.
                </p>
              </div>

            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <div className="group/techitem relative w-full space-y-4 divide-y divide-dashed divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-100 p-6 dark:divide-zinc-700/40 dark:border-zinc-700/40 sm:flex-1">
                <h3 className="flex text-sm font-semibold text-zinc-700 ">
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
                    className="lucide lucide-monitor-smartphone h-6 w-6 flex-none"
                  >
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                    <path d="M10 19v-3.96 3.15"></path>
                    <path d="M7 19h5"></path>
                    <rect width="6" height="10" x="16" y="12" rx="2"></rect>
                  </svg>
                  <span className="ml-3">Frontend</span>
                </h3>
                <ul className="flex flex-wrap items-center gap-4 pt-4 sm:block sm:space-y-2">
                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#61DAFB] group-hover:stroke-[#61DAFB]"
                      >
                        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      React
                    </span>
                  </li>
                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#000000] dark:group-hover:text-white group-hover:stroke-[#000000] dark:group-hover:stroke-white"
                      >
                        <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                        <path d="M15 12v-3"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      Next.js
                    </span>
                  </li>
                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#06B6D4] group-hover:stroke-[#06B6D4] group-hover:fill-[#06B6D4]"
                      >
                        <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      TailwindCSS
                    </span>
                  </li>
                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#0055FF] group-hover:stroke-[#0055FF] group-hover:fill-[#0055FF]"
                      >
                        <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                        <path d="M20 12l-8 8l-4 -4"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      Framer Motion
                    </span>
                  </li>

                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0.1px"
                        viewBox="0 0 50 50"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#3178C6] group-hover:stroke-[#3178C6] group-hover:fill-[#3178C6]"
                      >
                        <path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      Typescript
                    </span>
                  </li>


                </ul>
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
                  className="lucide lucide-monitor-smartphone absolute -bottom-6 -right-6 -z-10 h-32 w-32 rotate-[30deg] stroke-[0.8px] opacity-5 transition-all group-hover/techitem:rotate-[35deg]"
                >
                  <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                  <path d="M10 19v-3.96 3.15"></path>
                  <path d="M7 19h5"></path>
                  <rect width="6" height="10" x="16" y="12" rx="2"></rect>
                </svg>
              </div>
              <div className="group/techitem relative w-full space-y-4 divide-y divide-dashed divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-100 p-6 dark:divide-zinc-700/40 dark:border-zinc-700/40 sm:flex-1">
                <h3 className="flex text-sm font-semibold text-zinc-700 dark:text-zinc-300">
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
                    className="lucide lucide-server h-6 w-6 flex-none"
                  >
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" x2="6.01" y1="6" y2="6"></line>
                    <line x1="6" x2="6.01" y1="18" y2="18"></line>
                  </svg>
                  <span className="ml-3">Backend</span>
                </h3>
                <ul className="flex flex-wrap items-center gap-4 pt-4 sm:block sm:space-y-2">
                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0.1px"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#339933] group-hover:stroke-[#339933] group-hover:fill-[#339933]"
                      >
                        <title>Node.js</title>
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      Node.js
                    </span>
                  </li>
                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0.1px"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#000000] group-hover:stroke-[#000000] group-hover:fill-[#000000]  dark:group-hover:text-white dark:group-hover:stroke-white dark:group-hover:fill-white"
                      >
                        <title>Express</title>
                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      Express.js
                    </span>
                  </li>

                </ul>
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
                  className="lucide lucide-server absolute -bottom-6 -right-6 -z-10 h-32 w-32 rotate-[30deg] stroke-[0.8px] opacity-5 transition-all group-hover/techitem:rotate-[35deg]"
                >
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                  <line x1="6" x2="6.01" y1="6" y2="6"></line>
                  <line x1="6" x2="6.01" y1="18" y2="18"></line>
                </svg>
              </div>
              <div className="group/techitem relative w-full space-y-4 divide-y divide-dashed divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-100 p-6 dark:divide-zinc-700/40 dark:border-zinc-700/40 sm:flex-1">
                <h3 className="flex text-sm font-semibold text-zinc-700 dark:text-zinc-300">
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
                    className="lucide lucide-database h-6 w-6 flex-none"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                  <span className="ml-3">Databases</span>
                </h3>
                <ul className="flex flex-wrap items-center gap-4 pt-4 sm:block sm:space-y-2">
                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        role="img"
                        strokeWidth="0.1px"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#4479A1] group-hover:stroke-[#4479A1] group-hover:fill-[#4479A1]"
                      >
                        <title>MySQL</title>
                        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      MySQL
                    </span>
                  </li>


                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#47A248] group-hover:stroke-[#47A248] group-hover:fill-[#47A248]"
                      >
                        <title>MongoDB</title>
                        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      MongoDB
                    </span>
                  </li>
                </ul>
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
                  className="lucide lucide-database absolute -bottom-6 -right-6 -z-10 h-32 w-32 rotate-[30deg] stroke-[0.8px] opacity-5 transition-all group-hover/techitem:rotate-[35deg]"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
              </div>
              <div className="group/techitem relative w-full space-y-4 divide-y divide-dashed divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-100 p-6 dark:divide-zinc-700/40 dark:border-zinc-700/40 sm:flex-1">
                <h3 className="flex text-sm font-semibold text-zinc-700 dark:text-zinc-300">
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
                    className="lucide lucide-workflow h-6 w-6 flex-none"
                  >
                    <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                    <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                    <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                  </svg>
                  <span className="ml-3">DevOps</span>
                </h3>
                <ul className="flex flex-wrap items-center gap-4 pt-4 sm:block sm:space-y-2">

                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0.1px"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#2496ED] group-hover:stroke-[#2496ED] group-hover:fill-[#2496ED]"
                      >
                        <title>Docker</title>
                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      Docker
                    </span>
                  </li>
                  <li className="group flex select-none items-center space-x-2">
                    <span>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0.1px"
                        className="h-6 w-6 transition md:h-6 md:w-6 text-zinc-600 group-hover:scale-150 group-hover:text-[#F05032] group-hover:stroke-[#F05032] group-hover:fill-[#F05032]"
                      >
                        <title>Git</title>
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white">
                      Git
                    </span>
                  </li>
                </ul>
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
                  className="lucide lucide-workflow absolute -bottom-6 -right-6 -z-10 h-32 w-32 rotate-[30deg] stroke-[0.8px] opacity-5 transition-all group-hover/techitem:rotate-[35deg]"
                >
                  <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                  <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                  <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
