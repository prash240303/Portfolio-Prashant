import Image from 'next/image';
interface propTypes {
  title: string,
  year: string,
  description: string,
  image: string,
  githubUrl: string,
};

const ProjectCard = ({ title, year, description, image, githubUrl }: propTypes) => {
  return (
    <a href={githubUrl} target="_blank" rel="noreferrer">
      <div className="p-5 mb-3 flex flex-col items-center justify-center cursor-pointer rounded-3xl custom-gradient transition-all ease-in-out">
        <div className="image-container rounded-xl">
          <Image width={1000} height={1000} src={image} className="rounded-xl w-full h-[180px]" alt="project image" />
        </div>
        <div className="label w-full flex flex-col items-start justify-start mt-[6px]">
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


export default ProjectCard;
