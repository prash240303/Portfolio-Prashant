import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../config/motion";
import Experience from "../components/Experience";
import Profile from "../components/Profile";

function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const variants = slideAnimation("home", " ");

  // Set shouldAnimate to true after the component has mounted
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 0); // No delay, set immediately after the component has mounted

    return () => clearTimeout(timeout);
  }, []);

  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/prash240303" , urlTitle: "@prash240303"},
    { name: "Twitter", url: "https://twitter.com/prash2403",  urlTitle: "@prash2403" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prashant-012927227/",  urlTitle: "prashant-012927227" },
    { name: "Resume", url: "portfolio-prash.vercel.app/resume",  urlTitle: "Resume" },
  ];
  return (
    <>
      {/* <AnimatePresence> */}
      {shouldAnimate && (
        // <motion.div
        //     key="initial"
        //     initial={variants.initial}
        //     animate={variants.animate}
        //     exit={variants.exit}
        //     variants={variants}
        //     className="view-container mt-6 w-[900px] grid grid-col-1 item-start justify-start gap-12"
        // >
        <div className="view-container w-[900px] grid grid-col-1 item-start justify-start gap-12">
          <main className="hero-section" id="hero">
            <section className="my-8 py-4">
              <h2 className="about-heading leading-snug font-medium text text-zinc-300">
                About me
              </h2>
              <div className="about-content-wrapper leading-6 text-base font-light text-zinc-100 mt-4">
                <p>
                  Hey! I am an engineer (sometimes a designer), learning how to
                  build and design scalable websites and applications. My focus
                  is to build with better user experience, design aesthetic,
                  good developer experience and meaningful impact.
                </p>
              </div>
              <div className="rounded-lg bg-[#333333cc] text-zinc-100 border-[2px] border-[#ffffff14] text-base font-normal p-4 leading-6 mt-6 ">
                <p>
                  I am currently open for full-time engineering roles, which
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
                    href=""
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
                    href=""
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

            <section className="experience-section grid grid-cols-1 justify-start gap-4">
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
            </section>
            <section className="contacts-section grid grid-cols-1 justify-start gap-4">
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
        // </motion.div>
      )}
      {/* </AnimatePresence> */}
    </>
  );
}

export default Home;
