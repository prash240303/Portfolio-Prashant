"use client"



import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

let tabs = [
  { id: "Home", label: "Home", Link: "/" },
  { id: "Blogs", label: "Blogs", Link: "/blogs" },
  { id: "About", label: "About", Link: "/about" },
  { id: "Crafts", label: "Crafts", Link: "/crafts" },
];

export default function Navbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="navbar z-10 flex fixed left-1/2 -translate-x-1/2 bottom-6 backdrop-blur-xl bg-[#4e4e4ecc] shadow-sm md:shadow-lg gap-4 self-center w-fit  rounded-full p-2 border border-zinc-600 justify-center items-center">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-lg font-light text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Link href={tab.Link}>
            {tab.label}
          </Link>
        </button>
      ))}
    </div>
  );
}
