import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as TbIcons from "react-icons/tb";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";


const iconSets = { Si: SiIcons, Fa: FaIcons, Di: DiIcons, Tb: TbIcons, Ri: RiIcons, Bi: BiIcons, Md: MdIcons, Io: IoIcons };

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: { y: [10, -10], transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" } }
});

const techColors = {
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  react: "#61DAFB",
  nodejs: "#8CC84B",
  mongodb: "#47A248",
  express: "#000000",
  tailwind: "#38B2AC",
  firebase: "#FFCA28",
  typescript: "#3178C6",
  python: "#3776AB",
  flutter: "#02569B",
  nextjs: "#000000", // Dark theme
  redux: "#764ABC",
  graphql: "#E10098",
  aws: "#FF9900",
  docker: "#2496ED",
  github: "#181717"
};

const getIconComponent = (stack) => {
  const formattedStack = stack.replace(/\s/g, "").toLowerCase();

  const specialCases = {
    nextjs: "SiNextdotjs",
  };

  const color = techColors[formattedStack] || "#FFFFFF"; // Default to white if no color is found

  if (specialCases[formattedStack]) {
    return ({ className }) => (
      <div className="relative w-20 h-20 flex items-center justify-center" style={{ color }}>
        {React.createElement(SiIcons[specialCases[formattedStack]], { className: "text-7xl" })}
      </div>
    );
  }

  for (const [lib, icons] of Object.entries(iconSets)) {
    const possibleNames = [
      `${lib}${formattedStack.charAt(0).toUpperCase() + formattedStack.slice(1)}`,
      `${lib}${formattedStack.toUpperCase()}`,
      `${lib}${formattedStack.replace(/[^a-zA-Z]/g, "").toUpperCase()}`
    ];

    for (const name of possibleNames) {
      if (icons[name]) {
        return ({ className }) => (
          <div className="relative w-20 h-20 flex items-center justify-center" style={{ color }}>
            {React.createElement(icons[name], { className: "text-7xl" })}
          </div>
        );
      }
    }
  }

  return ({ className }) => (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <FaIcons.FaCode className="text-7xl text-neutral-400" />
      <span className="absolute text-white text-sm font-bold">
        {stack.slice(0, 6).toUpperCase()}
      </span>
    </div>
  );
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