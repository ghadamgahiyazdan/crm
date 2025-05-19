"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

  const navItems = [
    { name: "خانه", link: "/" },
    { name: "سرویس ها", link: "/services" },
    { name: "ارتباط با ما", link: "/contact" },
    { name: "درباره ما", link: "/about" },
  ];

  const currentNav = navItems.find((nav) => nav.link === currentPath);

  return (
    <nav className="bg-gray-950 sticky top-0 w-full z-50">
      <div className="hidden xl:block relative">
        <div className="h-15 text-yellow-50 grid grid-cols-3 container mx-auto">
          <div className="flex items-center">
            <Link href="/login" passHref>
              <Button variant="active">ورود</Button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            {currentPath === "/" ? (
              <h1 className="text-3xl font-bold border-b-1 py-1">
                همراه کارفرما
              </h1>
            ) : (
              <h1 className="text-3xl font-bold border-b-1 py-1">
                <Link href="/" passHref>
                  <span>همراه کارفرما</span>
                </Link>
                {currentNav && (
                  <Link href={currentNav.link} passHref>
                    <span className="text-secondary">-{currentNav.name}</span>
                  </Link>
                )}
              </h1>
            )}
          </div>

          <div className="flex flex-row-reverse justify-start items-center gap-2">
            {navItems.map(({ name, link }, index) => (
              <Link href={link} key={index} passHref>
                <Button variant="default">{name}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="xl:hidden text-white">mobile</div>
    </nav>
  );
};

export default NavBar;
