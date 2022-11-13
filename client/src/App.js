import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Createblog from "./pages/Createblog";
import Footer from "./components/Footer";
import Notfound from "./pages/Notfound";
import Blogdetails from "./pages/Blogdetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<Blogdetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Createblog />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
