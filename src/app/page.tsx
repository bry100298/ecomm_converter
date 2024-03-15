import React from "react";
import Image from "next/image";

export default function Home() {
  // Get the base URL from the environment variable
  const baseUrl = process.env.baseUrl || '';

  return (
    <div>
      <p className="bg-emerald-500 text-green-900 font-bold">hello asd hbsd asd</p>
      <p className="text-purple-900 font-bold">hello asd hbsd asd</p>
      <Image
        src={`${baseUrl}/vercel.svg`} // Construct the absolute URL using baseUrl
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
