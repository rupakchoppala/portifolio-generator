import axiosInstance from "./index";
export const signUp = async (userData) => {
    console.log("➡️ Data sent to API:", userData);  // Check if data is reaching here
  
    try {
      const response = await axiosInstance.post('/api/auth/signup', userData);
      console.log("✅ API Response:", response);  // Log the full response
  
      return response.data; // Ensure response data is returned
    } catch (error) {
      console.error("❌ API Error:", error?.response || error);
      throw error;
    }
  };
  export const LoginUser = async (userData) => {
    console.log("➡️ Data sent to API:", userData);  // Check if data is reaching here
    try {
      const response = await axiosInstance.post('/api/auth/login', userData);
      console.log("✅ API Response:", response);  // Log the full response
  
      return response.data; // Ensure response data is returned
    } catch (error) {
      console.error("❌ API Error:", error?.response || error);
      throw error;
    }
  };
