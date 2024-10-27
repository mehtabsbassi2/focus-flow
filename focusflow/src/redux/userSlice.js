// Import the 'createSlice' method from Redux Toolkit to create a slice of the state.
import { createSlice } from "@reduxjs/toolkit";

// Initial state object with two properties:
// 'isloggedIn' to track if a user is logged in, initially set to false,
// and 'loggedUser' to store user information, initially an empty object.
const initialState = {
  isloggedIn: false,
  loggedUser: {}, // Stores details of the currently logged-in user
};

// Create a slice for user-related actions and state management.
const userSlice = createSlice({
  // Name of the slice, which helps identify it in Redux's global state.
  name: "user",
  // Initial state for the slice.
  initialState,
  // Reducers are functions that specify how the state is updated in response to actions.
  reducers: {
    // Reducer function to set the 'isloggedIn' status.
    setIsLoggedIn: (state, { payload }) => {
      state.isloggedIn = payload; // Updates 'isloggedIn' with the payload (true or false).
    },
    // Reducer function to log out the user by setting 'isloggedIn' to false.
    setLogOut(state) {
      state.isloggedIn = false; // Sets 'isloggedIn' to false to log out the user.
    },
    // Reducer function to update the 'loggedUser' data with the payload.
    setUser: (state, { payload }) => {
      state.loggedUser = payload; // Updates 'loggedUser' with the provided payload (user data).
    },
  },
});

// Exporting individual action creators generated automatically by createSlice for dispatching actions.
// This will allow components to dispatch these actions to modify the state.
export const { setIsLoggedIn } = userSlice.actions;
export const { setLogOut } = userSlice.actions;
export const { setUser } = userSlice.actions;

// Selector function to get the 'isloggedIn' status from the state.
// Used in components to retrieve the 'isloggedIn' value.
export const getIsLoggedIn = (state) => state.user.isloggedIn;

// Selector function to get the 'isloggedIn' status for log-out checking.
// Used in components to check if the user is logged out (can be simplified).
export const getLogout = (state) => state.user.isloggedIn;

// Selector function to get the 'loggedUser' data from the state.
// Used in components to access user information.
export const getUser = (state) => state.user.loggedUser;

// Export the reducer to be added to the Redux store. This handles state updates based on the actions.
export default userSlice.reducer;
