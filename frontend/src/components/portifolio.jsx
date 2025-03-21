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
  const { userId } = useParams();  // Get the username from the URL
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        

        const response = await fetch(`https://portifolio-generator-4.onrender.com/api/user/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.text();
          throw new Error(`Error ${response.status}: ${errorData}`);
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.message);
      }
    };

    fetchUserData();
  }, [userId]);

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
