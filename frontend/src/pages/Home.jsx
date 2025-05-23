import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  { title: "Instant Generation & Preview", desc: "Create a portfolio in seconds with customized templates and quick preview." },
  { title: "Customizable Designs", desc: "Personalize colors, layouts, and sections easily." },
  { title: "Responsive & Fast", desc: "Optimized for mobile, tablet, and desktop." },
  { title: "AI-Based Recommendations", desc: "Let AI suggest the best templates and styles for you." },
];

const rollingTextVariants = {
  animate: { x: ["100%", "-100%"], transition: { repeat: Infinity, duration: 10, ease: "linear" } }
};

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden font-inter">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-700 to-black opacity-20"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-400 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute top-20 right-10 w-60 h-60 bg-blue-400 rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* Rolling Text Animation */}
      <div className="absolute top-8 w-full overflow-hidden whitespace-nowrap">
        <motion.div className="text-2xl font-bold text-pink-400 uppercase tracking-wider" variants={rollingTextVariants} animate="animate">
          🚀 Build Your Portfolio Instantly | 🎨 AI-Powered Customization | ⚡ Blazing Fast Performance |
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text animate-pulse">
           Portfolio Generator
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-lg mx-auto">
          Instantly create stunning, personalized portfolios in just a few clicks. Showcase your work beautifully with AI-generated designs.
        </p>
        
        {/* Call to Action Button */}
        <motion.button
          onClick={() => navigate("/login")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg hover:shadow-pink-400 transition-all"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Features Carousel */}
      <div className="relative mt-16 w-full max-w-3xl h-40 overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-400">{features[currentIndex].title}</h3>
          <p className="text-gray-400 mt-2">{features[currentIndex].desc}</p>
        </motion.div>
      </div>

    </div>
  );
};

export default Home;
