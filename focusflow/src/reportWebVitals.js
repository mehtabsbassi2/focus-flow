const reportWebVitals = (onPerfEntry) => {
  // Function to report performance metrics
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Check if valid callback
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Dynamically import web-vitals
      getCLS(onPerfEntry); // Report Cumulative Layout Shift
      getFID(onPerfEntry); // Report First Input Delay
      getFCP(onPerfEntry); // Report First Contentful Paint
      getLCP(onPerfEntry); // Report Largest Contentful Paint
      getTTFB(onPerfEntry); // Report Time to First Byte
    });
  }
};

export default reportWebVitals; // Export the function
