import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex items-center justify-center p-6">
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg)",
          }}
          className="max-w-5xl bg-no-repeat relative bg-cover bg-center  rounded-xl shadow-lg p-10 space-y-8"
        >
          <h1 className="text-4xl text-gray-300 font-extrabold tracking-tight text-center">
            About Our Service
          </h1>

          <p className="text-lg text-teal-400 leading-relaxed text-center max-w-3xl mx-auto">
            Welcome to Todo Handler — your trusted platform connecting you with
            verified, top-rated app. Our mission is to make best task handler
            app as easy and reliable as possible.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white bg-opacity-30 rounded-lg shadow-lg hover:bg-opacity-50 transition cursor-pointer">
              <h2 className="text-2xl text-orange-400 font-semibold mb-4 text-center">
                Our Vision
              </h2>
              <p className="text-purple-400 text-center">
                To empower communities with the best services delivered with
                trust, transparency, and ease.
              </p>
            </div>
            <div className="p-6 bg-white bg-opacity-30 rounded-lg shadow-lg hover:bg-opacity-50 transition cursor-pointer">
              <h2 className="text-2xl text-orange-400 font-semibold mb-4 text-center">
                Our Values
              </h2>
              <ul className="list-disc text-purple-400 list-inside space-y-2">
                <li>Trust & Safety</li>
                <li>Quality Over Quantity</li>
                <li>User-Centric Design</li>
                <li>Community Empowerment</li>
              </ul>
            </div>
            <div className="p-6 bg-white bg-opacity-30 rounded-lg shadow-lg hover:bg-opacity-50 transition cursor-pointer">
              <h2 className="text-2xl text-orange-400 font-semibold mb-4 text-center">
                Our Team
              </h2>
              <p className="text-purple-400 text-center">
                A passionate group of tech and service experts dedicated to
                creating seamless experiences for users alike.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-3 rounded-full bg-white text-pink-700 font-bold hover:bg-purple-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
