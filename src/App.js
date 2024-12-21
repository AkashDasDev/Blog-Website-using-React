import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home"; 
import Login from "./pages/login/Login"; 
import Register from "./pages/register/Register"; 


function App() {
  return (
    <Router>
      {/* <>
        <TopBar />
        <Sidebar />
      </> */}
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
