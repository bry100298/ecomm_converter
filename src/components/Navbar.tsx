"use client"; // Marking this file as a client component

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; // Import from next/navigation instead of next/router

const baseUrl = process.env.baseUrl || "";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  // const [isSignInPage, setIsSignInPage] = useState(path.includes("/sign-in"));
  const [isSignInPage, setIsSignInPage] = useState(false);

  // useEffect(() => {
  //   setIsSignInPage(path.includes("/sign-in"));
  // }, [path]);

  useEffect(() => {
    if (path) {
      setIsSignInPage(path.includes("/sign-in"));
    }
  }, [path]);

  const handleLogin = () => {
    router.push("/sign-in");
  };

  return (
    <nav className="bg-green-600 p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          {/* Wrap the entire div with Link */}
          <Link href="/" passHref>
            <div>
              <Image
                src={`${baseUrl}/img/BenbyLogo.png`}
                alt="Ecconverter"
                width={70}
                height={20}
                className="object-contain"
                style={{
                  filter: "brightness(0) invert(1)",
                  width: "auto",
                  height: "auto",
                }} // Apply CSS filter to invert color to white & width and height styles
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {!isSignInPage && (
              <button
                className="text-primary-blue rounded-full bg-white min-w-[130px] custom-btn"
                onClick={handleLogin}
              >
                Log in
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
