"use client";

import Link from "next/link";
import { useState } from "react";
import Home from "/public/home.svg";
import User from "/public/user.svg";
import Document from "/public/document.svg";
import Console from "/public/console.svg";
import Mui from "/public/mui.svg";
import { NavItem } from "./nav-item";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex bg-spicy-mix absolute left-0 top-0 h-full w-20 group hover:w-52">
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex w-full flex-col h-full">
          <div className="group-hover:w-full pl-4 pr-4 group-hover:pr-6 mt-6">
            <Link href="/" className="flex items-center justify-between">
              <span className="relative h-12 w-12">
                <Home className="h-full w-full text-iron" alt="home button" />
              </span>
              <p className="hidden group-hover:inline-flex text-iron text-xl font-bold">
                Home
              </p>
            </Link>
          </div>
          <div className="flex flex-col w-full h-full mt-10 gap-8 px-6">
            <NavItem
              icon={
                <User className="h-full w-full text-iron" alt="radix page" />
              }
              href="/about-me"
              textContent="About Me"
            />
            <NavItem
              icon={
                <Console className="h-full w-full text-iron" alt="riot page" />
              }
              href="/projects"
              textContent="Projects"
            />
            <NavItem
              icon={
                <Document className="h-full w-full text-iron" alt="mui page" />
              }
              href="/resume"
              textContent="Resume"
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
