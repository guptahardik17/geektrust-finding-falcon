import axios from 'axios';
// import { store } from '../../store';

// Add a request interceptor
var axiosInstance = axios.create();
// request
axiosInstance.interceptors.request.use(
  config => {
    // Common API config changes can be handled here.
    
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
//response
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
