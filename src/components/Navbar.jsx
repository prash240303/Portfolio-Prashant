import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

let tabs = [
  { id: "Home", label: "./icons/Home.svg", Link: "/" },
  { id: "Blogs", label: "./icons/Doc.svg", Link: "/blogs" },
  { id: "About", label: "./icons/About.svg", Link: "/about" },
  { id: "Guestbook", label: "./icons/Message.svg", Link: "/GuestBook" },
  { id: "Crafts", label: "./icons/craft.svg", Link: "/Crafts" },
];

export default function Navbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  let [tooltipContent, setTooltipContent] = useState("");

  const handleMouseEnter = (tab) => {
    setTooltipContent(tab.id);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div className="navbar flex gap-4 self-center w-fit rounded-full p-2 border border-zinc-600 justify-center items-center">
      {tabs.map((tab) => (
        <Link to={tab.Link} key={tab.id}>
          <motion.button
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full text-sm font-medium text-white transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
            onMouseEnter={() => handleMouseEnter(tab)}
            onMouseLeave={handleMouseLeave}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white/80   mix-blend-overlay"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className="flex items-center rounded-full justify-center hover:bg-white/20 p-2 ">
              <img
                src={tab.label}
                alt="icon"
                className={` w-8 h-8 md:h-10 md:w-10`}
              />
            </div>
            <AnimatePresence>
              {tooltipContent === tab.id && (
                <motion.div
                  className="tooltip"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {tab.id}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </Link>
      ))}
    </div>
  );
}
