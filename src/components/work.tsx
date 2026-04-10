"use client";
import { ArrowUpRight, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Divider from "./ui/Divider";

interface prop {
  isHomeView: boolean;
}

export default function WorkExperience({ isHomeView }: prop) {
  const [bpclOpen, setBpclOpen] = useState(false);
  const [raptorOpen, setRaptorOpen] = useState(false);

  return (
    <>
      <div
        className={`mb-8 w-full flex items-center justify-between ${
          isHomeView ? "mt-16" : "mt-0"
        }`}
      >
        <h1 className="text-3xl font-instrumentSerif font-medium tracking-tight">
          Professional Experience
        </h1>

        <Link
          href="https://drive.google.com/file/d/1YurYayR7ggCCYNwXq-3PLcR6NYzJFgn4/view?usp=sharing"
          target="_blank"
          className="flex items-center font-instrumentSerif justify-center w-fit text-nowrap gap-1  rounded-xl border-2 border-dashed border-black bg-white px-3 md:py-1 py-2 md:text-lg text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-none hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none dark:border-white dark:bg-darkBg dark:text-gray-200 dark:hover:shadow-[4px_4px_0px_white]"
        >
          View Resume
          <ChevronRight className="size-5 stroke-black dark:stroke-gray-100" />
        </Link>
      </div>

      <div className=" w-full space-y-5">
        <p>
          Exploring new technologies and creating engaging web experiences,
          while continuously learning and growing as a developer.
        </p>
        <p>Here&apos;s a snapshot of my journey so far.</p>
      </div>

      {/* BPCL Section */}
      <div className="w-full space-y-6 mt-6 md:mt-8 text-sm">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Link
              href="https://en.wikipedia.org/wiki/Bharat_Petroleum"
              target="_blank"
              className="group flex items-center justify-start gap-2 overflow-hidden"
            >
              <h1 className="md:text-lg inline-block text-base font-semibold">
                Bharat Petroleum Corporation Limited
                <span className="hidden ml-2 md:inline-block">.</span>
              </h1>
              <div className="relative hidden md:block size-5 -translate-x-4 -translate-y-1 overflow-hidden">
                <ArrowUpRight className="size-5 ml-1 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
                <ArrowUpRight className="relative ml-1 size-5 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
              </div>
            </Link>

            <button
              onClick={() => setBpclOpen((prev) => !prev)}
              className="ml-2 shrink-0 rounded-md p-1 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle BPCL description"
            >
              <ChevronDown
                className={`size-5 transition-transform duration-300 ${
                  bpclOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Management Trainee | July &apos;25 - Present
          </p>
        </div>

        {/* bpcl work desc */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            bpclOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p>
            At BPCL, I am working with Software Management Team as a Technical
            Developer.
          </p>
          <ul className="list-inside list-disc mt-2 space-y-2 leading-relaxed">
            <li>
              Administer endpoint security and configuration through Microsoft
              Intune, Azure AD, and Microsoft 365 Admin Center, compliance
              policies, and conditional access
            </li>
          </ul>
        </div>
      </div>

      <Divider />

      {/* RaptorX Section */}
      <div className="w-full space-y-6 mt-3 md:mt-6 text-sm">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Link
              href="https://raptorx.ai"
              target="_blank"
              className="group flex items-center justify-start gap-2 overflow-hidden"
            >
              <h2 className="text-lg font-semibold">RaptorX.ai .</h2>
              <div className="relative size-5 -translate-x-4 -translate-y-1 overflow-hidden">
                <ArrowUpRight className="size-5 ml-1 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
                <ArrowUpRight className="relative size-5 ml-1 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
              </div>
            </Link>

            <button
              onClick={() => setRaptorOpen((prev) => !prev)}
              className="ml-2 shrink-0 rounded-md p-1 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle RaptorX description"
            >
              <ChevronDown
                className={`size-5 transition-transform duration-300 ${
                  raptorOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Frontend Developer | January &apos;25 - June &apos;25
          </p>
        </div>

        {/* raptorx work desc */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            raptorOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="leading-relaxed">
            At RaptorX, a fraud detection and prevention platform, I contributed
            as a Frontend Developer:
          </p>
          <ul className="list-inside list-disc mt-2 space-y-2 leading-relaxed">
            <li>
              Engineered responsive landing page and core web application.
            </li>
            <li>
              Implemented fraud analyst-centric features: Entity Relationship
              View, Alerts and Case Management workflow and reporting, and Role
              Based Access System Integration.
            </li>
            <li>
              Optimized product dashboard for mobile devices and other dynamic
              views to enhance accessibility and user experience.
            </li>
            <li>
              Contributed to Frontend development using React.JS, Next.js and
              various UI libraries and custom components.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
