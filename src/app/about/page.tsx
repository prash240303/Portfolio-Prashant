import Image from "next/image";

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

        <section className="text-center py-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              Page Under Construction 🚧 
            </h2>
            <p>will update soon : )</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
