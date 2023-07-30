import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../config/motion";
import "../Styles/Projects.css";

// ProjectCard component
function ProjectCard({ title, year, description, image, githubUrl }) {
  return (
    <a href={githubUrl} target="_blank">
      <div className="p-5 mb-3 flex flex-col items-center justify-center cursor-pointer rounded-3xl hover:bg-zinc-700 transition-all ease-linear">
        <div className="image-container rounded-xl">
          <img src={image} className="rounded-xl" alt="" />
        </div>
        <div className="label w-fill flex flex-col items-start justify-start mt-[6px]">
          <h3 className="text-base font-bold my-1">{title}</h3>
          <h4 className="text-[13px] opacity-30 leading-tight md:mb-0 mb-3">{year}</h4>
          <div className="text-[15px] w-fit font-normal opacity-60 leading-snug">
            {description}
          </div>
        </div>
      </div>
    </a>
  );
}

function Projects() {
  const variants = slideAnimation("projects", "home");

  // Array of project data
  const projects = [
    {
      title: "Iconify Icons",
      year: "2023",
      description: "A free svg icons hosting website build on React.js",
      image: "./projects/iconify.png",
      githubUrl: "https://github.com/prash240303/React-Router-miniwebsite",
    },
    {
      title: "Minecraft Clone",
      year: "2023",
      description: "A minecraft clone build with 3.js with 5 available block textures",
      image: "./projects/minecraft.png",
      githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
    },
    {
      title: "Gradify Gradients",
      year: "2023",
      description: "A figma plugin made with typescript to generate beautiful linear and mesh gradients",
      image: "./projects/gradify.png",
      githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
    },
    {
      title: "Vans Life",
      year: "2023",
      description: "An awesome app for renting decked-out travel vans for your next road trip adventure! 🚐",
      image: "./projects/vanslife.png",
      githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
    },
    {
      title: "TRAVEL CREW - A Flutter App Built with Appwrite ",
      year: "2023",
      description: "A flutter app built on Appwrite cloud to find travel partners",
      image: "./projects/travelcrew.png",
      githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
    },
    {
      title: "Equilibria ",
      year: "2023",
      description: "A Kotlin app build to manage your daily schedule",
      image: "./projects/equilbria.png",
      githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
    },
  ];

  return (
    <>
      <div className="view-container mt-6 w-[900px] grid grid-col-1 mb-[100px] gap-12">
        <div className="font-bold flex items-center justify-center text-3xl text-white mb-5">
          Projects
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-1 text-white">
          {/* Use map to render ProjectCard for each project */}
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
      </div>
    </>
  );
}

export default Projects;
