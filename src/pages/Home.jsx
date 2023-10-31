import { useState, useEffect } from "react";

import Profile from "../components/Profile";
import "../Styles/Home.css" // Create a new CSS file for Home component styles
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";
import languagesAndTools from "../data/Languages";
import socialLinks from "../data/links";
import { Link } from "react-router-dom";
function Home() {

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
      const timeout = setTimeout(() => {
      setShowContent(true); // Trigger the fade-in effect after a delay
    }, 500); // Adjust the delay duration as needed (in milliseconds)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={`view-container hero-section ${showContent ? 'fade-in' : ''}  grid grid-col-1 item-start justify-start gap-12`}>        <Profile />
        <section className="md:my-8 my-0 py-4">
          <h2 className="about-heading leading-snug font-medium text-2xl text-zinc-300">
            About me
          </h2>
          <div className="about-content-wrapper leading-6 text-base font-light text-zinc-100 mt-4">
            <p>
              Hey! I am an engineer , learning how to build and design scalable websites and applications. My focus is to build with better user experience, design aesthetic, good developer experience and meaningful impact.
            </p>
          </div>
          <div className="rounded-lg bg-[#333333cc]  text-zinc-100   border-[2px] border-[#ffffff14] text-base font-normal p-4 leading-6 mt-6 ">
            <p>
              I am currently looking for part-time engineering roles, which involves user interface and experience design, frontend engineering as the core.
            </p>
            <p className="mt-2 mb-4 ">
              A group of engineers and designers are working together in a collaborative effort to construct exceptional products. I am
              highly interested in collaborating with you. Feel free to contact me.
            </p>
            <div className="flex flex-row items-center justify-start gap-7">
              <Link
                to="/resume"
                className="flex flex-row items-center justify-start gap-0.5 transition-all text-zinc-300 hover:text-zinc-500 hover:gap-2 active:text-cyan-500  font-[500] text-lg"
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"

                  stroke="currentcolor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 "
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
              <a
                href="https://www.linkedin.com/in/prashant2403/"
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

        <section>
          <div className="font-bold flex items-center justify-start text-2xl text-zinc-300 mb-5">
            Projects
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-0 p-1 text-white">
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
        <section>
          <div className="font-bold flex items-center justify-start text-2xl text-zinc-300 mb-5">
            Languages and Tools
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {languagesAndTools.map((group, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 md:mt-0 mt-4 text-white">
                  <img src={group.icon} alt="icon" className="w-5 h-5" />
                  <span className="font-semibold">{group.group}</span>
                </div>
                <ul className="grid grid-cols-1 gap-2 mt-3">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                <Link
                  key={index}
                  to={link.url}
                  className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-100 hover:gap-1 active:text-white text-sm font-normal text-zinc-500"
                  target="_blank"
                  rel="noreferrer"
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
                </Link>
              ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Home;
