// pages/(root)/page.tsx
import React from "react";

import Image from "next/image";
import { HomePage } from "../../../components"; // Import the Navbar component
export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Header /> You dont need to inpout Header here because it was already in the index.ts*/}
      <HomePage />
    </main>
  );
}
