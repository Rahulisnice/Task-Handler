const express = require("express");
const {
  createTodoController,
  getTodoController,
  deleteTodoController,
  UpdateTodoController,
} = require("../controller/todoController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//create todo
router.post("/create", authMiddleware, createTodoController);

//get todo
router.post("/getAll/:userId", authMiddleware, getTodoController);

//delete todo
router.delete("/delete/:id", authMiddleware, deleteTodoController);

//update todo
router.patch("/update/:id", authMiddleware, UpdateTodoController);

module.exports = router;
