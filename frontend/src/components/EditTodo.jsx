import React, { useState } from "react";
import toast from "react-hot-toast";
import TodoServices from "../services/todoServices";

const EditTodo = ({ task, setShowModel }) => {
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);
  const [isCompleted, setIsCompleted] = useState(task?.isCompleted);

  //close
  const handleClose = () => {
    setShowModel(false);
  };

  const id = task?._id;
  //update
  const handleSubmit = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("todoapp"));
      const createdBy = userData && userData.user.id;
      const data = { title, description, createdBy, isCompleted };

      if (!title || !description) {
        return toast.error("Please provide title and description");
      }

      await TodoServices.updateTodo(id, data);
      setShowModel(false);
      toast.success("Task updated successfully");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      {task && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-xl shadow-2xl w-full max-w-md mx-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-200">
              <h5 className="text-xl font-semibold text-purple-700">
                Update your Task
              </h5>
              <button
                className="text-purple-400 hover:text-purple-700 transition"
                aria-label="close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="px-6 py-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-purple-700 mb-1">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="floatingTetxArea"
                  className="block text-sm font-medium text-purple-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="floatingTetxArea"
                  placeholder="Add your description"
                  className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none bg-white/80"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <select
                  value={isCompleted}
                  onChange={(e) => setIsCompleted(e.target.value === "true")}
                >
                  <option value="true">Completed</option>
                  <option value="false">Incompleted</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 px-6 py-4 border-t border-purple-200">
              <button
                onClick={handleClose}
                type="button"
                className="px-4 py-2 rounded-lg bg-pink-100 text-pink-700 hover:bg-pink-200 transition"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition font-semibold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
