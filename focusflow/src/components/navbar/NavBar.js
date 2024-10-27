import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link for routing
import "./Navbar.css"; // Import styles

const NavBar = () => {
  return (
    <nav className="navbar">
      {" "}
      {/* Navigation container */}
      <Link to="/" className="nav-link">
        Home
      </Link>{" "}
      {/* Home link */}
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>{" "}
      {/* Dashboard link */}
      <Link to="/timer" className="nav-link">
        Work-Break Timer
      </Link>{" "}
      {/* Timer link */}
    </nav>
  );
};

export default NavBar; // Export the NavBar component
