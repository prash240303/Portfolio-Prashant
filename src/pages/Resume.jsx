import { Link } from "react-router-dom";

const Resume = () => {
  function handleDownload(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = '/Resume/Prashant_Prabhakar_Resume.pdf';
    link.download = 'Prashant_Prabhakar_Resume.pdf';
    link.click();
  }

  return (
    <div className='flex flex-col gap-5 items-center'>
      <img src="./Resume/resume.png" alt="" className='w-[400px]' />
      <div className='flex gap-6'>
        <Link onClick={handleDownload}>
          <div className='bg-zinc-200 text-black px-3 py-2 rounded-full flex items-center justify-center hover:bg-zinc-700 hover:text-white'>
            <img src="./icons/download.svg" alt="" className='w-[24px] inline mr-1' />
            download Resume
          </div>
        </Link>
        <Link rel="noreferrer" to="https://drive.google.com/file/d/1Nz3k9c2B_N6yUPv5sUFm92o6RLlK_VZt/view?usp=sharing" target='_blank'>
          <div className='bg-zinc-200 text-black px-3 py-2 rounded-full flex items-center justify-center hover:bg-zinc-700 hover:text-white'>
            <img src="./icons/drive.svg" alt="" className='w-[24px] inline mr-1' />
            Resume on Drive
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Resume;
