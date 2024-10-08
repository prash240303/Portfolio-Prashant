import PropTypes from 'prop-types';

const Experience = ({ role, companyName, companyLink, timeLine, descriptions }) => {
  return (
    <div className="experience-item border-l-2 w-f pl-4 border-zinc-600   hover:border-zinc-100  transition-all">
      <div className="flex  items-start  justify-between  max-md:flex-col max-md:justify-start ">
        <div className="mb-4">
          <h3 className="experience-title font-normal text-lg text-zinc-300 capitalize w-full   md:w-[30ch] mb-1">
            {role}
          </h3>
          <p className="experience-org-details-wrapper w-full  text-lg flex flex-row items-center justify-start gap-1.5">
            <a
              className="flex flex-row items-center justify-start gap-0.5 transition-all text-white hover:text-zinc-500 hover:gap-1 active:text-zinc-800 font-normal text-lg"
              target="_blank"
              href={companyLink}
              rel="noreferrer"
              aria-label={`Visit ${companyName}`}
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
        </div>
        <div className="font-medium text-zinc-500 w-full text-right text-base">{timeLine}</div>
      </div>
      <ul className="experience-description-list-content-wrapper w-fit flex flex-col items-start justify-start gap-2 pl-3 list-none">
        {descriptions.map((desc, index) => (
          <li key={index} className="font-normal overflow-hidden md:w-full w-[220px]   text-zinc-400 md:text-base text-sm list-outside">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

Experience.propTypes = {
  role: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyLink: PropTypes.string.isRequired,
  timeLine: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;

