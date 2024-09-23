"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const tabs = [
  { id: "Home", label: "Home", Link: "/" },
  { id: "Blogs", label: "Blogs", Link: "/blogs" },
  { id: "About", label: "About", Link: "/about" },
  { id: "Crafts", label: "Crafts", Link: "/crafts" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [hover, setHover] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleTabClick = (tabId: string, link: string) => {
    setActiveTab(tabId);
    router.push(link);
    if (isMobile) setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div
      className={` ${
        isMobile
          ? "w-full"
          : shrink
          ? "view-container-shrinked"
          : "view-container-nonshrinked"
      } z-10 flex fixed left-1/2 border bg-neutral-50/85 dark:bg-neutral-800/85 bg-blur-lg -translate-x-1/2 top-2 sm:top-4 md:top-6 backdrop-blur-xl gap-2 rounded-full justify-between items-center transition-all p-2  duration-300`}
    >
      <Link href="/">
        <motion.div
          className="flex place-items-center h-full gap-3 transition-all duration-300"
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <motion.span
            className="relative   hover:cursor-pointer h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
            animate={{ rotate: hover ? 360 : 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <Image
              src={hover ? "/emojis/smilyheart.png" : "/emojis/smily.png"}
              alt="logo"
              width={48}
              height={48}
              className={`p-1 object-fill bg-neutral-50 dark:bg-neutral-700 hover:shadow-none ${
                hover ? "rounded-3xl" : "rounded-full"
              } transform transition duration-300 ease-in-out`}
            />
          </motion.span>
          <motion.span
            className={`text-lg hover:cursor-pointer font-medium sm:text-xl md:text-2xl text-black dark:text-white ${
              shrink ? "text-base sm:text-lg md:text-xl" : ""
            }`}
            animate={{
              scale: hover ? 1.05 : 1,
            }}
            transition={{ duration: 0.1 }}
          >
            Prashant
          </motion.span>
        </motion.div>
      </Link>

      {isMobile ? (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 mx-2 text-black dark:text-white"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      ) : (
        <div className="flex gap-2 md:gap-4 w-fit rounded-full justify-center items-center">
          {tabs.map((tab) => (
            <div key={tab.id} className="hover:shadow-xl rounded-full">
              <button
                type="button"
                onClick={() => handleTabClick(tab.id, tab.Link)}
                className={`relative font-medium rounded-full px-2 py-1 sm:px-3 sm:py-1.5 text-sm sm:text-base md:text-lg transition ${
                  activeTab === tab.id
                    ? "text-black dark:text-white bg-white dark:bg-neutral-700 hover:shadow-inner-white dark:hover:shadow-inner-neutral-600 hover:bg-gradient-to-b from-white via-gray-100 to-gray-100 dark:hover:bg-gradient-to-b dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-600"
                    : "hover:text-gray-700 dark:hover:text-gray-300 hover:ring-1 text-neutral-400 dark:text-neutral-400 hover:ring-gray-200 dark:hover:ring-gray-600 hover:shadow-inner-white dark:hover:shadow-inner-neutral-700 hover:bg-gradient-to-b from-white via-gray-100 to-neutral-100 dark:hover:bg-gradient-to-b dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-700"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 border-gray-400/70 dark:border-gray-500/70 text-black dark:text-white ring-1 ring-neutral-300 dark:ring-neutral-600 rounded-full pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </div>
          ))}
          <div className="shadow-lg rounded-full w-full overflow-hidden md:mr-1 mr-0">
            <button
              type="button"
              className="group rounded-full px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base md:text-lg transition flex w-full shrink-0 text-gray-100 hover:ring-1 hover:-translate-y-[1px] ring-gray-400 dark:ring-gray-600 shadow-inner-gray bg-black dark:bg-neutral-900 dark:text-gray-400 relative overflow-hidden"
            >
              <a target="_blank" href="https://twitter.com/prash2403">
                <span className="relative z-10 w-full text-center">{`Say "Hello!"`}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:animate-shine" />
              </a>
            </button>
          </div>
        </div>
      )}

      {isMobile && isMenuOpen && (
        <div className="absolute overflow-hidden mx-2 border border-neutral-400 top-full left-0 right-0 mt-2 bg-neutral-50/95 dark:bg-neutral-800/95 rounded-lg shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.Link)}
              className={`block w-full text-left px-4 py-2 ${
                activeTab === tab.id
                  ? "bg-white dark:bg-neutral-700 text-black dark:text-white"
                  : "text-neutral-600 dark:text-neutral-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button className="block w-full text-left px-4 py-2 text-gray-100 bg-black dark:bg-white dark:text-gray-800">
            {` Say "Hello!"`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
