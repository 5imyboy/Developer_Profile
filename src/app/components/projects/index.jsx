"use client"
import { motion } from "framer-motion"
import ProjectLayout from "./ProjectLayout"

const container = {
  hidden: {opacity: 0},
  show: {
      opacity: 1,
      transition: {
          staggerChildren: .3,
          delayChildren: 1.5
      }
  }
}

const ProjectList = ({projects}) => {
  return (
    <div>
      {
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className='w-full max-w-auto xl:max-w-4xl px-4 lg:px-16 mx-auto space-y-6 md:space-y-8 flex flex-col items-center'
        >
          {projects.map((project, index) => {
            return <ProjectLayout key={index} {...project} />
           })}
        </motion.div>

      }
    </div>
  )
}

export default ProjectList