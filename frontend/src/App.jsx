import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";
import Portfolio from "./components/preview";
import Register from "./pages/Register";
import { Toaster } from 'react-hot-toast';
import { useSelector,useDispatch } from "react-redux";
import { setUserData } from "./store/userSlice";
import axiosInstance from "./apiCalls";
import { useEffect ,useState} from "react";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/Home";
import UserPortfolio from "./components/portifolio";
function App() {
  const { userData } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("id"); // Assuming you store it during login
        const response = await axiosInstance.get(`/api/user/get-portfolio/${userId}`);
        console.log(response.data);
        dispatch(setUserData(response.data));
        console.log("dispatched the data")
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/editor" element={<ProtectedRoute><Editor /></ProtectedRoute>} />
        <Route path="/preview" element={<ProtectedRoute>< Portfolio userData={userData}/></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserPortfolio />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;
