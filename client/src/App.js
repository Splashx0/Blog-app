import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Createblog from "./pages/Createblog";
import Footer from "./components/Footer";
import Notfound from "./pages/Notfound";
import Blogdetails from "./pages/Blogdetails";
import useAuthContext from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<Blogdetails />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/create"
          element={user ? <Createblog /> : <Navigate to="/login" />}
        />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
