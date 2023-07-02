import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { slideAnimation } from '../config/motion'
import "../Styles/Projects.css"
function Projects() {
  const variants = slideAnimation("projects", "home");

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="view-container mt-6 w-[900px] grid grid-col-1  mb-[100px] gap-12"
      >
        <div className='font-bold  flex items-center justify-center text-3xl mb-5'>Projects</div>
        <div class="grid grid-cols-3 gap-4 p-1">
          <a href="" target='_blank'>
            <div className='p-5 mb-3  flex flex-col  items-center justify-center cursor-pointer  rounded-3xl  hover:bg-zinc-700 transition  delay-330 ease-linear  '>
              <div className='image-container w-[250px] rounded-xl'>
                <img src="./iconify.png" className='rounded-xl' alt="" />
              </div>
              <div className='lablel w-fill flex flex-col items-start justify-start mt-[6px]'>
                <h3 className='text-base font-bold my-1'>Iconify Icons  </h3>
                <h4 className='text-[13px] opacity-30 leading-tight'>2023</h4>
                <div className='text-[15px]  w-fit font-normal  opacity-60 leading-snug'> A free svg icons hosting website build on React.js</div>
              </div>
            </div>
          </a>
          <a href="" target='_blank'>
            <div className='p-5 mb-3  flex flex-col  items-center justify-center cursor-pointer rounded-3xl  hover:bg-zinc-700 transition-all ease-linear '>
              <div className='image-container w-[250px]  rounded-xl'>
                <img src="./minecraft.png" className='rounded-xl' alt="" />
              </div>
              <div className='lablel w-fill flex flex-col items-start justify-start mt-[6px]'>
                <h3 className='text-base font-bold my-1'>Minecraft Clone</h3>
                <h4 className='text-[13px] opacity-30 leading-tight'>2023</h4>
                <div className='text-[15px]  w-fit font-normal  opacity-60 leading-snug'>A minecraft clone build with 3.js with 5 available block textures</div>
              </div>
            </div>
          </a>
          <a href="" target='_blank'>
            <div className='p-5 mb-3  flex flex-col  items-center justify-center cursor-pointer rounded-3xl  hover:bg-zinc-700 transition-all ease-linear '>
              <div className='image-container  rounded-xl'>
                <img src="./gradify.png" className='rounded-xl' alt="" />
              </div>
              <div className='lablel w-fill flex flex-col items-start justify-start mt-[6px]'>
                <h3 className='text-base font-bold my-1'>Gradify Gradients</h3>
                <h4 className='text-[13px] opacity-30 leading-tight'>2023</h4>
                <div className='text-[15px]  w-fit font-normal  opacity-60 leading-snug'>A figma plugin made with typescript to genrate beautiful linear and mesh gradients</div>
              </div>
            </div>
          </a>
          <a href="" target='_blank'>
            <div className='p-5 mb-3  flex flex-col  items-center justify-center cursor-pointer rounded-3xl  hover:bg-zinc-700 transition-all ease-linear '>
              <div className='image-container  rounded-xl'>
                <img src="./vanslife.png" className='rounded-xl' alt="" />
              </div>
              <div className='lablel w-fill flex flex-col items-start justify-start mt-[6px]'>
                <h3 className='text-base font-bold my-1'>Vans Life</h3>
                <h4 className='text-[13px] opacity-30 leading-tight'>2023</h4>
                <div className='text-[15px]  w-fit font-normal  opacity-60 leading-snug'>An awesome app for renting decked-out travel vans for your next road trip adventure! 🚐</div>
              </div>
            </div>
          </a>
          <a href="" target='_blank'>
            <div className='p-5 mb-3  flex flex-col  items-center justify-center cursor-pointer rounded-3xl  hover:bg-zinc-700 transition-all ease-linear '>
              <div className='image-container  rounded-xl'>
                <img src="./travelcrew.png" className='rounded-xl' alt="" />
              </div>
              <div className='lablel w-fill flex flex-col items-start justify-start mt-[6px]'>
                <h3 className='text-base font-bold my-1'>TRAVEL CREW - A Flutter App Built with Appwrite </h3>
                <h4 className='text-[13px] opacity-30 leading-tight'>2023</h4>
                <div className='text-[15px]  w-fit font-normal  opacity-60 leading-snug'>A flutter app built on Appwrite cloud to find travel partners</div>
              </div>
            </div>
          </a>
          <a href="" target='_blank'>
            <div className='p-5 mb-3  flex flex-col  items-center justify-center cursor-pointer rounded-3xl  hover:bg-zinc-700 transition-all ease-linear '>
              <div className='image-container  rounded-xl'>
                <img src="./equilbria.png" className='rounded-xl' alt="" />
              </div>
              <div className='lablel w-fill flex flex-col items-start justify-start mt-[6px]'>
                <h3 className='text-base font-bold my-1'>Equilibria </h3>
                <h4 className='text-[13px] opacity-30 leading-tight'>2022</h4>
                <div className='text-[15px]  w-fit font-normal  opacity-60 leading-snug'>A Kotlin app build to manage your daily schedule</div>
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default Projects




