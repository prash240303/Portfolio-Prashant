'use client';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleTabClick = (tabId: string, link: string) => {
    setActiveTab(tabId);
    router.push(link);
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
      setIsMobile(window.innerWidth < 768); // Mobile view for screens smaller than 768px
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div
      className={`navbar ${
        isMobile
          ? ""
          : shrink
          ? "view-container-shrinked"
          : "view-container-nonshrinked"
      } z-10 flex fixed left-1/2 border bg-neutral-50/85 dark:bg-neutral-800/85 bg-blur-lg -translate-x-1/2 top-6 backdrop-blur-xl md:gap-4 gap-2 md:w-full w-fit rounded-full justify-between items-center transition-all md:p-2 p-1 duration-300`}
    >
      {/* Your navbar content */}
      <div className="md:flex place-items-center hidden h-full gap-3 transition-all duration-300">
        <motion.span
          className="relative md:h-12 md:w-12 w-10 h-10"
          whileHover={{ rotate: 360 }}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <Image
            src={hover ? "/smilyheart.png" : "/smily.png"}
            alt="logo"
            layout="fill"
            objectFit="cover"
            className={`p-1 bg-neutral-50 dark:bg-neutral-700 hover:shadow-none ${
              hover ? "rounded-3xl" : "rounded-full"
            } transform transition duration-300 ease-in-out`}
          />
        </motion.span>
        <motion.span
          className={`text-2xl text-black dark:text-white ${
            shrink ? "text-xl" : ""
          } hidden md:inline`}
        >
          Prashant
        </motion.span>
      </div>

      <div className="flex md:gap-4 gap-2 w-fit rounded-full justify-center items-center">
        {tabs.map((tab) => (
          <div key={tab.id} className="hover:shadow-xl rounded-full">
            <button
              type="button"
              onClick={() => handleTabClick(tab.id, tab.Link)}
              className={`relative rounded-full md:px-3 md:py-1.5 p-2 md:text-lg text-md transition ${
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
            className="rounded-full md:px-3 md:py-2 p-2 md:text-lg text-md transition flex md:w-full w-28 shrink-0 text-gray-100 hover:ring-1 hover:-translate-y-[1px] ring-gray-200 dark:ring-gray-600 shadow-inner-gray bg-black dark:bg-white dark:text-gray-800 hover:bg-neutral-700 dark:hover:bg-neutral-200"
          >
            {`Say "Hello!"`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
