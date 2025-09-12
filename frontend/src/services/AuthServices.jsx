import axios from "axios";

const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8080/api"
    : import.meta.env.VITE_API_BASE_URL;

const registerUser = (data) => {
  return axios.post(`${API_BASE_URL}/api/user/register`, data);
};

const loginUser = (data) => {
  return axios.post(`${API_BASE_URL}/api/user/login`, data);
};

const AuthServices = { registerUser, loginUser };
export default AuthServices;
