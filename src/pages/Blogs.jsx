import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { slideAnimation } from '../config/motion'

function Blogs() {
    const variants = slideAnimation("home", "blogs");

    return (
        <AnimatePresence>
            <motion.div
               initial="initial"
               animate="animate"
               exit="exit"
               variants={variants}
               >
                hello , its blogs

            </motion.div>
        </AnimatePresence>
    )
}

export default Blogs