import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // if()
  // localStorage.clear();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-white">Welcome to Your Portfolio Generator</h1>
      <button
        onClick={() => navigate("/editor")}
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-blue-700"
      >
        Create Portfolio
      </button>
    </div>
  );
};

export default Dashboard;
