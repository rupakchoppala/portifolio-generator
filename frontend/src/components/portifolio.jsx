import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./contacts";

const UserPortfolio = () => {
  const { firstName } = useParams();  // Get the username from the URL
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://portifolio-generator-3.onrender.com/user/${firstName}`) // Fetch user data from backend
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error(err));
  }, [username]);

  if (!userData) return <h2>Loading...</h2>;

  return (
    <div className="w-full min-h-screen overflow-x-hidden text-neutral-300 antialiased">
      <Navbar data={userData} />
      <Hero data={userData} />
      <About data={userData} />
      <Technologies data={userData} />
      <Experience data={userData} />
      <Projects data={userData} />
      <Contact data={userData} />
    </div>
  );
};

export default UserPortfolio;
