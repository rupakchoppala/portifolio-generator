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
import { useEffect } from "react";
import ProtectedRoute from "./components/protectedRoute";
function App() {
  const { userData } = useSelector((state) => state.user);
  const dispatch=useDispatch();
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get('/api/user/get-portifolio');
            console.log(response);
            dispatch(setUserData(response.data));
        } catch (error) {
            console.error("Error fetching portfolio:", error);
        }
    };
    fetchData();
}, []);

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/editor" element={<ProtectedRoute><Editor /></ProtectedRoute>} />
        <Route path="/preview" element={<ProtectedRoute>< Portfolio userData={userData}/></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;
