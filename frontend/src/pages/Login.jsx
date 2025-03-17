import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center  text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
          Login
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
         

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleInputChange}
              className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don`t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            signUp here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
