import React from "react";

const CustomButton = () => {
  return (
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className="hero-button group relative mt-12 rounded-lg py-3 px-2 overflow-hidden mx-auto w-max block rounded-6 bg-neutral-loud text-neutral-white shadow-2xl bg-zinc-900 text-white text-body-small-medium cursor-pointer"
    >
      <div className="hero-button-arrows absolute flex items-center pointer-events-none overflow-hidden transition-all p-1 duration-500 group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 justify-center h-full w-12 rounded-4 top-0 left-0 moving-arrows">
        <div
          className="rounded-md flex w-full h-full bg-[#D6FF18] shadow-xl  justify-center items-center"
          style={{ boxShadow: "inset 0 0 5px rgba(255, 255, 255, 1)" }}
        >
          {Array(8)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className={`moving-arrows-item relative w-3 h-3 ${
                  idx === 0 ? "block" : "group-hover:block"
                }`}
              >
                {Array(10)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      style={{ ...getArrowStyles(i), position: "absolute" }}
                      className={`wave wave-${idx + 1}`}
                    ></div>
                  ))}
              </div>
            ))}
        </div>
      </div>
      <div className="relative z-10 pl-12 pr-2 font-semibold transition-all duration-500 group-hover:opacity-0">
        Book a demo
      </div>
    </a>
  );
};

const getArrowStyles = (index: number) => {
  const baseStyles = {
    height: "2px",
    width: "2px",
    borderRadius: "2px",
    backgroundColor: "#000",
  };
  const positions = [
    { left: 0, top: 0 },
    { left: "3px", top: 0 },
    { left: "3px", top: "3px" },
    { left: "6px", top: "3px" },
    { left: "6px", top: "6px" },
    { left: "9px", top: "6px" },
    { left: "3px", top: "9px" },
    { left: "6px", top: "9px" },
    { left: 0, top: "12px" },
    { left: "3px", top: "12px" },
  ];
  return { ...baseStyles, ...positions[index] };
};

export default CustomButton;
