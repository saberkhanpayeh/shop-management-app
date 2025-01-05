import axios from "axios";
import { getCookie } from "../utils/cookie";

//get url from env file for create an api
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (request) => {
    const token=getCookie("token")
    // const token="jkjkjkc66deefd1cd1c5d";
    if(token)
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default api;
