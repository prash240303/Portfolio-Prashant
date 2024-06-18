import Image from "next/image";
import Experience from "@/components/Experience";
const About = () => {
  return (
    <>
      <div className="view-container mt-10 grid grid-cols-1 md:mb-[100px] mb-12 gap-4 overflow-hidden">
        <section className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8 text-white md:mb-10 mb-0">
          <div className="flex md:flex-row flex-col md:gap-5 gap-10 items-center justify-center md:mb-10 mb-4">
            <Image 
            width={1000}
            height={5000}
              src="/profile/profile_large.webp"
              alt="profile-pic"
              className="w-48 aspect-auto rounded-lg"
            />
            <div className="w-full text-base md:text-xl font-light text-gray-300">
              I am Prashant, a Web Front-end Developer building experiences for my passion for beautiful interfaces and UIs.
              <br className="mb-5" />
              I am a Btech undergraduate studying Computer Sciences from NIT Jalandhar.
              <br className="mb-5" />
              More than anything, I thrive amid ambitious passions and joy. I seek brave teams where together we can create lasting impact on people and society through collaborative learning and shared goals, believing technology strengthens good.
            </div>
          </div>
        </section>
        <section className="md:mt-4 mt-0 w-full  flex md:flex-row flex-col gap-10 justify-start text-white md:mb-0 mb-0">
          <div className="md:w-[300px] w-[340px]" >
            <h2 className="leading-snug text-2xl text-zinc-100">
              Skills & Interests
            </h2>
            <section className="mt-4 text-base  leading-relaxed font-light text-gray-300 md:mb-10 mb-0">
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

          <div className="w-full ml-6">
            <h2 className="mt-6 leading-snug font-medium text-2xl text-zinc-100">
              Work Experience
            </h2>
            <section className="experience-item-list-wrapper  w-full mt-4 grid grid-cols-1 justify-start gap-8 text-white md:mb-10 mb-0 ">
              <Experience 
              role="Front end developer"
              companyName="GroVr Testing"
              companyLink="https://www.grovrtesting.com/"
              timeLine="Jan 2024 - Present"
              descriptions={[
                "Led the development of the organization’s website UI and web design using Figma, creating a component library for consistency",
                "Utilized Next.js and Tailwind CSS to design and implement responsive and visually appealing front-end pages.",
                "Contributed to the content management system (CMS) integration using Sanity.io to streamline data management and website updates.",
              ]}
            />

              <Experience
                role="Front end developer"
                companyName="JollySE Foundation"
                companyLink="https://www.jollysoothingera.com/"
                timeLine="Sept - Dec 2023"
                descriptions={[
                  "Led the development of the organization’s website UI and web design using Figma, creating a component library for consistency",
                  "Utilized Next.js and Tailwind CSS to design and implement responsive and visually appealing front-end pages.",
                  "Contributed to the content management system (CMS) integration using Sanity.io to streamline data management and website updates.",
                ]}
              />
              <Experience
                role="UI/UX designer"
                companyName="GDSC NITJ (Voluteering)"
                companyLink="https://gdsc.community.dev/dr-b-r-ambedkar-national-institute-of-technology-nit-jalandhar/"
                timeLine="Sept 2021 - Present"
                descriptions={[
                  "Organizing and hosting events organized by GDSC NITJ, as well as providing mentorship to junior members.",
                  "Contributed to the development of the club's official website and was an organizer at HackMOL 4.0 Hackathon.",
                  "Currently working on the development of the club's official website and organizing the upcoming HackMOL 5.0 Hackathon.",
                ]}
              />
              <Experience
                role="Front end developer"
                companyName="VedVyas Foundation (Volunteering)"
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
      </div>
    </>
  );
}

export default About;
