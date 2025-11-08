"use client";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

interface prop {
  isHomeView: boolean;
}

export default function WorkExperience({ isHomeView }: prop) {
  return (
    <>
      <div
        className={`mb-8 flex items-center justify-between ${
          isHomeView ? "mt-16" : "mt-0"
        }`}
      >
        <h1 className="text-3xl font-bold tracking-tight">my work</h1>

        <Link
          href="https://drive.google.com/file/d/1YurYayR7ggCCYNwXq-3PLcR6NYzJFgn4/view?usp=sharing"
          target="_blank"
          className="flex items-center justify-around gap-3 rounded-xl border-2 border-dashed border-black bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-none hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none dark:border-white dark:bg-black dark:text-gray-400 dark:hover:shadow-[4px_4px_0px_white]"
        >
          View Resume
          <ChevronRight className="size-5 stroke-black dark:stroke-gray-400" />
        </Link>
      </div>
      
      <div className="space-y-5">
        <p>
          Exploring new technologies and creating engaging web experiences,
          while continuously learning and growing as a developer.
        </p>
        <p>Here's a snapshot of my journey so far.</p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* BPCL Section */}
      <div className="space-y-6 text-sm">
        <div className="space-y-2">
          <Link
            href="https://www.bharatpetroleum.in/"
            target="_blank"
            className="group flex items-center justify-start gap-3 overflow-hidden"
          >
            <h2 className="text-2xl font-semibold">Bharat Petroleum Corporation Limited .</h2>

            <div className="relative size-5 -translate-x-4 -translate-y-1 overflow-hidden">
              <ArrowUpRight className="size-5 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-5 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Management Trainee | July '25 - Present
          </p>
        </div>

        <p>
          At BPCL, I am working with Software Management Team as a Technical Developer.
        </p>
        
        <ul className="list-inside list-disc space-y-2 leading-relaxed">
          <li>Develop and maintain PowerShell/Batch scripts for automated software deployment, GPO enforcement, and security incident response across enterprise endpoints</li>
          <li>Administer endpoint security and configuration through Microsoft Intune, Azure AD, and Microsoft 365 Admin Center, including device enrollment, compliance policies, and conditional access</li>
          <li>Manage hybrid identity infrastructure using Active Directory and Azure AD Connect, implementing user provisioning, group policies, and RBAC controls</li>
        </ul>
      </div>

      {/* RaptorX Section */}
      <div className="mt-12 space-y-6 text-sm">
        <div className="space-y-2">
          <Link
            href="https://raptorx.ai"
            target="_blank"
            className="group flex items-center justify-start gap-3 overflow-hidden"
          >
            <h2 className="text-2xl font-semibold">RaptorX.ai .</h2>

            <div className="relative size-5 -translate-x-4 -translate-y-1 overflow-hidden">
              <ArrowUpRight className="size-5 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-5 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Frontend Developer | January '25 - June '25
          </p>
        </div>

        <p className="leading-relaxed">
          At RaptorX, a fraud detection and prevention platform, I contributed
          as a Frontend Developer:
        </p>
        
        <ul className="list-inside list-disc space-y-2 leading-relaxed">
          <li>Engineered responsive landing page and core web application.</li>
          <li>
            Implemented fraud analyst-centric features: Entity Relationship
            View, Alerts and Case Management workflow and reporting, and Role
            Based Access System Integration.
          </li>
          <li>
            Optimized for mobile devices to enhance accessibility and user
            experience.
          </li>
          <li>
            Contributed to Frontend development using React.JS, Next.js and
            modern web technologies.
          </li>
        </ul>
        
        <p className="mt-4 leading-relaxed">
          This project deepened my expertise in Figma, Framer Motion, and
          Next.js, aligning with industry standards.
        </p>
      </div>

      {!isHomeView && (
        <>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

          <p className="mt-6 leading-relaxed">
            I'm constantly learning and experimenting with new
            technologies. Stay tuned for more exciting projects and experiences
            coming soon...
          </p>
        </>
      )}
    </>
  );
}