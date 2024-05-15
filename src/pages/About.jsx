import "../Styles/Work.css";
import Experience from "../components/Experience";
const About = () => {
  return (
    <>
      <div className="view-container mt-10 grid grid-cols-1 md:mb-[100px] mb-12 gap-4 overflow-hidden">
        <section className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8 text-white md:mb-10 mb-0">
          <div className="flex md:flex-row flex-col md:gap-5 gap-10 items-center justify-center md:mb-10 mb-4">
            <img
              src="./profile/profile_large.webp"
              alt="prashant"
              className="w-48 aspect-auto rounded-lg"
            />
            <div className="w-full text-base md:text-xl font-light text-gray-300">
              I am Prashant, a Web Front-end Developer building experiences for
              my passion for beautiful interfaces and UIs.
              <br className="mb-5" />
              I am a Btech undergraduate studying Computer Sciences from NIT
              Jalandhar.
              <br className="mb-5" />
              More than anything, I thrive amid ambitious passions and joy. I
              seek brave teams where together we can create lasting impact on
              people and society through collaborative learning and shared
              goals, believing technology strengthens good.
            </div>
          </div>
        </section>
        <section className="md:mt-4 mt-0 w-full  flex md:flex-row flex-col gap-10 justify-start text-white md:mb-0 mb-0">
          <div className="">
            <h2 className="leading-snug text-3xl text-zinc-100">
              Skills & Interests
            </h2>
            <section className="mt-4 text-lg  leading-relaxed font-light text-gray-300 md:mb-10 mb-0">
              I like expanding my thought, skillset and processes to changing
              problems and needs. I thrive in ambitious, pro-active teams that
              value ethical product building and cultures that facilitate
              belonging. My development journey encompasses frontend
              development, coding, and engineering.
              <br className="mb-2" />I have hands-on experience in building
              user-friendly interfaces, writing efficient code, and developing
              software. I have a passion for solving complex problems through
              coding and constantly expanding my knowledge in this domain.
            </section>

            <section className=" w-full mt-4 text-zinc-300 md:mb-10 mb-0">
              <h2 className="md:mt-2 mt-10  mb-4 leading-snug font-medium text-2xl  text-zinc-100">
                Education
              </h2>
              <span className="font-semibold block text-xl  text-white mb-2">
                Dr B R Ambedkar National Institute of Technology
              </span>
              2021 - 2025 · B.Tech in Computer Science and Engineering
            </section>
          </div>
        </section>

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

        <div>
          <div className="-my-4 px-6 flex select-none justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className="group relative aspect-[9/10] w-44 overflow-x-scroll rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <img
                alt="dream"
                width="500"
                height="925"
                src="/photos/img1.jpg"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <span className="hidden group-hover:transition-all group-hover:sm:block" />
            </div>

            <div className="group relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
              <img
                alt="dream"
                width="500"
                height="925"
                src="/photos/img1.jpg"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="group relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <img
                alt="dream"
                width="500"
                height="925"
                src="/photos/img1.jpg"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="group relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <img
                alt="dream"
                width="500"
                height="925"
                src="/photos/img1.jpg"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="group relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
              <img
                alt="dream"
                width="500"
                height="925"
                src="/photos/img1.jpg"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/*   <span className="hidden group-hover:transition-all group-hover:sm:block">
                <span className="absolute inset-0 grid place-items-center [background:hsl(0_0%_0%_/_0.4)]">
                  <span className="inline-block [clip-path:inset(0_0_0_0)]">
                    <span className="z-10 inline-block text-[40px] font-normal uppercase tracking-[8px] text-gray-100">
                      explore
                    </span>
                  </span>
                </span>
              </span> */}
    </>
  );
};

export default About;
