import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green-600 p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* <div className="flex items-center cursor-pointer">asd</div> */}
        <div className="hidden md:block">
          <ul className="flex space-x-4 text-white" style={{ fontWeight: 700 }}>
            Copyright © 2024 Benby Enterprises Inc.. All rights reserved.
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
