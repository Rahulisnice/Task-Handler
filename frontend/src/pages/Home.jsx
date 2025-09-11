import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PopModel from "../components/PopModel";
import { useState } from "react";
import TodoServices from "../services/todoServices";
import Card from "../components/Card";

const Home = () => {
  const [showModel, setShowModel] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  //modal handler
  const openModelHandler = () => {
    setShowModel(true);
  };

  //search
  const handleSearch = (e) => {
    const query = e.target.value;
    let filterList = allTask?.filter((item) =>
      item?.title.toLowerCase().match(query.toLowerCase())
    );
    setSearchQuery(query);
    if (query && filterList.length > 0) {
      setAllTask(filterList && filterList);
    } else {
      getUserTask();
    }
  };

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
  useEffect(() => {
    getUserTask();
  }, []);

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
        <div className="container mx-auto px-4 py-10 ">
          <div className="bg-gradient-to-r from-indigo-500 mb-6 via-purple-500 to-pink-500 rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
              Your Task
            </h1>
            <div className="flex w-full max-w-md gap-4 mb-6">
              <input
                type="search"
                placeholder="Search your task"
                value={searchQuery}
                onChange={handleSearch}
                className="flex-1 px-4 py-2 rounded-lg border-none shadow focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
              />
              <button
                onClick={openModelHandler}
                className="bg-white text-pink-600 font-bold px-6 py-2 rounded-lg shadow hover:bg-pink-600 hover:text-white transition duration-200"
              >
                Create Task
              </button>
            </div>
          </div>
          {allTask && <Card allTask={allTask} getUserTask={getUserTask} />}
          {/* ==========modal============== */}
          <PopModel
            showModel={showModel}
            setShowModel={setShowModel}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            getUserTask={getUserTask}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
