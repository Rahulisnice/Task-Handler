import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  //logout function
  const logoutHandler = () => {
    localStorage.removeItem("todoapp");
    toast.success("logout successfully");
    navigate("/login");
  };

  //get username
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("todoapp"));
    setUsername(userData && userData.user.username);
  }, []);

  return (
    <nav className="h-[70px] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 shadow-lg backdrop-blur-md transition-all">
      <p className="me-auto text-white text-xl font-bold tracking-wide drop-shadow-lg animate-pulse">
        Welcome {username}
      </p>
      <ul className="text-white md:flex ms-auto hidden items-center gap-10">
        <li>
          <Link
            className="hover:text-violet-300 transition-colors duration-200 font-medium"
            to="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-violet-300 transition-colors duration-200 font-medium"
            to="/todoList"
          >
            My TodoList
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-violet-300 transition-colors duration-200 font-medium"
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
      <button
        onClick={logoutHandler}
        className="ml-6 px-4 cursor-pointer py-2 flex items-center"
      >
        <img
          src="https://img.icons8.com/?size=100&id=91102&format=png&color=000000"
          alt=""
          className="h-10 w-10 object-contain"
        />
      </button>
    </nav>
  );
};

export default Navbar;
