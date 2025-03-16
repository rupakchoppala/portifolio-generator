// import {RiReactjsLine}  from "react-icons/ri";
// import {TbBrandNextjs}  from "react-icons/tb";
// import {SiMongodb}  from "react-icons/si";
// import {DiRedis}  from "react-icons/di";
// import {FaNodeJs}  from "react-icons/fa";
// import {BiLogoPostgresql}  from "react-icons/bi";
// import {motion} from "motion/react"
// const iconVariants=(duration)=>({
//    initial:{y:-10},
//    animate:{y:[10,-10],
//     transition:{
//       duration,
//       ease:"linear",
//       repeat:Infinity,
//       repeatType:"reverse"
//     }
//   }
// })


// const  Technoligies= () => {
//   return (
//     <div className='border-b border-neutral-900 pb-2'>
//         <motion.h1 whileInView={{opacity:1,y:0}}
//         initial={{opacity:0,y:-100}}
//         transition={{duration:1.5}}
//         className='my-20 text-center text-4xl'>Technologies</motion.h1>
//         <motion.div whileInView={{opacity:1,x:0}}
//         initial={{opacity:0,x:-100}}
//         transition={{duration:1.5}}
//         className='flex flex-wrap items-center justify-center gap-4'>
//             <motion.div variants={iconVariants(2.5)}
//             initial="initial"
//             animate='animate'
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <RiReactjsLine className=" text-7xl text-cyan-400"/>
//             </motion.div>
//             <motion.div variants={iconVariants(3)}
//             initial="initial"
//             animate='animate'
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <TbBrandNextjs className=" text-7xl "/>
//             </motion.div>
//             <motion.div variants={iconVariants(5)}
//             initial="initial"
//             animate='animate'
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <SiMongodb className=" text-7xl text-green-400"/>
//             </motion.div>
//             <motion.div variants={iconVariants(6)}
//             initial="initial"
//             animate='animate'
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <DiRedis className=" text-7xl text-red-700"/>
//             </motion.div>
//             <motion.div variants={iconVariants(7)}
//             initial="initial"
//             animate='animate'
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <FaNodeJs className=" text-7xl text-green-400"/>
//             </motion.div>
//             < motion.div variants={iconVariants(4)}
//             initial="initial"
//             animate='animate'
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <BiLogoPostgresql className=" text-7xl text-blue-700"/>
//             </motion.div>
            
             

//         </motion.div>

//     </div>
//   )
// }

// export default Technoligies;import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as TbIcons from "react-icons/tb";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";

const iconSets = { Si: SiIcons, Fa: FaIcons, Di: DiIcons, Tb: TbIcons, Ri: RiIcons, Bi: BiIcons, Md: MdIcons, Io: IoIcons };

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: { y: [10, -10], transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" } }
});

const getIconComponent = (stack) => {
  const formattedStack = stack.replace(/\s/g, "").toLowerCase();

  const specialCases = {
    nextjs: "SiNextdotjs", // Map "Next.js" or "Nextjs" to "SiNextdotjs"
  };

  if (specialCases[formattedStack]) {
    return SiIcons[specialCases[formattedStack]];
  }

  for (const [lib, icons] of Object.entries(iconSets)) {
    const possibleNames = [
      `${lib}${formattedStack.charAt(0).toUpperCase() + formattedStack.slice(1)}`,
      `${lib}${formattedStack.toUpperCase()}`,
      `${lib}${formattedStack.replace(/[^a-zA-Z]/g, "").toUpperCase()}`
    ];

    for (const name of possibleNames) {
      if (icons[name]) return icons[name];
    }
  }

  console.warn(`⚠️ Icon not found for: ${stack}`);
  return FaIcons.FaCode; // Fallback icon
};



const Technologies = ({ data }) => {
  const techStack = data?.techStack || [];
  console.log(techStack);


  if (!Array.isArray(techStack) || techStack.length === 0) {
    return <p className="text-center text-2xl">No technologies available.</p>;
  }

  return (
    <div className="border-b border-neutral-900 pb-2">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
       {techStack.length === 0 ? (
  <p className="text-xl text-neutral-500">No technologies available</p>
) : (
  techStack.map((stack, index) => {
    const Icon = getIconComponent(stack);
    return (
      <motion.div
        key={stack}
        variants={iconVariants(index + 2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
      >
        {Icon ? <Icon className="text-7xl" /> : <p className="text-2xl">❓</p>}
      </motion.div>
    );
  })
)}

      </motion.div>
    </div>
  );
};

export default Technologies;