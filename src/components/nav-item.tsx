'use client';

import React from 'react';
import Link from 'next/link';

export const NavItem = ({
  icon,
  iconSize = 'h-8 w-8',
  linkClassName,
  href,
  textContent,
  newTab = false,
  label,
}: {
  icon: any;
  iconSize?: string;
  linkClassName?: string;
  href: string;
  textContent?: string;
  newTab?: boolean;
  label: string;
}) => (
  <div className='group-hover:w-full'>
    <Link
      href={href}
      className={`flex items-center justify-between ${linkClassName}`}
      target={newTab ? '_blank' : ''}
      aria-label={label}
    >
      <span className={`relative ${iconSize}`}>{icon}</span>
      <p className='hidden group-hover:inline-flex text-iron text-lg font-bold'>
        {textContent}
      </p>
    </Link>
  </div>
);
