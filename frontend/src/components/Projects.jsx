import React from 'react'
//import { PROJECTS } from '../constants';
import {motion} from "motion/react"
const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1  whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'>
            Projects
            </motion.h1>
        <div>bnn</div>
    </div>
  )
}

export default Project;