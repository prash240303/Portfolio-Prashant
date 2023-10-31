import { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
let tabs = [
  {
    id: "Home",
    label: "./icons/Home.svg",
    link: "/",
    urlStatus: false,
    url: "",
  },
  {
    id: "Blogs",
    label: "./icons/Doc.svg",
    link: "/blogs",
    urlStatus: false,
    url: "",
  },
  {
    id: "About",
    label: "./icons/Code.svg",
    link: "/work",
    urlStatus: false,
    url: "",
  },
  {
    id: "Github",
    label: "./icons/github.svg",
    link: "",
    urlStatus: true,
    url: "https://github.com/prash240303",
  },
  {
    id: "Linkedin",
    label: "./icons/Linkedin.svg",
    link: "",
    urlStatus: true,
    url: "https://www.linkedin.com/in/prashant-012927227/",
  },
  {
    id: "Twitter",
    label: "./icons/Twitter.svg",
    link: "",
    urlStatus: true,
    url: "https://twitter.com/prash2403",
  },
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

  const [tooltipContent, setTooltipContent] = useState("");

  // Function to handle mouse enter event and show tooltip
  const handleMouseEnter = (tab) => {
    // Show tooltip only if the current tab is not the active tab
    if (activeTab !== tab.id) {
      setTooltipContent(tab.id);
    }
  };

  // Function to handle mouse leave event and hide tooltip
  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  // const [showNavbar, setShowNavbar] = useState(false);
  // const toggleNavbar = () => {
  //   setShowNavbar(!showNavbar);
  // };

  // useEffect(() => {
  //   // Show the navbar with a slight delay to create the "pop" effect
  //   setTimeout(() => {
  //     toggleNavbar();
  //   }, 500); // Adjust the delay duration as needed (in milliseconds)
  // },);

  return (
    <div
      className={`navbar flex gap-2 self-center w-fit rounded-full  p-3 border border-[#ffffff14] justify-center items-center `}
    >
      {tabs.map((tab) => (
        <button
        aria-label="button nav"
        name="navbar"
          key={tab.id}
          onClick={() => handleTabClick(tab)}
          className={`nav-item ${
            activeTab === tab.id ? "active" : " "
          } relative rounded-full transition `}
          onMouseEnter={() => handleMouseEnter(tab)} // Show tooltip on mouse enter
          onMouseLeave={handleMouseLeave} // Hide tooltip on mouse leave
          // style={{
          //   WebkitTapHighlightColor: "transparent",
          // }}
        >
          {activeTab === tab.id && (
            <span className="absolute inset-0 z-10 rounded-full " />
          )}

          {tab.urlStatus ? (
            <Link to={tab.url} target="_blank" rel="noreferrer">
              <div className="flex items-center rounded-full justify-center hover:bg-[#2d2d2d5b]  p-1 md:p-2">
                <img
                  src={tab.label}
                  alt="icon"
                  className={`${
                    activeTab === tab.id ? "brightness-50" : "brightness-100"
                  } w-8 h-8 md:h-10 md:w-10`}
                />
              </div>
            </Link>
          ) : (
            <Link to={tab.link}>
              <div className="flex items-center rounded-full justify-center hover:bg-[#2d2d2d5b] p-1 md:p-2">
                <img
                  src={tab.label}
                  alt="icon"
                  className={`${
                    activeTab === tab.id ? "brightness-50" : "brightness-100"
                  } w-8 h-8 md:h-10 md:w-10`}
                />
              </div>
            </Link>
          )}

          {tooltipContent === tab.id && <div className="tooltip">{tab.id}</div>}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
