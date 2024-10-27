import { configureStore } from "@reduxjs/toolkit"; // Import function to configure the Redux store
import userReducer from "./redux/userSlice.js"; // Import the user slice reducer

const store = configureStore({
  // Create the Redux store
  reducer: {
    user: userReducer, // Register the user reducer
  },
});

export default store; // Export the configured store
