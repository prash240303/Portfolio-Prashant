import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { slideAnimation } from '../config/motion'
import Profile from '../components/Profile';

function Blogs() {
    const variants = slideAnimation("home", "blogs");

    return (
        <AnimatePresence>
            <motion.div
               initial="initial"
               animate="animate"
               exit="exit"
               variants={variants}
               className="view-container mt-6 w-[900px] grid grid-col-1 item-start justify-start gap-12"
               >
                blgs
                
            </motion.div>
        </AnimatePresence>
    )
}

export default Blogs