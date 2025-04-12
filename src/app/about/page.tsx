import ImageStack from "@/components/ui/ImageStack";
import Image from "next/image";

const images = [
  {
    src: "/profile/pic2.webp?height=380&width=280",
    alt: "Image 1",
  },
  {
    src: "/profile/pic1.jpeg?height=380&width=280",
    alt: "Image 2",
  },
  {
    src: "/profile/pic3.jpeg?height=380&width=280",

    alt: "Image 3",
  },
];

const About = () => {
  return (
    <div className="max-w-5xl h-full mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-12 md:mb-[200px]">
      <div className="flex  gap-x-20 gap-y-7">
        <div className="flex flex-col items-start gap-5 w-full max-w-xl">
          <div className="whoami-animation flex flex-col gap-5 justify-center w-full max-w-xl border border-black-10 bg-black-2 rounded-[25px] p-5 sm:p-8">
            <h1 className="text-xl md:text-2xl text-black-80 leading-loose font-semibold">
              whoami
            </h1>
            <span className="whitespace-pre-line text-base font-light text-black-70 ">
              {" "}
              <p>
                {`Hey, I'm a 21yrs old, fullstack developer who cares about great user experience, enthusiastic about frontend and always eager to learn new technologies and build valuable products with them.`}
                <br />
                <br />

                {`I love to cook, code and travel. Currently, studying computer science and engineering at NIT Jalandhar. Over the years, I have learnt various computer science concepts, studied about fundamentals, and built projects out of them. I believe that the craft we make, should always add some value to user's life.`}
                <br />
                <br />

                {`As a community builder, I have organised and participated several hackathons, competitions and coding events.`}

                <br />
                {` Currently, I am looking for frontend-developer roles. Previously, I have worked with startup in past to help them solve problems related to user and developer experience.`}
              </p>
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-3 md:gap-5">
          <div className="flex items-center gap-5 mx-2">
            <h1 className="photos-title-animation text-xl md:text-2xl font-semibold relative w-fit text-black-80 select-none">
              photos
              <svg
                width="62"
                height="10"
                className="absolute -right-1 -bottom-1 bg-transparent select-none pointer-events-none"
                viewBox="0 0 62 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.8713 1.93981C61.265 2.11052 60.6283 2.50215 60.0593 2.41846C55.4394 1.75236 51.2531 3.4193 46.9957 4.69461C43.7984 5.65193 40.7603 6.07368 37.4986 4.42682C36.1642 3.75402 34.0541 4.2059 32.408 4.59419C29.7628 5.21678 27.1819 6.15066 24.618 7.07116C22.1963 7.9381 20.093 7.30547 18.5722 5.52473C16.9024 3.56992 14.9515 3.50633 12.8516 4.08205C9.1361 5.09628 5.84734 7.00087 2.79229 9.30044C1.84055 10.0168 0.14706 9.50128 0.00480682 8.33309C-0.0493848 7.88121 0.363829 7.11133 0.780427 6.9038C3.42565 5.58163 6.10136 4.29963 8.83126 3.15152C11.2699 2.12725 13.8169 1.09964 16.5028 1.90298C17.8271 2.30131 19.1141 3.14148 20.1573 4.06532C21.4816 5.24021 22.8195 5.12305 24.2962 4.71803C27.6357 3.79753 30.9482 2.76658 34.3284 2.01345C35.5105 1.74901 36.994 1.85948 38.0846 2.35152C40.5232 3.44943 42.8771 3.40591 45.3361 2.66951C48.2658 1.78918 51.1752 0.808426 54.1524 0.125584C55.453 -0.172322 56.906 0.142327 58.2879 0.226008C58.989 0.269523 59.7104 0.326421 60.3709 0.533951C60.95 0.714703 61.4581 1.11638 62 1.42098C61.9594 1.5917 61.9187 1.76575 61.8747 1.93646L61.8713 1.93981Z"
                  fill="#FF9500"
                ></path>
              </svg>
            </h1>
            <div className="photos-animation select-none whitespace-nowrap text-lg md:text-sm text-[#FF9500] px-2 py-[2px] rounded-full border border-black-40 border-dashed w-fit flex items-center gap-2">
              glimpse of my life
            </div>
          </div>

          <div className="mt-12">
            {/* <Image alt="" width="450" height="450" decoding="async" data-nimg="1" className="h-[450px] w-[450px] photos-animation object-contain select-none pointer-events-none" src="/profile/profile_large.webp" /> */}
            <ImageStack images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
