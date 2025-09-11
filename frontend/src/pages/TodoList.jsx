import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TodoServices from "../services/todoServices";

const TodoList = () => {
  const [todoStatus, setTodoStatus] = useState("");
  const [filteredTask, setFilteredTask] = useState([]);
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("todoapp"));
    const id = userData && userData.user.id;
    const getUserTask = async () => {
      try {
        const { data } = await TodoServices.getAllTodo(id);
        // console.log(data);
        setAllTask(data?.todos);
      } catch (error) {
        console.log(error);
      }
    };
    getUserTask();
    const incomplete = allTask?.filter((item) => item?.isCompleted === false);
    const completed = allTask?.filter((item) => item?.isCompleted === true);
    if (todoStatus === "incomplete") {
      setFilteredTask(incomplete);
    } else if (todoStatus === "completed") {
      setFilteredTask(completed);
    }
  }, [todoStatus]);

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg)",
        }}
      >
        <Navbar />
        <div className="filter-container bg-white shadow-xl rounded-lg p-6 max-w-xl mx-auto mt-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Filter Tasks by:
          </h4>
          <div className="filter-group">
            <select
              onChange={(e) => setTodoStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
              <option selected>Select Status</option>
              <option value="incomplete">Incomplete</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        {/* ========================== */}
        <>
          <div className="flex flex-col gap-6">
            {filteredTask?.length === 0 ? (
              <div className="text-center text-4xl text-orange-500 py-8">
                No tasks found.
              </div>
            ) : (
              filteredTask.map((task, _id) => (
                <div className="w-250 rounded-lg   mx-auto mt-6  ">
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
                        {task?.isCompleted === true
                          ? "Completed"
                          : "Incompleted"}
                      </h6>
                    </div>
                    <div className="card-body mb-4">
                      <p className="text-gray-600 mb-2">{task?.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <h6 className="text-sm text-gray-500">
                          Date: {task?.createdAt.substring(0, 10)}
                        </h6>
                        <div className="flex gap-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default TodoList;
