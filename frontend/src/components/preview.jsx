import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technoligies from "./Technologies";
import Experience from "./Experience";
import Project from "./Projects";
//import Contact from "./Contact";

const Portfolio = ({ userData }) => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layer */}
      <div className="absolute top-0 z-[-2] h-auto w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8 h-auto overflow-x-hidden">
          <Navbar />
          <Hero data={userData} />
          <About data={userData} />
          <Technoligies data={userData} />
          <Experience data={userData} />
          <Project data={userData} />
          {/* <Contact data={userData.contact} /> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
