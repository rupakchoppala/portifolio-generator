import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";
import Portfolio from "./components/preview";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/preview" element={< Portfolio/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
