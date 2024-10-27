import React, { useState } from "react"; // Import React and useState hook
import { useDispatch } from "react-redux"; // Import useDispatch for Redux
import { setIsLoggedIn } from "../../redux/userSlice"; // Import action to set login state
import Login from "./Login"; // Import Login component
import Register from "./Register"; // Import Register component

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  const toggleAuth = () => {
    setIsLogin(!isLogin); // Toggle between login and register states
  };

  const dispatch = useDispatch(); // Initialize dispatch function
  const handleLogin = () => {
    dispatch(setIsLoggedIn(true)); // Dispatch action to set user as logged in
  };

  return isLogin ? (
    <Login onLogin={handleLogin} onSwitchToRegister={toggleAuth} /> // Render Login component
  ) : (
    <Register
      onRegister={() => alert("Registered!")}
      onSwitchToLogin={toggleAuth}
    /> // Render Register component
  );
};

export default AuthScreen; // Export AuthScreen component
