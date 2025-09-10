const todoModel = require("../model/todoModel");

//CREATE TODO
const createTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;
    //validation
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "please provide title and description",
      });
    }
    const todo = new todoModel({ title, description, createdBy: req.userId });
    const result = await todo.save();
    res.status(201).send({
      success: true,
      message: "your task has been created",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      succsss: false,
      message: "error in create todo api",
    });
  }
};

//GET TODO
const getTodoController = async (req, res) => {
  try {
    //get userId
    const { userId } = req.params;
    //validate
    if (!userId) {
      return res.status(404).send({
        success: false,
        message: "no user found with this id",
      });
    }
    //find task
    const todos = await todoModel.find({ createdBy: req.userId });
    if (!todos) {
      return res.status(404).send({
        success: true,
        message: "you have no todos",
      });
    }
    res.status(200).send({
      success: true,
      message: "Your Todos",
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get todo api",
    });
  }
};

//DELETE TODO
const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).send({
        success: false,
        message: "no todo found in this id",
      });
    }
    //find id
    const todo = await todoModel.findByIdAndDelete({ _id: id });
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: "no task found",
      });
    }
    res.status(200).send({
      success: true,
      message: "your task has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in delete todo api",
    });
  }
};

//UPDATE TODO
const UpdateTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "please provide todo id",
      });
    }
    const data = req.body;
    //update
    const todo = await todoModel.findByIdAndUpdate(
      id,
      { $set: data },
      { returnOriginal: false }
    );
    res.status(200).send({
      success: true,
      message: "your task is updated",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in update todo api",
    });
  }
};

module.exports = {
  createTodoController,
  getTodoController,
  deleteTodoController,
  UpdateTodoController,
};
