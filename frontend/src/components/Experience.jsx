import React from 'react'
//import { EXPERIENCES } from '../constants'
import {motion} from "motion/react"

const Experience = ({data}) => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl '>Experience</motion.h1>
       <div>
            {
                data?.experience.map((experience,index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
                        className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'> {experience?.duration}</p>

                        </motion.div>
                        <motion.div  whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
                        className='w-full max-w-xl lg:3/4'>
                            <h6 className='mb-2 font-semibold'>{experience?.position}-{" "} 
                            <span className='text-sm text-purple-100'>
                                {experience?.company}</span>
                                <p className='mb-4 text-neutral-400'>{experience?.description}</p></h6>
                                     <p className='mb-4 text-neutral-400'>
                              {experience?.technologies?.map((tech,index)=>(
                                <span className='mr-2 mt-4 rounded bg-neutral-900 text0-sm font-medium text-purple-800'>{tech}</span>
                              ))}
                                     </p>
                        </motion.div>
                        </div>
                ))
            }
        </div>
    </div>
  )
}

export default Experience