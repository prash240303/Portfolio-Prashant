import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { slideAnimation } from "../config/motion";
import Profile from "../components/Profile";

function Blogs() {
  // const variants = slideAnimation("home", "blogs");

  return (
    <>
      {/* <AnimatePresence>
       <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                className="view-container mt-[50px] mb-[150px] w-[900px] grid grid-col-1 item-center justify-center gap-6"
            >  */}
      <div className="view-container mt-[50px] mb-[150px] w-[900px] grid grid-col-1 item-center justify-center gap-6">
        <div className="font-bold text-3xl mb-5  text-white">
          Blogs
        </div>
        <div class=" rounded-xl bg-zinc-700  pb-6 overflow-hidden shadow-lg hover:scale-105 transition">
          <img class="w-full" src="./Thumbnail.jpg" alt="Article Image" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              TRAVEL CREW - A Flutter App Built with Appwrite | Appwrite
              Hashnode Hackathon
            </div>
            <p class="text-zinc-400 text-lg font-normal">
              Planning your next trip, but can't find travel partners? We solved
              your Problem!
            </p>
          </div>
          <div class="px-6 py-4">
            <a
              href="https://hashnode.com/article-url"
              class="bg-zinc-500 hover:bg-zinc-900 transition text-white font-bold py-2 px-4 rounded-full"
            >
              Read Article
            </a>
          </div>
        </div>
      </div>

      {/* </motion.div> 
     </AnimatePresence>  */}
    </>
  );
}

export default Blogs;
