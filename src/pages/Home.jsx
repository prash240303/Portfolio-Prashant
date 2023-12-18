import { useState, useEffect } from "react";

// import Profile from "../components/Profile";
import "../Styles/Home.css" // Create a new CSS file for Home component styles
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";
import languagesAndTools from "../data/Languages";
// import socialLinks from "../data/links";
import { Link } from "react-router-dom";
import Landing from "../components/Landing";
function Home() {

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 500); // Adjust the delay duration as needed (in milliseconds)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={`view-container hero-section ${showContent ? 'fade-in' : ''}  grid grid-cols-1 item-start justify-start`}>
        {/* <Profile /> */}
        <Landing />
        <section className="md:my-8 my-4 py-4">
          <div className="about-content-wrapper leading-6 text-lg text-center font-light text-zinc-100 md:px-0 px-2 mt-6">
            <p>
              {"Hello! I'm an student/engineer focused on building scalable products with a strong emphasis on user experience, design, developer experience, and meaningful impact." }            </p>
          </div>
          <div className="rounded-lg bg-[#333333cc]  text-zinc-100   border-[2px] border-[#ffffff14] text-base font-normal p-4 leading-6 mt-12 ">
            <p>
              I am actively seeking part-time engineering roles that revolve around user interface and experience design, with a focus on frontend engineering.     </p>
            <p className="mt-2 mb-4 ">
              A dynamic team of engineers and designers is collaboratively crafting exceptional products. I am eager to contribute and collaborate with your team. Please feel free to reach out to me.
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
        <section className="md:mb-24 mb-4 flex flex-col gap-3 ">
          <div className="font-semibold  flex items-center justify-start mb-4 text-4xl text-zinc-300 ">
            Languages and Tools
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {languagesAndTools.map((group, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 md:mt-0 mt-4 text-white">
                  <img src={group.icon} alt="icon" className="w-6 h-6" />
                  <span className="font-normal text-lg">{group.group}</span>
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

      </div>
    </>
  );
}

export default Home;
