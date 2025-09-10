import React from "react";
import { Link } from "react-router-dom";
import anime from "../assets/images/todooooo.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-80 rounded-3xl shadow-2xl p-8 md:p-16 max-w-4xl w-full">
        <div className="flex-1 mb-8 md:mb-0 md:mr-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 mb-6 leading-tight">
            <span className="block">Organize work and life</span>
            <span className="block text-4xl md:text-5xl mt-2 font-bold text-blue-500 animate-bounce">
              finally
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            A to-do list app helps manage tasks by allowing users to create,
            update, and delete items. Simple apps like Microsoft To Do or Google
            Tasks offer basic functionality such as adding tasks, marking them
            as complete, and setting reminders.
          </p>
          <div className="flex space-x-4">
            <Link
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
              to={"/register"}
            >
              Register Now!
            </Link>
            <Link
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={anime}
            alt="image"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-purple-200 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
