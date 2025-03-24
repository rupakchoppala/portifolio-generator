import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./contacts";

const UserPortfolio = () => {
  const { id } = useParams(); // Ensure the parameter matches the route path
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Fetching user data for:", id);
        
        const { data } = await axios.get(
          `https://portifolio-generator-4.onrender.com/api/user/${id}`
        );
        console.log("Fetched Data:", data);
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.response?.data || err.message);
      }
    };

    fetchUserData();
  }, [id]);

  if (error) return <h2 className="text-red-500">Error: {error}</h2>;
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
