"use client";

import React from "react";
import Link from "next/link";

export const NavItem = ({
  icon,
  href,
  textContent,
}: {
  icon: any;
  href: string;
  textContent: string;
}) => (
  <div className="group-hover:w-full">
    <Link href={href} className="flex items-center justify-between">
      <span className="relative h-8 w-8">{icon}</span>
      <p className="hidden group-hover:inline-flex text-iron text-lg font-bold">
        {textContent}
      </p>
    </Link>
  </div>
);
