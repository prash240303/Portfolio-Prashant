"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

let tabs = [
  { id: "Home", label: "Home", Link: "/" },
  { id: "Blogs", label: "Blogs", Link: "/blogs" },
  { id: "About", label: "About", Link: "/about" },
  { id: "Crafts", label: "Crafts", Link: "/crafts" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [hover, setHover] = useState(false);
  const [shrink, setShrink] = useState(false);
  const router = useRouter();

  const handleTabClick = (tabId: string, link: string) => {
    setActiveTab(tabId);
    router.push(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNameHoverStart = () => {
    setHover(true);
  };

  const handleNameHoverEnd = () => {
    setHover(false);
  };

  return (
    <div
      className={`navbar ${shrink ? "view-container-shrinked" : "view-container"} z-10 flex fixed left-1/2 border bg-neutral-50/85 bg-blur-lg -translate-x-1/2 top-6 backdrop-blur-xl md:gap-4 gap-2 w-full rounded-full justify-between items-center transition-all md:p-2 p-1 duration-300 `}
    >
      <div className="flex place-items-center h-full gap-3 transition-all duration-300">
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
            className={`p-1 bg-neutral-50 hover:shadow-none ${hover ? "rounded-2xl" : "rounded-full"
              } transform transition duration-300 ease-in-out`}
          />
        </motion.span>
        <motion.span
          className={`text-2xl text-black ${shrink ? "text-xl" : ""} hidden md:inline`}
        >
          Prashant
        </motion.span>
      </div>

      <div className="flex gap-4 w-fit rounded-full justify-center items-center">
        {tabs.map((tab) => (
          <div key={tab.id} className="hover:shadow-xl rounded-full">
            <button
              type="button"
              onClick={() => handleTabClick(tab.id, tab.Link)}
              className={`relative rounded-full px-3 py-1.5 text-lg transition ${activeTab === tab.id
                  ? "text-black  bg-white hover:shadow-inner-white hover:bg-gradient-to-b from-white via-gray-100 to-gray-100"
                  : "hover:text-gray-700 hover:ring-1 text-neutral-400 hover:ring-gray-200 hover:shadow-inner-white hover:bg-gradient-to-b from-white via-gray-100 to-neutral-100"
                }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 border-gray-400/70 text-black ring-1 ring-neutral-300 rounded-full pointer-events-none"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </div>
        ))}
        <div className="shadow-lg rounded-full overflow-hidden mr-1">
          <button
            type="button"
            className="rounded-full px-3 py-2 text-lg transition flex w-fit shrink-0 text-gray-100 hover:ring-1 hover:-translate-y-[1px] ring-gray-200 shadow-inner-gray bg-black hover:bg-neutral-700"
          >
            {`Say "Hello!"`}
          </button>
        </div>
      </div>
    </div>
  );
}
