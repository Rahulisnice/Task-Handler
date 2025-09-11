import React, { useState } from "react";
import EditTodo from "./EditTodo";
import toast from "react-hot-toast";
import TodoServices from "../services/todoServices";

const Card = ({ allTask, getUserTask }) => {
  const [showModel, setShowModel] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowModel(true);
  };

  const handleDelete = async (id) => {
    try {
      await TodoServices.deleteTodo(id);
      toast.success("task deleted successfully");
      getUserTask();
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {allTask?.length === 0 ? (
        <div className="text-center text-gray-500 py-8">No tasks found.</div>
      ) : (
        allTask.map((task, _id) => (
          <>
            <div
              className="bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg rounded-xl p-6 flex flex-col transition-transform hover:scale-105 hover:shadow-xl"
              key={_id}
            >
              <div className="mb-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-400"></span>
                  <h6 className="text-xl font-bold text-gray-900">
                    {task?.title}
                  </h6>
                </div>
                <h6
                  className={`text-sm font-semibold ${
                    task?.isCompleted ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {task?.isCompleted === true ? "Completed" : "Incompleted"}
                </h6>
              </div>
              <div className="card-body mb-4">
                <p className="text-gray-600 mb-2">{task?.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <h6 className="text-sm text-gray-500">
                    Date: {task?.createdAt.substring(0, 10)}
                  </h6>
                  <div className="flex gap-1">
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:scale-110 transition-transform"
                      title="EDIT Task"
                      onClick={() => handleEdit(task)}
                      src="https://img.icons8.com/?size=100&id=alIcuZZ5oF3H&format=png&color=000000"
                      alt="Edit"
                    />
                    <img
                      onClick={() => handleDelete(task?._id)}
                      className="w-8 h-8 object-contain cursor-pointer hover:scale-110 transition-transform"
                      title="DELETE Task"
                      src="https://img.icons8.com/?size=100&id=PN84GwwZXtfH&format=png&color=000000"
                      alt="Delete"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {showModel && (
                <EditTodo
                  getUserTask={getUserTask}
                  task={editingTask}
                  setShowModel={setShowModel}
                />
              )}
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default Card;
