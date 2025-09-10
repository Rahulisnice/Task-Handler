import axios from "axios";

const registerUser = (data) => {
  return axios.post("/api/user/register", data);
};

const loginUser = (data) => {
  return axios.post("/api/user/login", data);
};

const AuthServices = { registerUser, loginUser };
export default AuthServices;
