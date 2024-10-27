// Import styles from App.css
import "./App.css";

// Import 'useSelector' to access the Redux store state
import { useSelector } from "react-redux";

// Import 'Main' component
import Main from "./Main";

// Import 'getIsLoggedIn' selector to get login status
import { getIsLoggedIn } from "./redux/userSlice";

// Import 'AuthScreen' component
import AuthScreen from "./pages/auth/AuthScreen";

function App() {
  // Get 'isloggedIn' state from Redux store
  const isloggedIn = useSelector(getIsLoggedIn);

  return (
    <div className="App">
      {/* Render 'Main' if logged in, else render 'AuthScreen' */}
      {isloggedIn ? <Main /> : <AuthScreen />}
    </div>
  );
}

// Export 'App' component
export default App;
