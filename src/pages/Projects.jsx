import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { slideAnimation } from '../config/motion'

function Projects() {
  const variants = slideAnimation("projects", "home");

  return (
    <AnimatePresence>
      <motion.div
           initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      >
        hello , its projecst

      </motion.div>
    </AnimatePresence>
  )
}

export default Projects