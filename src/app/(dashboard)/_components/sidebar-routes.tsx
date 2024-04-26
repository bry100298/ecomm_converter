"use client";

import React from "react";
import { SidebarItem } from "./sidebar-item";
// import { Compass, Layout } from "lucide-react";
import { FaCompass, FaInfo, FaHome, FaChartLine } from 'react-icons/fa'; // For Font Awesome icons


const guestRoutes = [
  {
    icon: FaChartLine ,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: FaCompass,
    label: "Browse",
    href: "/search",
  },
];

export const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
