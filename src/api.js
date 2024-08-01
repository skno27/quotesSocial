import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// defining the axios interceptor!

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // remove authorization header for unauthenticated requests
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Adding a response interceptor to handle errors globally

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Redirect to login or refresh token
        console.error("Unauthorized access - go back to login");
      }
      if (error.response.status === 403) {
        // Forbidden access
        console.error(
          "Forbidden - you don't have permission to access this resource"
        );
      }
      console.error(
        `Error code: ${error.response.status} -- ${error.response.status}`
      );
    }
    return Promise.reject(error);
  }
);

export default api;
