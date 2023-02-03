import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_baseURL,
  headers: { "X-Custom-Header": "foobar" },
});
export default axiosInstance;
