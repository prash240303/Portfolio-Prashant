import socialLinks from "../data/links";
import Link from "next/link";
import ThemeSwitch from "./ui/LightDarkSwitch";
const Footer = () => {
  return (
    <>
      <main>
        <div className="view-container px-6 mt-10 grid md:grid-cols-2 grid-cols-1 mb-[50px] gap-4 overflow:hidden ">
          <div className="flex flex-col font-medium w-full  text-xl dark:text-white  gap-1 mb-4">
            <div className=" w-fit mt-3 ">
              Created with lots of Procrastination 🥲 & Inspiration ☕️
            </div>
            <div className="flex mt-4 space-x-4">
              <ThemeSwitch />
            </div>
          </div>
          <div className="flex gap-4 justify-between md:ml-8 ml-0">
            <div className="flex flex-col gap-2">
              <span className="text-3xl">Elsewhere</span>
              <div className="flex flex-col mt-2 items-start justify-start gap-7">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="flex flex-row items-center  gap-0.5 transition-all dark:hover:text-zinc-100 hover:text-zinc-900 hover:gap-1 active:text-white text-sm hover:font-semibold font-normal text-zinc-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className=" mr-2  text-base">{link.name}</span>
                    <span>{link.urlTitle}</span>
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
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-3xl">contact</span>
              <a href="mailto:prash2402@gmail.com" className="mt-2  dark:hover:text-zinc-100 hover:text-zinc-900 hover:gap-1 active:text-white text-sm hover:font-semibold font-normal text-zinc-400">
                Message
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Footer;
