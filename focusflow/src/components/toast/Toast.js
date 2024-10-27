import React from "react"; // Import React
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications

const Toast = () => {
  return <ToastContainer />; // Render the ToastContainer for displaying notifications
};

// Function to show toast notifications
export const showToast = (message, type) => {
  if (type === "success") {
    toast.success(message); // Show success notification
  } else if (type === "error") {
    toast.error(message); // Show error notification
  }
};

export default Toast; // Export the Toast component
