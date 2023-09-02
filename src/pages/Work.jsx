import React from "react"
import { useState, useEffect } from "react";
import "../Styles/Work.css";
import Experience from "../components/Experience";
import ScrollingImageCarousel from "../components/ScrollingImageCarousel";

function Work() {

  return (
    <>
      <div
        className="view-container mt-10 grid grid-col-1 mb-[100px] gap-4 ">
        <section className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8 text-white md:mb-10 mb-0">
          <div className="flex md:flex-row flex-col md:gap-5 gap-10 items-center justify-center md:mb-10 mb-4">
            <img
              src="./profile/profile_large.jpg"
              alt=""
              className="md:w-[200px] w-[200px] aspect-auto rounded-lg"
            />
            <div className="w-full text-base md:text-xl font-light text-gray-100">
              I am Prashant, a Web Front-end Developer building
              experiences for my passion for beautiful interfaces and UIs.
              <br className="mb-5" />
              I am a Btech undergraduate studying Computer Sciences from NIT Jalandhar.
              <br className="mb-5" />
              More than anything, I thrive amidst ambition, passionate
              curiosity, humility and joy. I seek brave teams where, together,
              we can create lasting and meaningful impact on people's lives, the
              society, and the world we live in.
            </div>
          </div>
        </section>
        <section className="md:mt-4 mt-0 md:w-[400px] w-[340px]  flex md:flex-row flex-col gap-10 justify-start text-white md:mb-0 mb-0">
          <div>
            <h2 className="leading-snug text-2xl text-zinc-100">
              Skills & Interests
            </h2>
            <section className="mt-4 text-base font-light text-white md:mb-10 mb-0">
              I like expanding and adapting my thought, skillset and processes
              to the changing problems and needs in the world around us. I
              thrive in ambitious, pro-active teams that value ethical product
              building and cultures that facilitate belonging.
              <br className="mb-2" />
              My development journey encompasses frontend development, coding, and software engineering. I have hands-on experience in building user-friendly interfaces, writing efficient code, and developing software solutions. 
              <br className="mb-2" />
              I have a passion for solving complex problems through coding and constantly expanding my knowledge in this domain.
              <br className="mb-2" />
              In my free time, I'll most likely be found in my room/garden listening to music
              while painting out my imagination, or watching anime in my cozy bed.

            </section>

            <section className="w-[400px] mt-4 text-zinc-300 md:mb-10 mb-0">
              <h2 className="md:mt-2 mt-10  mb-4 leading-snug font-medium text-2xl  text-zinc-100">
                Education
              </h2>
              <span className="font-semibold block text-xl text-white mb-2">
                Dr B R Ambedkar National Institute of Technology
              </span>
              2021 - 2025 · B.Tech in Computer Science and Engineering
            </section>
          </div>

          <div>
            <h2 className="mt-6 leading-snug font-medium text-2xl text-zinc-100">
              Work Experience
            </h2>
            <section className="experience-item-list-wrapper w-[420px] mt-4 grid grid-cols-1 justify-start gap-8 text-white md:mb-10 mb-0 ">
              <Experience
                role="UI/UX designer"
                companyName="GDSC NITJ"
                companyLink="https://gdsc.community.dev/dr-b-r-ambedkar-national-institute-of-technology-nit-jalandhar/"
                timeLine="sept , 2021 - current"
                descLine1="organizing and hosting events organized by GDSC NITJ, as well as providing mentorship to junior members."
                descLine2="contributed to the development of the clubs official website, and was organiser at HackMOL 4.0 Hackathon."
              />
              <Experience
                role="Front end developer"
                companyName="VedVyas Foundation"
                companyLink="https://vedvyas.org/"
                timeLine="jan - mar, 2023"
                descLine1="under the WINTER OF CODE: GDSC IIIT kalyani, I got to work on the open source Ved Vyas Foundation "
                descLine2="worked on the BhagavadGita.ai UI development and web design using reactjs and tailwind css"
              />
            </section>
          </div>
        </section>
        <section >
          <h2 className="md:mt-0 mt-5 mb-5 leading-snug font-medium text-2xl  text-zinc-100">
            Contact
          </h2>

          <div className="flex flex-col gap-1 mb-4">
            <span className="font-medium block  text-xl text-white ">
              Primary Email
            </span>
            prashantp.cs.21@nitj.ac.in
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-medium block text-xl text-white ">
              Secondary Email
            </span>
            prash2402@gmail.com
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-medium block text-xl text-white ">
              Twitter
            </span>
            @prash2403
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-medium block text-xl text-white">
              Linkedin
            </span>
            /prashant-012927227
          </div>
        </section>
        <section className="mb-20">
          <h2 className="md:mt-6 mt-10 leading-snug font-medium text-2xl text-zinc-100">
            Extra! Extra!
          </h2>
          Photography and creative arts are my passion as they fill my world with joy. Pursuing these interests allows me to nurture my imagination and think outside the box.
          <div
            className="image-carousel-container h-full"
            onMouseEnter={() => {
              // Disable scrolling when hovering over the carousel container
              document.body.style.overflow = 'hidden';
            }}
            onMouseLeave={() => {
              // Re-enable scrolling when leaving the carousel container
              document.body.style.overflow = 'auto';
            }}
          >
            <ScrollingImageCarousel />
          </div>{/* Use the new component here */}
        </section>
      </div>
    </>
  );
}

export default Work;
