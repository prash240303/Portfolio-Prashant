"use client";
import { ArrowLeft, DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Resume = () => {
  function handleDownload(event: any) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = '/Resume/Prashant_Prabhakar_Resume.pdf';
    link.download = 'Prashant_Prabhakar_Resume.pdf';
    link.click();
  }

  return (
    <div className='flex flex-col gap-5 my-12 items-center'>
      <div className='text-3xl'>Resume</div>
      <Link href="/" className="text-lg place-items-center flex gap-2 w-full text-center hover:text-zinc-400 absolute left-6 top-6">
        <ArrowLeft />
        <p>Back</p>
      </Link>
      <Image width={5000} height={10000} src="/Resume/resume.jpg" alt="" className='w-[400px]' />
      <div className='flex gap-6'>
        <button type="button" className="cursor-pointer" onClick={handleDownload}>
          <div className='bg-zinc-200 text-black px-3 py-2 rounded-full flex items-center justify-center hover:bg-zinc-500 hover:text-white'>
            <DownloadIcon className="mr-2" />
            download Resume
          </div>
        </button>
        <Link rel="noreferrer" href="https://drive.google.com/file/d/1Nz3k9c2B_N6yUPv5sUFm92o6RLlK_VZt/view?usp=sharing" target='_blank'>
          <div className='bg-zinc-200 text-black px-3 py-2 rounded-full flex items-center justify-center hover:bg-zinc-500 hover:text-white'>
            {/* <Image width={100} height={100} src="./icons/drive.svg" alt="" className='w-[24px] inline mr-1' /> */}
            <svg width="800px" className='size-6 inline mr-1' height="800px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M96 30H80.87a12 12 0 0 0-10.348 5.926l-46.917 79.932a12.001 12.001 0 0 0 .059 12.249l16.84 28.067A12 12 0 0 0 50.794 162H96m0-132h15.129a12 12 0 0 1 10.349 5.926l46.917 79.932a12.001 12.001 0 0 1-.059 12.249l-16.84 28.067a12.002 12.002 0 0 1-10.29 5.826H96" /><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m59 127 37-62 37 62H59Z" /></svg>
            Resume on Drive
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Resume;
