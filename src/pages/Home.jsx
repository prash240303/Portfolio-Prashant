import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { slideAnimation } from "../config/motion";
import Experience from "../components/Experience";
import Profile from "../components/Profile";

function ProjectCard({ title, year, description, image, githubUrl }) {
  return (
    <a href={githubUrl} target="_blank">
      <div className="p-5 mb-3 flex flex-col items-center justify-center cursor-pointer rounded-3xl custom-gradient transition-all ease-in-out ">
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

function Home() {
  // const [shouldAnimate, setShouldAnimate] = useState(false);

  // const variants = slideAnimation("home", " ");

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShouldAnimate(true);
  //   }, 0); 

  //   return () => clearTimeout(timeout);
  // }, []);

  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/prash240303" , urlTitle: "@prash240303"},
    { name: "Twitter", url: "https://twitter.com/prash2403",  urlTitle: "@prash2403" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prashant-012927227/",  urlTitle: "prashant-012927227" },
    { name: "Resume", url: "/resume",  urlTitle: "Resume" },
  ];

  const projects = [
    {
      title: "Iconify Icons",
      year: "2023",
      description: "A free svg icons hosting website build on React.js",
      image: "./projects/iconify.png",
      githubUrl: "https://github.com/prash240303/Iconify-Icons",
    },
    {
      title: "Pixel perfect confrence website",
      year: "2023",
      description: "confrence website frontend made for Pixel Perfect Hackathon",
      image: "./projects/confrence.png",
      githubUrl: "https://pixel-perfect-website-team-zenith.vercel.app/",
    },
    {
      title: "Minecraft Clone",
      year: "2023",
      description: "A minecraft clone build with 3.js with 5 available block textures",
      image: "./projects/minecraft.png",
      githubUrl: "https://github.com/prash240303/Minecraft-Clone-3.js",
    },
    {
      title: "Gradify Gradients",
      year: "2023",
      description: "A figma plugin to generate beautiful linear and mesh gradients",
      image: "./projects/gradify.png",
      githubUrl: "https://github.com/prash240303/Gradify-Figma-plugin",
    },
    {
      title: "Vans Life",
      year: "2023",
      description: "An awesome app for renting decked-out travel vans for your next road trip adventure! 🚐",
      image: "./projects/vanslife.png",
      githubUrl: "https://github.com/prash240303/React-Router-miniwebsite",
    },
    {
      title: "TRAVEL CREW - A Flutter App Built with Appwrite ",
      year: "2023",
      description: "A flutter app built on Appwrite cloud to find travel partners",
      image: "./projects/travelcrew.png",
      githubUrl: "https://github.com/YuvrajSingh3110/travel_crew",
    },
    {
      title: "Equilibria ",
      year: "2023",
      description: "A Kotlin app build to manage your daily schedule",
      image: "./projects/equilbria.png",
      githubUrl: "https://github.com/prash240303/equilibria",
    },
  ];

  return (
    <>
      {/* <AnimatePresence>
      {shouldAnimate && (
        <motion.div
            key="initial"
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            variants={variants}
            className="view-container mt-6 w-[900px] grid grid-col-1 item-start justify-start gap-12"
        > */}
        
        <div className="view-container w-[900px] grid grid-col-1 item-start justify-start gap-12">
        <Profile/>
          <main className="hero-section" id="hero">
            <section className="my-8 py-4">
              <h2 className="about-heading leading-snug font-medium text-2xl text-zinc-300">
                About me
              </h2>
              <div className="about-content-wrapper leading-6 text-base font-light text-zinc-100 mt-4">
                <p>
                  Hey! I am an engineer , learning how to
                  build and design scalable websites and applications. My focus
                  is to build with better user experience, design aesthetic,
                  good developer experience and meaningful impact.
                </p>
              </div>
              <div className="rounded-lg bg-[#333333cc] text-zinc-100 border-[2px] border-[#ffffff14] text-base font-normal p-4 leading-6 mt-6 ">
                <p>
                  I am currently looking for part-time engineering roles, which
                  involves user interface and experience design, frontend
                  engineering as the core.
                </p>
                <p className="mt-2 mb-4 ">
                  A group of engineers and designers are working together in a
                  collaborative effort to construct exceptional products. I am
                  highly interested in collaborating with you. Feel free to
                  contact me.
                </p>
                <div className="flex flex-row items-center justify-start gap-7">
                  <a
                    href="/resume"
                    className="flex flex-row items-center justify-start gap-0.5 transition-all text-zinc-300 hover:text-zinc-500 hover:gap-2 active:text-cyan-500  font-[500] text-lg"
                  >
                    <span>Resume</span>
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
                  <a
                    href="https://www.linkedin.com/in/prashant-012927227/"
                    className="flex flex-row items-center justify-start gap-0.5 transition-all text-zinc-300 hover:text-zinc-500 hover:gap-2 active:text-cyan-500  font-[500] text-lg"
                  >
                    <span>LinkedIn</span>
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
                </div>
              </div>
            </section>

            {/* <section className="experience-section grid grid-cols-1 justify-start gap-4">
              <h2 className="about-heading leading-snug font-medium text-base text-zinc-100">
                worked as
              </h2>
              <section className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8 text-white">
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
            </section> */}

          <section>
          <div className="font-bold flex items-center justify-start text-2xl text-zinc-300 mb-5">
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
          </section>
            <section className="contacts-section grid grid-cols-1 justify-start gap-4 md:mb-0 mb-10">
              <h2 className="contact-heading leading-snug font-medium text-base text-zinc-100 mt-12 normal-case">
                Contact, Socials.
              </h2>
              <section className="project-item-list-wrapper m-4 mb-20 grid grid-cols-1 justify-start gap-4">
                <div className="flex flex-col items-start justify-start gap-7">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-100 hover:gap-1 active:text-white text-sm font-normal text-zinc-500"
                      target="_blank"
                    >
                      <span className=" mr-2 text-white text-base">
                        {link.name} 
                      </span>
                      <span >{link.urlTitle}</span>
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
                  ))}
                </div>
              </section>
            </section>
          </main>
        </div>
         {/* </motion.div>
      )}
 </AnimatePresence> */}
    </>
  );
}

export default Home;
