import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../apiCalls/user";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
//import { setUserData } from "../store/userSlice";

const ProtectedRoute = ({ children }) => {
  //const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getLoggedInUser = async () => {
    try {
      const response = await getLoggedUser();
      console.log("getLoggedUser Response:", response);
      if (response?.success) {
       
        console.log("User data set in Redux:", response.data);
      } else {
        throw new Error(response?.message || "Session expired.");
      }
    } catch (error) {
      console.error("Error in getLoggedInUser:", error);
      toast.error(error.message);
      localStorage.removeItem("token");  // ✅ Only remove token if invalid
      navigate("/");
    } finally {
      setLoading(false);  // ✅ Move this here to ensure it runs after the API call
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getLoggedInUser();
    } else {
      console.log("No token found, redirecting to login");
      navigate("/");
    }
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl">Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
