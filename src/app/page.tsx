import React from "react";
import Image from "next/image";

export default function Home() {
  // Get the base URL from the environment variable
  const baseUrl = process.env.baseUrl || "";

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url('${baseUrl}/Style/Benby-Login/LOGIN_BG.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-black mb-4">
        Welcome to the Home Page
      </h1>
      <a
        href="/ecconvtrv1/login" // Link to the login page
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        style={{ cursor: "pointer" }} // Change cursor to pointer on hover
      >
        Login
      </a>
    </div>
  );
}
