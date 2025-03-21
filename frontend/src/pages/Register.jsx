import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../apiCalls/auth";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaUser, FaImage } from "react-icons/fa";

const Register = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (!userData.firstname || !userData.lastname || !userData.email || !userData.password) {
      alert("Please fill in all fields.");
      return;
    }
  
   
  
    try {
     
      const response = await signUp(userData);
      console.log("Response:", response);  // <-- Log response for debugging
      if (response?.success) {
        toast.success(response?.message);
        navigate("/dashboard");  // Redirect if successful
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.error("Error during signup:", error); // <-- Log the error
      toast.error(`Error: ${error.message || "Something went wrong"}`);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 font-inter">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <FaUser className="absolute top-3 left-3 text-gray-700" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userData.firstname}
                onChange={(e)=>setUserData({...userData,firstname:e.target.value})}
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="relative w-1/2">
              <FaUser className="absolute top-3 left-3 text-gray-700" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userData.lastname}
                onChange={(e)=>setUserData({...userData,lastname:e.target.value})}
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-700" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={(e)=>setUserData({...userData,email:e.target.value})}
              className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-700" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e)=>setUserData({...userData,password:e.target.value})}
              className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* <div className="relative">
            <FaImage className="absolute top-3 left-3 text-gray-600" />
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleInputChange}
              className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
