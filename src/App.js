import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login"; 

function App() {
  return (
    <Router>
      {/* <>
        <TopBar />
        <Sidebar />
      </> */}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
