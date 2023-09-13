import React, { useEffect, useState } from "react";

const ScrollingImageCarousel = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const track = document.getElementById("image-track");

    function handleScroll(e) {
      if (!scrollEnabled) return;
      e.preventDefault();
      const scrollDelta = -1 * (e.deltaY || (e.detail * -20)); // Reverse the scroll direction
      const maxDelta = 2000;

      let nextPercentage =
        parseFloat(track.dataset.prevPercentage) +
        (scrollDelta / maxDelta) * -100;
      nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

      track.dataset.prevPercentage = nextPercentage;

      track.style.transition = "transform 0.5s ease-out";
      track.style.transform = `translate(${nextPercentage}%, -50%)`;

      for (const image of track.getElementsByClassName("image")) {
        image.style.transition = "object-position 0.5s ease-out";
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }

      setTimeout(() => {
        track.style.transition = "";
        for (const image of track.getElementsByClassName("image")) {
          image.style.transition = "";
        }
      }, 500);
    }

    // Check if it's Firefox and use the appropriate event
    const isFirefox =
      navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    if (isFirefox) {
      window.addEventListener("DOMMouseScroll", handleScroll);
    } else {
      window.addEventListener("wheel", handleScroll);
    }

    return () => {
      // Remove the event listener when the component unmounts
      if (isFirefox) {
        window.removeEventListener("DOMMouseScroll", handleScroll);
      } else {
        window.removeEventListener("wheel", handleScroll);
      }
    };
  }, [scrollEnabled]);

  return (
    <div
      id="image-container"
      onMouseEnter={() => setScrollEnabled(true)}
      onMouseLeave={() => setScrollEnabled(false)}
    >
      <div id="image-track" data-prev-percentage="0">
      < img src="./photos/img1.jpg" className="image" alt=""   draggable="false"/>
      <img src="./photos/img2.jpg" className="image" alt=""  draggable="false"/>
      <img src="./photos/img3.jpg" className="image" alt=""  draggable="false"/>
      <img src="./photos/img4.jpg" className="image" alt=""  draggable="false"/>
      <img src="./photos/img5.jpg" className="image" alt=""  draggable="false"/>
      <img src="./photos/img6.jpg" className="image" alt=""  draggable="false"/>
      <img src="./photos/img7.jpg" className="image" alt=""  draggable="false"/>
      <img src="./photos/img8.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      <img src="./photos/img9.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      <img src="./photos/img10.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      <img src="./photos/img11.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      <img src="./photos/img12.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      <img src="./photos/img13.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      <img src="./photos/img14.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      <img src="./photos/img15.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      <img src="./photos/img16.jpg" className="image" alt=""  loading="lazy" draggable="false"/>
      </div>
    </div>
  );
};

export default ScrollingImageCarousel;
