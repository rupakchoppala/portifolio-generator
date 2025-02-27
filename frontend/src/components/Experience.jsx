import React from 'react'
//import { EXPERIENCES } from '../constants'
import {motion} from "motion/react"

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl '>Experience</motion.h1>
      
    </div>
  )
}

export default Experience