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

  useEffect(async() => {
    const token = localStorage.getItem("token"); // Assuming you're storing it here

const response = await fetch(`https://portifolio-generator-4.onrender.com/api/user/${firstName}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Attach the token
  },
  
});
const data = await response.json();
setUserData(data);
  }, [firstName]);

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
