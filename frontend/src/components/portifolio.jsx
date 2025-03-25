import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technoligies from "./Technologies";
import Experience from "./Experience";
import Project from "./Projects";
import Contact from "./contacts";


const UserPortfolio = () => {
  const { id } = useParams(); // Ensure the parameter matches the route path
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Fetching user data for:", id);
        const response = await axios.get(`https://portifolio-generator-3.onrender.com/api/user/${id}`, {
          headers: { "Content-Type": "application/json" },
        });
    
        console.log("Full Response:", response);
    
        // // Check if response is JSON
        // const contentType = response.headers.get("content-type");
        // if (!contentType || !contentType.includes("application/json")) {
        //   const responseText = await response.text();
        //   console.error("Received non-JSON response:", responseText);
        //   throw new Error("Invalid response format (expected JSON)");
        // }
    
        const data = await response.data.data;
        console.log("Fetched Data:", data);
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.message);
      }
    };
    

    fetchUserData();
  }, [id]);

  if (error) return <h2 className="text-red-500">Error: {error}</h2>;
  if (!userData) return <h2>Loading...</h2>;

  return (
    <div className="w-full min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 font-inter">
      {/* Background Layer */}
      <div className=" top-0  h-full w-full"> </div>
      <div className="absolute top-0  h-auto w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8 h-auto overflow-x-hidden">
          <Navbar data={userData} />
          <Hero data={userData} />
          <About data={userData} />
          <Technoligies data={userData} />
          <Experience data={userData} />
          <Project data={userData} />
          <Contact data={userData} />
        </div>
      </div>
    </div>

  );
};

export default UserPortfolio;
