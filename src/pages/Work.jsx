import "../Styles/Work.css";
import Experience from "../components/Experience";
const Work = () => {
  return (
    <>
      <div className="view-container mt-10 grid grid-cols-1 md:mb-[100px] mb-12 gap-4 overflow-hidden">
        <section className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8 text-white md:mb-10 mb-0">
          <div className="flex md:flex-row flex-col md:gap-5 gap-10 items-center justify-center md:mb-10 mb-4">
            <img
              src="./profile/profile_large.webp"
              alt=""
              loading="lazy"
              className="md:w-[200px] w-[200px] aspect-auto rounded-lg"
            />
            <div className="w-full text-base md:text-xl font-light text-gray-100">
              I am Prashant, a Web Front-end Developer building experiences for my passion for beautiful interfaces and UIs.
              <br className="mb-5" />
              I am a Btech undergraduate studying Computer Sciences from NIT Jalandhar.
              <br className="mb-5" />
              More than anything, I thrive amid ambitious passions and joy. I seek brave teams where together we can create lasting impact on people and society through collaborative learning and shared goals, believing technology strengthens good.
            </div>
          </div>
        </section>
        <section className="md:mt-4 mt-0 md:w-[400px] w-[340px]  flex md:flex-row flex-col gap-10 justify-start text-white md:mb-0 mb-0">
          <div>
            <h2 className="leading-snug text-2xl text-zinc-100">
              Skills & Interests
            </h2>
            <section className="mt-4 text-lg  leading-relaxed font-light text-white md:mb-10 mb-0">
              I like expanding my thought, skillset and processes to changing problems and needs. I thrive in ambitious, pro-active teams that value ethical product building and cultures that facilitate belonging.
              My development journey encompasses frontend development, coding, and engineering.
              <br className="mb-2" />
              I have hands-on experience in building user-friendly interfaces, writing efficient code, and developing software.
              I have a passion for solving complex problems through coding and constantly expanding my knowledge in this domain.
              <br className="mb-2" />
              In my free time, I&apos;ll most likely be found in my room/garden listening to music while painting out imagination, or watching anime in my cozy bed.

            </section>

            <section className="md:w-[400px] w-full mt-4 text-zinc-300 md:mb-10 mb-0">
              <h2 className="md:mt-2 mt-10  mb-4 leading-snug font-medium text-2xl  text-zinc-100">
                Education
              </h2>
              <span className="font-semibold block text-xl  text-white mb-2">
                Dr B R Ambedkar National Institute of Technology
              </span>
              2021 - 2025 · B.Tech in Computer Science and Engineering
            </section>
          </div>

          <div>
            <h2 className="mt-6 leading-snug font-medium text-2xl text-zinc-100">
              Work Experience
            </h2>
            <section className="experience-item-list-wrapper md:w-[600px] w-full mt-4 grid grid-cols-1 justify-start gap-8 text-white md:mb-10 mb-0 ">
              <Experience
                role="Front end developer"
                companyName="JollySE Foundation"
                companyLink="https://www.jollysoothingera.com/"
                timeLine="sept - oct, 2023"
                descriptions={[
                  "Led the development of the organization’s website UI and web design using Figma, creating a component library for consistency",
                  "Utilized Next.js and Tailwind CSS to design and implement responsive and visually appealing front-end pages.",
                  "Contributed to the content management system (CMS) integration using Sanity.io to streamline data management and website updates.",
                ]}
              />
              <Experience
                role="UI/UX designer"
                companyName="GDSC NITJ"
                companyLink="https://gdsc.community.dev/dr-b-r-ambedkar-national-institute-of-technology-nit-jalandhar/"
                timeLine="Sept 2021 - Current"
                descriptions={[
                  "Organizing and hosting events organized by GDSC NITJ, as well as providing mentorship to junior members.",
                  "Contributed to the development of the club's official website and was an organizer at HackMOL 4.0 Hackathon.",
                  "Currently working on the development of the club's official website and organizing the upcoming HackMOL 5.0 Hackathon.",
                ]}
              />
              <Experience
                role="Front end developer"
                companyName="VedVyas Foundation"
                companyLink="https://vedvyas.org/"
                timeLine="Jan - Mar 2023"
                descriptions={[
                  "Under the WINTER OF CODE: GDSC IIIT Kalyani, I got to work on the open source Ved Vyas Foundation.",
                  "Worked on the BhagavadGita.ai UI development and web design using React.js and Tailwind CSS.",
                ]}
              />
            </section>
          </div>
        </section>
        {/* <section>
          <h2 className="md:mt-0 mt-5 mb-5 leading-snug font-medium text-2xl  text-zinc-100">
            Contact
          </h2>
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-medium block text-xl text-white">
              Primary Email
            </span>
            prashantp.cs.21@nitj.ac.in
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-medium block text-xl text-white">
              Secondary Email
            </span>
            prash2402@gmail.com
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-medium block text-xl text-white">
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
        </section> */}
        {/* <section className="md:mb-20 mb-0 font-light text-xl">
          <h2 className="md:mt-6 mt-10 mb-4 leading-snug font-medium text-2xl text-zinc-100">
            Extra! Extra!
          </h2>
          Photography and creative arts are my passion as they fill my world with joy. Pursuing these interests allows me to nurture my imagination and think outside the box.
          <div
            className="image-carousel-container md:h-full h-fit"
            onMouseEnter={() => {
              document.body.style.overflow = 'hidden';
            }}
            onMouseLeave={() => {
              document.body.style.overflow = 'auto';
            }}
          >
            <div className="pics md:flex md:flex-row flex-col gap-6 justify-center items-center mx-0  md:my-12 mt-6 p-0">
                <img src="./photos/img1.jpg" alt="Central Park, New York"  loading="lazy" className=" rounded-xl   object-contain " />
                <img src="./photos/img3.jpg" alt="Central Park, New York" loading="lazy" className=" rounded-xl   md:mt-0 mt-3  object-contain " />
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default Work;
