// import Image from 'next/image';
// interface propTypes {
//   title: string,
//   year: string,
//   description: string,
//   image: string,
//   githubUrl: string,
// };

// const ProjectCard = ({ title, year, description, image, githubUrl }: propTypes) => {
//   return (
//     <a href={githubUrl} target="_blank" rel="noreferrer">
//       <div className="p-5 mb-3 flex flex-col items-center justify-center cursor-pointer rounded-3xl custom-gradient transition-all ease-in-out">
//         <div className="image-container rounded-xl">
//           <Image width={1000} height={1000} src={image} className="rounded-xl w-full h-[180px]" alt="project image" />
//         </div>
//         <div className="label w-full flex flex-col items-start justify-start mt-[6px]">
//           <div className="text-lg font-semibold my-1">{title}</div>
//           <div className="text-sm opacity-30 leading-tight md:mb-0 mb-3">{year}</div>
//           <div className="text-[15px] mt-2 w-fit font-light opacity-60 leading-snug">
//             {description}
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }


// export default ProjectCard;


import Image from 'next/image';

interface PropTypes {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  link: string;
}

const ProjectCard = ({ title, subtitle, tags, image, link }: PropTypes) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="p-6 mb-3 flex flex-col items-center justify-center cursor-pointer rounded-3xl bg-purple-100 transition-all ease-in-out">
        <div className="text-center w-full">
          <div className="text-xl font-bold">{title}</div>
          <div className="text-gray-600 mt-2">{subtitle}</div>
        </div>
        <div className="flex flex-row justify-center mt-4 gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="bg-purple-200 rounded-2xl p-2 text-purple-600 text-sm font-bold">
              {tag}
            </div>
          ))}
        </div>
        <div className="w-full border-2 border-purple-300 rounded-xl mt-4 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(108, 92, 231, 0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
        <div className="w-full bg-purple-100 h-px opacity-100 mt-4"></div>
        <div className="w-full mt-4 relative h-[180px]">
          <Image src={image} layout="fill" objectFit="contain" className="rounded-xl" alt="prescription image" />
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;

