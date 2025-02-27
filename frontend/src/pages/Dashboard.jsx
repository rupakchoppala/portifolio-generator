import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Portfolio Generator</h1>
      <button
        onClick={() => navigate("/editor")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Create Portfolio
      </button>
    </div>
  );
};

export default Dashboard;
