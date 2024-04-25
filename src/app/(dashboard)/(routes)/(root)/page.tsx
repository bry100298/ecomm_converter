

// pages/(root)/page.tsx
import React from "react";

import Image from "next/image";
import { HomePage, Header } from "../../../../components"; // Import the Navbar component
export default function Home() {
  return (
    <main className="overflow-hidden">
        <Header />
        <HomePage />
    </main>
  );
}
