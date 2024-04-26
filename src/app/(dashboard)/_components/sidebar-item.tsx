"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
// import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  //   icon: LucideIcon; // Uncomment this line
  icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => { // Add `icon: Icon` parameter here
// export const SidebarItem = ({ label, href }: SidebarItemProps) => {
  // Add `icon: Icon` parameter here
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => { 
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 ${
        isActive &&
        "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      }`}
    >
      <div className={`flex items-center gap-x-2 py-4`}>
        {/* Removed unnecessary quote */}
        <Icon // Render the icon component
          size={22}
          className={`text-slate-500 ${isActive && "text-sky-700"}`}
        />
        {label}
      </div>
      <div
        className={`ml-auto opacity-0 border-2 border-sky-700 h-full transition-all ${
          isActive && "opacity-100 "
        }`}
      />
    </button>
  );
};
