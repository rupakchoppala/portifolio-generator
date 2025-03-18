import { motion } from 'framer-motion';
import { FaUserGraduate, FaLaptopCode, FaLightbulb, FaRocket } from 'react-icons/fa';

export default function AboutMe() {
    return (
        <div className=" flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="shadow-2xl rounded-2xl grid grid-cols-2 gap-8 text-center"
            >
                {/* Student Icon */}
                <motion.div
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    className="p-8  text-white rounded-full shadow-2xl border-4 border-white/20"
                    whileTap={{ scale: 1 }}
                >
                    <FaUserGraduate className="text-7xl animate-pulse" />
                </motion.div>

                {/* Developer Icon */}
                <motion.div
                    whileHover={{ scale: 1.3, rotate: -15 }}
                    className="p-8  text-white rounded-full shadow-2xl border-4 border-white/20"
                    whileTap={{ scale: 1 }}
                >
                    <FaLaptopCode className="text-7xl animate-bounce" />
                </motion.div>

                {/* Creative Thinker Icon */}
                <motion.div
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    className="p-8  text-white rounded-full shadow-2xl border-4 border-white/20"
                    whileTap={{ scale: 1 }}
                >
                    <FaLightbulb className="text-7xl animate-spin" />
                </motion.div>

                {/* Driven Personality Icon */}
                <motion.div
                    whileHover={{ scale: 1.3, rotate: -15 }}
                    className="p-8  text-white rounded-full shadow-2xl border-4 border-white/20"
                    whileTap={{ scale: 1 }}
                >
                    <FaRocket className="text-7xl animate-pulse" />
                </motion.div>
            </motion.div>
        </div>
    );
}
