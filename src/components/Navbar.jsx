import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

let tabs = [
  { id: "home", label: "./Home.svg", link: "/", urlStatus: false, url: "" },
  { id: "blogs", label: "./Doc.svg", link: "/blogs", urlStatus: false, url: "" },
  { id: "projects", label: "./Code.svg", link: "/projects", urlStatus: false, url: "" },
  { id: "github", label: "./github.svg", link: "", urlStatus: true, url: "https://github.com/prash240303" },
  { id: "linkedin", label: "./Linkedin.svg", link: "", urlStatus: true, url: "https://www.linkedin.com/in/prashant-012927227/" },
  { id: "twitter", label: "./Twitter.svg", link: "", urlStatus: true, url: "https://twitter.com/prash2403" },
];

function Navbar() {
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
          className={`nav-item ${activeTab === tab.id ? "active" : " "} relative rounded-full transition `}
          // style={{
          //   WebkitTapHighlightColor: "transparent",
          // }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10   rounded-full "
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}

          {tab.urlStatus ? (
            <a href={tab.url} target="_blank" >
              <div className="flex items-center rounded-full justify-center hover:bg-[#00000013] p-1 md:p-2">
                <img src={tab.label} alt="" className={`${activeTab === tab.id? "brightness-50":"brightness-100"} w-8 md:w-10`}  />
              </div>
            </a>
          ) : (
            <Link to={tab.link}>
              <div className="flex items-center rounded-full justify-center hover:bg-[#00000013] p-1 md:p-2">
                <img src={tab.label} alt="" className={`${activeTab === tab.id? "brightness-50":"brightness-100"} w-8 md:w-10`}/>
              </div>
            </Link>
          )}
        </button>
      ))}
    </motion.div>
  );
}

export default Navbar;
