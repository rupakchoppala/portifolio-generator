import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../store/userSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const [hasPortfolio, setHasPortfolio] = useState(false);

  // // Check for portfolio data
  useEffect(() => {
    const checkPortfolio = async () => {
      try {
        const userId = localStorage.getItem("id"); // Assuming you store it during login
        const response = await axiosInstance.get(`/api/user/get-portfolio/${userId}`);
        if (response.data) {
          dispatch(setUserData(response.data)); // Save data to Redux
          setHasPortfolio(true);
        }
      } catch (error) {
        console.error("Error checking portfolio:", error);
        setHasPortfolio(false); // Ensure proper fallback
      }
    };
    checkPortfolio();
  }, [dispatch]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Welcome to Your Portfolio Generator
      </h1>

      {/* Conditional Rendering */}
      {hasPortfolio ? (
        <button
        onClick={async () => {
          const userId = localStorage.getItem("id");
          try {
            const response = await axiosInstance.get(`/api/user/get-portfolio/${userId}`);
            if (response.data) {
              dispatch(setUserData(response.data)); // Refresh Redux with latest data
            }
          } catch (error) {
            console.error("Error fetching portfolio data:", error);
          }
          navigate("/editor",{ state: { hasPortfolio } }); // Navigate after data is updated
        }}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700"
      >
        Update Portfolio
      </button>
      
      ) : (
        <button
          onClick={() => navigate("/editor",{ state: { hasPortfolio } })}
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-blue-700"
        >
          Create Portfolio
        </button>
      )}
    </div>
  );
};

export default Dashboard;
