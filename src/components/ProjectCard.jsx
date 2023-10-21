import PropTypes from 'prop-types';

const ProjectCard = ({ title, year, description, image, githubUrl }) => {
  return (
    <a href={githubUrl} target="_blank" rel="noreferrer">
      <div className="p-5 mb-3 flex flex-col items-center justify-center cursor-pointer rounded-3xl custom-gradient transition-all ease-in-out">
        <div className="image-container rounded-xl">
          <img src={image} className="rounded-xl" alt="project image" />
        </div>
        <div className="label w-fill flex flex-col items-start justify-start mt-[6px]">
          <div className="text-lg font-semibold my-1">{title}</div>
          <div className="text-sm opacity-30 leading-tight md:mb-0 mb-3">{year}</div>
          <div className="text-[15px] mt-2 w-fit font-light opacity-60 leading-snug">
            {description}
          </div>
        </div>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
