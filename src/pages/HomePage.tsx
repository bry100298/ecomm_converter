"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../components/CustomButton";

// Get the base URL from the environment variable
const baseUrl = process.env.baseUrl || "";

const HomePage = () => {
  const handleScroll = () => {};
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url('${baseUrl}/Style/Benby-Login/LOGIN_BG.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl font-bold text-black mb-4" style={{ fontWeight: 700 }}>
        Welcome to the Home Page
      </h1>
      {/* <a
        href="/ecconvtrv1/login" // Link to the login page
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        style={{ cursor: "pointer" }} // Change cursor to pointer on hover
      >
        Login
      </a>
      <CustomButton
        title="Explore Ecoonverter"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      /> */}
    </div>
  );
};

export default HomePage;
