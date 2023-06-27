import React from "react";

function Experience({ role, companyName, companyLink ,timeLine,  descLine1 ,descLine2 }) {
  return (
    <div className="experience-item border-l-2 pl-4 border-zinc-600 hover:border-zinc-100 cursor-default transition-all">
      <div className="flex flex-row items-start justify-between max-md:flex-col max-md:justify-start max-md:gap-2 max-sm:w-[320px]">
        <span>
          <h3 className="experience-title font-normal text-zinc-200 capitalize w-[46ch] max-md:w-[30ch]">
            {role}
          </h3>
          <p className="experience-org-details-wrapper text-sm flex flex-row items-center justify-start gap-1.5">
            at,
            <a
              className="flex flex-row items-center justify-start gap-0.5 transition-all text-zinc-100 hover:text-zinc-500 hover:gap-1 active:text-zinc-800 font-normal text-sm"
              target="_blank"
              href={companyLink}
            >
              <span className="link-text-content-wrapper">{companyName}</span>
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
          </p>
        </span>
        <p className="experience-status font-medium text-zinc-500 text-base">
          {timeLine}
        </p>
      </div>
      <ul className="experience-description-list-content-wrapper mt-4 flex flex-col items-start justify-start gap-2 pl-3">
        <li className="font-normal text-zinc-400 text-sm list-disc list-outside">
          {descLine1}
        </li>
        <li className="font-normal text-zinc-400 text-sm list-disc list-outside">
          {descLine2}
        </li>
      </ul>
    </div>
  );
}

export default Experience;
