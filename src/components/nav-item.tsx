"use client";

import React from "react";
import Link from "next/link";

export const NavItem = ({
  icon,
  iconSize = "h-8 w-8",
  linkClassName,
  href,
  textContent,
}: {
  icon: any;
  iconSize?: string;
  linkClassName?: string;
  href: string;
  textContent?: string;
}) => (
  <div className="group-hover:w-full">
    <Link
      href={href}
      className={`flex items-center justify-between ${linkClassName}`}
    >
      <span className={`relative ${iconSize}`}>{icon}</span>
      <p className="hidden group-hover:inline-flex text-iron text-lg font-bold">
        {textContent}
      </p>
    </Link>
  </div>
);
