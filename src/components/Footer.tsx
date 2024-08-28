import { GithubIcon } from "lucide-react";
import socialLinks from "../data/links";
import Link from "next/link";
import ThemeSwitch from "./ui/LightDarkSwitch";
const Footer = () => {
  return (
    <>
      <main>
        <div className="view-container px-4 mt-10 grid md:grid-cols-2 grid-cols-1 mb-[150px] gap-4 overflow:hidden ">
          <div className="flex flex-col font-medium w-full  text-xl dark:text-white  gap-1 mb-4">
            <div className=" border md:mb-2 mb-6  hover:scale-105 transition duration-300 ease-in-out border-zinc-500 w-full h-fit py-2 px-4 dark:bg-zinc-950 bg-zinc-100 rounded-full flex gap-4 items-center">
              <svg
                width="48"
                className="h-16 w-16"
                height="48"
                viewBox="0 0 553 553"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M276.5 0C123.794 0 0 123.796 0 276.5C0 429.214 123.796 553 276.5 553C429.217 553 553 429.214 553 276.5C553 123.807 429.217 0.0151211 276.496 0.0151211L276.498 0.00216016L276.5 0ZM403.299 398.795C398.346 406.917 387.713 409.492 379.591 404.507C314.672 364.853 232.949 355.871 136.703 377.861C132.246 378.875 127.569 378.078 123.7 375.645C119.831 373.211 117.086 369.341 116.07 364.885C115.563 362.679 115.497 360.394 115.874 358.163C116.252 355.931 117.066 353.795 118.269 351.878C119.473 349.962 121.044 348.301 122.89 346.992C124.737 345.683 126.823 344.751 129.03 344.249C234.36 320.185 324.704 330.545 397.588 375.087C405.71 380.073 408.285 390.673 403.299 398.795ZM437.142 323.507C430.899 333.649 417.627 336.853 407.492 330.612C333.17 284.929 219.876 271.698 131.968 298.382C120.567 301.826 108.526 295.401 105.066 284.02C101.631 272.618 108.06 260.599 119.442 257.134C219.856 226.663 344.692 241.423 430.044 293.872C440.179 300.115 443.383 313.385 437.142 323.507ZM440.048 245.109C350.932 192.176 203.906 187.307 118.824 213.134C105.161 217.277 90.7114 209.563 86.5726 195.9C82.4316 182.231 90.1368 167.792 103.811 163.638C201.478 133.988 363.844 139.719 466.44 200.627C478.758 207.919 482.784 223.792 475.487 236.064C468.225 248.355 452.309 252.406 440.061 245.109H440.048Z"
                  fill="#1ED760"
                />
              </svg>
              <a
                href="https://open.spotify.com/track/7bUbLYm0GJoTF7ct92WnXm?si=c938e28a9e3c4319"
                className="track-list ml-3 w-full"
              >
                <p className="font-semibold md:text-lg text-base mb-1">On repeat</p>
                <p className="md:text-lg text-base w-full">
                  Pocket Full Of Rain ~The Paper Kites
                </p>
              </a>
            </div>
            <div className="flex w-fit mt-3 ">
              Made with lots of 🍵 and ❤️ by{" "}
              <Link
                href="https://twitter.com/prash2403"
                className="dark:text-zinc-100 pl-1 hover:text-zinc-500"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Prashant
              </Link>
            </div>
            <div className="flex mt-4 space-x-4">
              <ThemeSwitch />
            </div>
          </div>
          <div className="flex gap-4 justify-evenly">
            <div className="flex flex-col gap-2">
              <span className="text-3xl">Elsewhere</span>
              <div className="flex flex-col mt-2 items-start justify-start gap-7">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="flex flex-row items-center  gap-0.5 transition-all dark:hover:text-zinc-100 hover:text-zinc-900 hover:gap-1 active:text-white text-sm hover:font-semibold font-normal text-zinc-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className=" mr-2  text-base">
                      {link.name}
                    </span>
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
              <a href="" className="mt-2 font-normal">
                Message
              </a>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

export default Footer;


