import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../Styles/Navbar2.css';

let tabs = [
  { id: "home", label: "./Home.svg", link: "/", urlStatus: false, url: "" },
  { id: "blogs", label: "./Doc.svg", link: "/blogs", urlStatus: false, url: "" },
  { id: "projects", label: "./Code.svg", link: "/projects", urlStatus: false, url: "" },
  { id: "github", label: "./github.svg", link: "", urlStatus: true, url: "https://github.com/prash240303" },
  { id: "twitter", label: "./Twitter.png", link: "", urlStatus: true, url: "https://twitter.com/prash2403" },
  { id: "figma", label: "./Figma.svg", link: "", urlStatus: true, url: "https://www.figma.com/@prash_24" },
];

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);

    if (tab.id === "github" || tab.id === "twitter" || tab.id === "figma") {
      setTimeout(() => {
        setActiveTab("home");
      }, 1000);
    }
  };

  return (
    <motion.div initial={{ y: '100%' }}
    animate={{ y: 0 }} 
    transition={{ type: 'spring', bounce: 0.5, duration: 0.4 }}
    className="navbar flex gap-2 self-center w-fit rounded-full p-3  border border-[#ffffff14] justify-center items-center"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab)}
          className={`nav-item ${activeTab === tab.id ? "active" : ""} relative rounded-full transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 contrast-100  rounded-full  mix-blend-difference"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}

          {tab.urlStatus ? (
            <a href={tab.url} target="_blank" >
              <div className="flex items-center hover:bg-[#383838] rounded-full justify-center p-2">
                <img src={tab.label} alt="" className={`${activeTab === tab.id? "brightness-0":"brightness-100"} w-10`}  />
              </div>
            </a>
          ) : (
            <Link to={tab.link}>
              <div className="flex items-center hover:bg-[#383838] rounded-full justify-center p-2">
                <img src={tab.label} alt="" className={`${activeTab === tab.id? "brightness-0":"brightness-100"} w-10`}/>
              </div>
            </Link>
          )}
        </button>
      ))}
    </motion.div>
  );
}

export default AnimatedTabs;
