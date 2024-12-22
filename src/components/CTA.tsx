import Image from 'next/image'
import React from 'react'

function CTAComponent() {
  return (
    <div className=" mt-4 px-4 view-container flex flex-col gap-3 ">
    <div className="contact-animation flex flex-col gap-5 justify-center w-full bg-black-2 border border-black-10 rounded-[25px] p-8 py-12 sm:p-12 sm:pt-8 relative">
      <Image
        alt=""
        loading="lazy"
        width="1342"
        height="858"
        src="/logos/contact.png"
        decoding="async"
        data-nimg="1"
        className="gradient-animation pointer-events-none select-none object-cover h-full w-full rounded-[24px] absolute top-0 right-0 left-0 -z-10"

        style={{ color: "transparent" }}
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <h1 className="text-xl text-black-80 font-bold">like what I do?</h1>
          <div className="flex items-center gap-2">
            <div className="select-none whitespace-nowrap text-xs text-green-500 font-medium px-2 py-[2px] rounded-full border border-black-70 border-dashed w-fit flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
              </div>
              open for work
            </div>
            <a href="mailto:prash2402@gmail.com">
              <button className="select-none whitespace-nowrap text-xs text-white bg-green-500 border-2 border-green-500 font-medium px-3 py-[2px] rounded-full w-fit cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out">
                hire me
              </button>
            </a>
          </div>
        </div>
        <p className="text-sm text-black-70 ">
          {` I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to
          get back to you!`}
        </p>
        <a href="mailto:prash2402@gmail.com">
          <p  className="text-base text-black-70 font-semibold relative w-fit group cursor-pointer">
          prash2402@gmail.com{" "}
            <span className="font-bold absolute -right-5 group-hover:translate-x-1 transition-all duration-150 ease-in-out">
              -&gt;
            </span>
          </p>
        </a>
        <a href="https://drive.google.com/file/d/1wkYxQO2XK6280JiK5wrMog4dwL5h5yaw/view?usp=sharing">
          <p className="text-base text-black-70 font-semibold relative w-fit group cursor-pointer">
            resume{" "}
            <span className="font-bold absolute -right-5 group-hover:translate-x-1 transition-all duration-150 ease-in-out">
              -&gt;
            </span>
          </p>
        </a>
        
      </div>
    </div>
  </div>
  )
}

export default CTAComponent