// Import the ReportHandler type from 'web-vitals'
import { ReportHandler } from 'web-vitals';


const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  // Check if onPerfEntry is provided and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library and its functions
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each Web Vitals function with the onPerfEntry callback
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function
export default reportWebVitals;
