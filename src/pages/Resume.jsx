import { Link } from "react-router-dom";

const Resume = () => {
  function handleDownload(event) {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = "/Resume/Prashant_Prabhakar_Resume.pdf";
    link.download = "Prashant_Prabhakar_Resume.pdf";
    link.click();
  }

  return (
    <div className="flex flex-col gap-5 mt-6 items-center">
      {/* back button  */}
      <Link to="/about" className="text-zinc-100  absolute left-6 hover:text-gray-600">
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 inline mr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Interface / Chevron / Left">
            <path
              id="Vector"
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        Back
      </Link>
      <h1 className="text-4xl font-semibold text-zinc-100">Resume</h1>
      <img
        src="./Resume/resume.jpg"
        alt=""
        className="w-[400px] blur-[0.5px]"
      />
      <div className="flex gap-6">
        <Link onClick={handleDownload}>
          <div className="bg-zinc-200 text-black px-3 py-2 rounded-full flex items-center justify-center hover:text-gray-600 hover:scale-105">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 text-white  h-6 inline mr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Interface / Download">
                <path
                  id="Vector"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            download Resume
          </div>
        </Link>
        <Link
          rel="noreferrer"
          to="https://drive.google.com/file/d/1Nz3k9c2B_N6yUPv5sUFm92o6RLlK_VZt/view?usp=sharing"
          target="_blank"
        >
          <div className="bg-zinc-200 text-black px-3 py-2 rounded-full flex items-center justify-center hover:text-gray-600 hover:scale-105">
            <img
              src="./icons/drive.svg"
              alt=""
              className="w-[24px]  inline mr-1"
            />
            Resume on Drive
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
