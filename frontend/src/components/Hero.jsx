//import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react"
const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay}
    }



})
const Hero=({data})=>{
     return (
        <>
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:text-[95px] lg:mt-16 font-inter">{data?.firstName+" "+data?.lastName}</motion.h1>
                    <motion.span variants={container(0.5)}
                        initial="hidden"
                        animate="visible" className=" font-inter bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                       {data?.role}
                    </motion.span>
                    <motion.p variants={container(1)}
                        initial="hidden"
                        animate="visible" className="my-2 max-w-xl py-4 font-light  font-inter">{data?.description}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-self-end">
                        <div className="w-full h-full rounded-b-full overflow-hidden border-b-[1px] border-purple-400">
                        <motion.img initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}} 
                        transition={{duration:1,delay:1.2}} src={data?.profilePic} alt="Rupak choppala" />
                        </div>
                    </div>

                </div>

            </div>
        </div>

        </>
     )
}
export default Hero;