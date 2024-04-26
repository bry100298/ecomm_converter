import React from "react";
import Image from "next/image";

const baseUrl = process.env.baseUrl || "";

export const Logo = () => {
  return (
    <Image
      height={130}
      width={130}
      alt="alt"
      src={`${baseUrl}/img/BenbyLogo.png`}
    />
  );
}
