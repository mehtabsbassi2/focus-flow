import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Router setup
import NavBar from "./components/navbar/NavBar"; // Navigation bar
import HomePage from "./pages/home/HomePage"; // Home page
import DashboardPage from "./pages/dashboard/DashboardPage"; // Dashboard page
import WorkBreakTimer from "./pages/timer/WorkBreakTimer"; // Timer page

const Main = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home route */}
          <Route exact path="/dashboard" element={<DashboardPage />} />{" "}
          {/* Dashboard route */}
          <Route exact path="/timer" element={<WorkBreakTimer />} />{" "}
          {/* Timer route */}
        </Routes>
      </Router>
    </div>
  );
};

export default Main; // Export Main component
