import axios from "axios";

//get user token
const user = JSON.parse(localStorage.getItem("todoapp")) || {};

//default auth header
axios.defaults.headers.common["Authorization"] = user.token
  ? `bearer ${user.token}`
  : "";

//CREATE TODO
const createTodo = (data) => {
  return axios.post("/api/todo/create", data);
};

//GET ALL TODO
const getAllTodo = (id) => {
  return axios.post(`/api/todo/getAll/${id}`);
};

//UPDATE ALL TODO
const updateTodo = (id, data) => {
  console.log(id);
  return axios.patch(`/api/todo/update/` + id, data);
};

//GET ALL TODO
const deleteTodo = (id) => {
  return axios.delete(`/api/todo/delete/` + id);
};

const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
export default TodoServices;
