import React from 'react';

interface ExperienceProps {
  role: string;
  companyName: string;
  companyLink: string;
  timeLine: string;
  descriptions: string[];
}

const Experience = ({ role, companyName, companyLink, timeLine, descriptions }: ExperienceProps) => {
  return (
    <div className="experience-item border-l-2 w-full pl-4 border-gray-300 dark:border-zinc-600 hover:border-black dark:hover:border-zinc-100 transition-all">
      <div className="flex flex-row items-start justify-between max-md:flex-col max-md:justify-start">
        <div className="mb-4">
          <h3 className="experience-title font-normal  text-gray-600 dark:text-zinc-300 capitalize w-full md:w-[30ch] mb-1">
            {role}
          </h3>
          <p className="experience-org-details-wrapper w-full text-lg flex flex-row items-center justify-start gap-1.5">
            <a
              className="flex flex-row items-center justify-start gap-0.5 transition-all text-black dark:text-white hover:text-gray-500 dark:hover:text-zinc-500 hover:gap-1 active:text-gray-700 dark:active:text-zinc-800 font-normal text-lg"
              target="_blank"
              href={companyLink}
              rel="noreferrer"
              aria-label={`Visit ${companyName}`}
            >
              <span className="link-text-content-wrapper font-semibold">{companyName}</span>
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
        </div>
        <div className="font-medium text-gray-400 dark:text-zinc-500 w-full text-right text-base">{timeLine}</div>
      </div>
      <ul className="experience-description-list-content-wrapper w-fit flex flex-col items-start justify-start gap-2 pl-3 list-none">
        {descriptions.map((desc, index) => (
          <li key={index} className="font-normal overflow-hidden md:w-full w-[300px] text-gray-700 dark:text-zinc-400 text-base list-outside">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
