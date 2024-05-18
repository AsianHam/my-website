"use client";

import Link from "next/link";
import { useState } from "react";
import Java from "/public/java.svg";
import Radix from "/public/radix-ui.svg";
import Riot from "/public/riot.svg";
import Mui from "/public/mui.svg";
import { NavItem } from "./nav-item";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex bg-spicy-mix absolute left-0 top-0 h-full w-20 group hover:w-40">
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex w-full flex-col h-full">
          <div className="group-hover:w-full px-4 mt-4">
            <Link href="/" className="flex items-center justify-between">
              <span className="relative h-12 w-12">
                <Java
                  className="h-full w-full text-iron"
                  alt="java home button"
                />
              </span>
              <p className="hidden group-hover:inline-flex text-iron text-xl font-bold">
                Home
              </p>
            </Link>
          </div>
          <div className="flex flex-col w-full h-full mt-10 gap-8 px-6">
            <NavItem
              icon={
                <Radix className="h-full w-full text-iron" alt="radix page" />
              }
              href="/radix"
              textContent="Radix"
            />
            <NavItem
              icon={
                <Riot className="h-full w-full text-iron" alt="riot page" />
              }
              href="/riot"
              textContent="Riot"
            />
            <NavItem
              icon={<Mui className="h-full w-full text-iron" alt="mui page" />}
              href="/riot"
              textContent="Mui"
            />
          </div>
        </div>
        <button className="text-black mr-2" onClick={handleMenuClick}>
          Menu
        </button>
      </div>
    </nav>
  );
};
