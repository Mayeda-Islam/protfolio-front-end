import axios from "axios";
// console.log("API URL:", import.meta.env.VITE_BASE_URL);

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_baseURL,
  headers: { "X-Custom-Header": "foobar" },
});
export default axiosInstance;
