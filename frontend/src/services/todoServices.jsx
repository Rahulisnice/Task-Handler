import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

//get user token
const user = JSON.parse(localStorage.getItem("todoapp")) || {};

//default auth header
axios.defaults.headers.common["Authorization"] = user.token
  ? `bearer ${user.token}`
  : "";

//CREATE TODO
const createTodo = (data) => {
  return axios.post(`${API_BASE_URL}/api/todo/create`, data);
};

//GET ALL TODO
const getAllTodo = (id) => {
  return axios.post(`${API_BASE_URL}/api/todo/getAll/${id}`);
};

//UPDATE ALL TODO
const updateTodo = (id, data) => {
  console.log(id);
  return axios.patch(`${API_BASE_URL}/api/todo/update/` + id, data);
};

//GET ALL TODO
const deleteTodo = (id) => {
  return axios.delete(`${API_BASE_URL}/api/todo/delete/` + id);
};

const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
export default TodoServices;
