import React from 'react';

function Resume() {
  function handleDownload(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  }

  return (
    <div className='flex flex-col gap-5 items-center'>
      <img src="./resume.png" alt="" className='w-[400px]' />
      <div className='flex gap-6'>
        <a  onClick={handleDownload}>
          <div className='bg-zinc-200 text-black px-3 py-2 rounded-full hover:bg-zinc-700 hover:text-white'>
            <img src="./download.svg" alt="" className='w-[50px]' />
            download Resume
          </div>
        </a>
        <a href="https://drive.google.com/file/d/1MGPatFkkaqeCmNUBAH1soq4lltYWqLjz/view?usp=sharing" target='_blank'>
          <div className='bg-zinc-200 text-black px-3 py-2 rounded-full hover:bg-zinc-700 hover:text-white'>
            <img src="./download.svg" alt="" className='w-[50px]' />
            Resume on Drive
          </div>
        </a>
      </div>
    </div>
  );
}

export default Resume;
