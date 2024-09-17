import Image from "next/image";
import Experience from "@/components/Experience";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-12 md:mb-[100px]">
      <div className="grid grid-cols-1 gap-8 overflow-hidden">
        <section className="text-gray-900 dark:text-white">
          <div className="flex flex-col md:flex-row md:gap-8 items-start justify-center mb-8">
            <Image 
              width={1000}
              height={5000}
              src="/profile/profile_large.webp"
              alt="profile-pic"
              className="w-48 aspect-auto rounded-lg mb-6 md:mb-0"
            />
            <div className="text-base md:text-lg font-light text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                I am Prashant, a Web Front-end Developer building experiences for my passion for beautiful interfaces and UIs.
              </p>
              <p className="mb-4">
                I am a Btech undergraduate studying Computer Sciences from NIT Jalandhar.
              </p>
              <p>
                More than anything, I thrive amid ambitious passions and joy. I seek brave teams where together we can create lasting impact on people and society through collaborative learning and shared goals, believing technology strengthens good.
              </p>
            </div>
          </div>
        </section>
        
        <section className="flex flex-col md:flex-row gap-8 text-gray-900 dark:text-white">
          <div className="md:w-1/3">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-4">
                Education
              </h2>
              <p className="font-semibold text-xl text-gray-900 dark:text-white mb-2">
                Dr B R Ambedkar National Institute of Technology
              </p>
              <p className="text-gray-700 dark:text-zinc-300">
                2021 - 2025 · B.Tech in Computer Science and Engineering
              </p>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100 mb-6">
              Work Experience
            </h2>
            <div className="grid gap-8">
              <Experience 
                role="Front end developer"
                companyName="GroVr Testing"
                companyLink="https://www.grovrtesting.com/"
                timeLine="Jan 2024 - Present"
                descriptions={[
                  "Led the development of the organization's website UI and web design using Figma, creating a component library for consistency.",
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
                  "Led the development of the organization's website UI and web design using Figma, creating a component library for consistency.",
                  "Utilized Next.js and Tailwind CSS to design and implement responsive and visually appealing front-end pages.",
                  "Contributed to the content management system (CMS) integration using Sanity.io to streamline data management and website updates.",
                ]}
              />

              <Experience
                role="UI/UX designer"
                companyName="GDSC NITJ (Volunteering)"
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
