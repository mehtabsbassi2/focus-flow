import React from "react"; // Import React library
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import "./index.css"; // Import global CSS styles
import App from "./App"; // Import the main App component
import reportWebVitals from "./reportWebVitals"; // Import performance measuring utility
import { Provider } from "react-redux"; // Import Provider to connect Redux
import store from "./store"; // Import the Redux store

// Enable strict mode for additional checks
// Provide the Redux store to the app
// Render the main App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
