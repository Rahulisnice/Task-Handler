import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../services/AuthServices";
import toast from "react-hot-toast";
import { getErrorMessage } from "../utils/ErrorMesage";

const Register = () => {
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  //function
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { username, email, password };
      const res = await AuthServices.registerUser(data);
      toast.success(res.data.message);
      navigate("/login");
      console.log(res.data);
    } catch (err) {
      toast.error(getErrorMessage(err));
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col mt-50 gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
      <p className="text-2xl font-medium m-auto">
        <span className="text-indigo-500">User Register</span>{" "}
      </p>
      <div className="w-full">
        <p>Name</p>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          type="text"
          required
        />
      </div>

      <div className="w-full ">
        <p>Email</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          type="email"
          required
        />
      </div>
      <div className="w-full ">
        <p>Password</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          type="password"
          required
        />
      </div>
      <p>
        Already have account?{" "}
        <Link to="/login" className="text-indigo-500 cursor-pointer">
          click here
        </Link>
      </p>

      <button
        onClick={registerHandler}
        className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
      >
        Register{" "}
      </button>
    </form>
  );
};

export default Register;
