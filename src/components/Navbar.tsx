"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; //If used in the app directory, migrate to the new hooks imported from next/navigation.

const baseUrl = process.env.baseUrl || "";

const Navbar = () => {
  // const router = useRouter();
  // const [isSignInPage, setIsSignInPage] = useState(false);

  // useEffect(() => {
  //   setIsSignInPage(window.location.pathname.includes("/sign-in"));
  // }, []);

  // const handleLogin = () => {
  //   router.push("/sign-in");
  // };

  const [isSignInPage, setIsSignInPage] = useState(
    window.location.pathname.includes("/sign-in")
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setIsSignInPage(window.location.pathname.includes("/sign-in"));
    };

    handleRouteChange(); // Initial check

    return () => {
      // No need for cleanup since we're not subscribing to router events
    };
  }, []);

  const handleLogin = () => {
    window.location.href = "ecconvtrv1/sign-in";
  };

  return (
    //   <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-16 py-4">
    //     <Link href="/" className="flex justify-center items-center">
    //       <Image
    //         src={`${baseUrl}/favicon.png`}
    //         alt="Ecconverter"
    //         width={118}
    //         height={18}
    //         className="object-contain"
    //       />
    //     </Link>
    //   </nav>
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
        {/* <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <div className="text-white hover:text-gray-300 cursor-pointer">
                  Home
                </div>
              </Link>
            </li>
          </ul>
        </div> */}
        {/* <div className="hidden md:block">
          <ul className="flex space-x-4">
            <CustomButton
              title="Log in"
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
             Add more menu items as needed 
          </ul>
        </div> */}

        {/* <div className="hidden md:block">
          <ul className="flex space-x-4">
            <button
              className="text-primary-blue rounded-full bg-white min-w-[130px] custom-btn"
              onClick={handleLogin}
            >
              {isSignInPage ? "Log ins" : "Log in"}
            </button>
          </ul>
        </div> */}

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
