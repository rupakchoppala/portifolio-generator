import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Project from "./Projects";
import Contact from "./contacts";

const Portfolio = ({ userData }) => {
  const userId = localStorage.getItem("id"); // Get userId from localStorage
  const portfolioLink = `https://portifolio-generator-4.onrender.com/api/user/${userId}`;

  return (
    <div className="w-full min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 font-inter">
      {/* Background Layer */}
      <div className="top-0 h-full w-full"></div>
      <div className="absolute top-0 h-auto w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8 h-auto overflow-x-hidden">
          <Navbar data={userData} />
          <Hero data={userData} />
          <About data={userData} />
          <Technologies data={userData} />
          <Experience data={userData} />
          <Project data={userData} />
          <Contact data={userData} />

          {/* Portfolio Link Button */}
          <div className="mt-8 flex justify-center">
            <a 
              href={portfolioLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-cyan-500 text-neutral-900 font-bold rounded-lg hover:bg-cyan-600 transition duration-300"
            >
             Link for the future Use and Refernce: {portfolioLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
