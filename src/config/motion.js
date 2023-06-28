export const slideAnimation = (fromPage, toPage) => {
    let direction = "left";
  
    if (fromPage === "home" && toPage === "blogs") {
      direction = "right";
    } else if (fromPage === "home" && toPage === "projects") {
      direction = "left";
    } else if (fromPage === "blogs" && toPage === "home") {
      direction = "right";
    } else if (fromPage === "blogs" && toPage === "projects") {
      direction = "left";
    } else if (fromPage === "projects" && toPage === "home") {
      direction = "right";
    } else if (fromPage === "projects" && toPage === "blogs") {
      direction = "left";
    }
  
    return {
      initial: {
        x: direction === "left" ? "-100%" : "100%",
        opacity: 0
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 0.5  }
      },
      exit: {
        x: direction === "left" ? "100%" : "-100%",
        opacity: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 0.5}
      }
    };
  };
  