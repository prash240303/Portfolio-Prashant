import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { slideAnimation } from "../config/motion";
import "../Styles/Work.css";
import Experience from "../components/Experience";

// function ProjectCard({ title, year, description, image, githubUrl }) {
//   return (
//     <a href={githubUrl} target="_blank">
//       <div className="p-5 mb-3 flex flex-col items-center justify-center cursor-pointer rounded-3xl hover:bg-zinc-700 transition-all ease-linear">
//         <div className="image-container rounded-xl">
//           <img src={image} className="rounded-xl" alt="project image" />
//         </div>
//         <div className="label w-fill flex flex-col items-start justify-start mt-[6px]">
//           <div className="text-lg font-semibold my-1">{title}</div>
//           <div className="text-sm opacity-30 leading-tight md:mb-0 mb-3">
//             {year}
//           </div>
//           <div className="text-[15px] mt-2 w-fit font-light opacity-60 leading-snug">
//             {description}
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }

function Work() {
  // const variants = slideAnimation("projects", "home");

  // const projects = [
  //   {
  //     title: "Iconify Icons",
  //     year: "2023",
  //     description: "A free svg icons hosting website build on React.js",
  //     image: "./projects/iconify.png",
  //     githubUrl: "https://github.com/prash240303/React-Router-miniwebsite",
  //   },
  //   {
  //     title: "Minecraft Clone",
  //     year: "2023",
  //     description: "A minecraft clone build with 3.js with 5 available block textures",
  //     image: "./projects/minecraft.png",
  //     githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
  //   },
  //   {
  //     title: "Gradify Gradients",
  //     year: "2023",
  //     description: "A figma plugin made with typescript to generate beautiful linear and mesh gradients",
  //     image: "./projects/gradify.png",
  //     githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
  //   },
  //   {
  //     title: "Vans Life",
  //     year: "2023",
  //     description: "An awesome app for renting decked-out travel vans for your next road trip adventure! 🚐",
  //     image: "./projects/vanslife.png",
  //     githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
  //   },
  //   {
  //     title: "TRAVEL CREW - A Flutter App Built with Appwrite ",
  //     year: "2023",
  //     description: "A flutter app built on Appwrite cloud to find travel partners",
  //     image: "./projects/travelcrew.png",
  //     githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
  //   },
  //   {
  //     title: "Equilibria ",
  //     year: "2023",
  //     description: "A Kotlin app build to manage your daily schedule",
  //     image: "./projects/equilbria.png",
  //     githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
  //   },
  // ];

  return (
    <>
      {/* <div className="view-container mt-6 w-[900px] grid grid-col-1 mb-[100px] gap-12">
        <div className="font-bold flex items-center justify-center text-3xl text-white mb-5">
          Projects
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-1 text-white">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              year={project.year}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div> */}
      <div className="view-container mt-6 w-[900px] grid grid-col-1 mb-[100px] gap-4">

        <h2 className="about-heading  mt-6 leading-snug font-medium text-2xl text-zinc-100">
        Work Experience
        </h2>
        <section className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8 text-white md:mb-10 mb-0 ">
          <Experience
            role="UI/UX designer"
            companyName="GDSC NITJ"
            companyLink="https://gdsc.community.dev/dr-b-r-ambedkar-national-institute-of-technology-nit-jalandhar/"
            timeLine="current"
            descLine1="organizing and hosting both online and offline events organized by GDSC NITJ, as well as providing mentorship to junior members."
            descLine2="contributed to the development of the clubs official website, held sessions on user interface and user experience design, and participated as a volunteer in the HackMOL 4.0 Hackathon."
          />
          <Experience
            role="Front end developer"
            companyName="VedVyas Foundation"
            companyLink="https://vedvyas.org/"
            timeLine="jan, 2023 - mar, 2023"
            descLine1="under the WINTER OF CODE: GDSC IIIT kalyani, I got to work on the open source Ved Vyas Foundation "
            descLine2="worked on the BhagavadGita.ai UI development and web design using reactjs and tailwind css"
          />
        </section>
      </div>
    </>
  );
}

export default Work;
