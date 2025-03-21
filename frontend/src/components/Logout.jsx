import { useDispatch } from "react-redux";
import { persistor } from "../store/store";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "RESET_STATE" });
    persistor.purge();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
    navigate("/");
    console.log("User logged out and state reset!");
  };

  return (
    <button
      onClick={handleLogout}
      className="relative top-0 lg:left-[600px] right-2 flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <LogOut size={20} />
      Logout
    </button>
  );
};

export default LogoutButton;
