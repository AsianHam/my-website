import Link from 'next/link';
import { NavItem } from './nav-item';
import Java from '/public/java.svg';
import { RefObject } from 'react';

export const HorizontalNavBar = ({
  aboutRef,
  portfolioRef,
  contactRef,
}: {
  aboutRef: RefObject<HTMLElement>;
  portfolioRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}) => {
  const handleClick = (ref: RefObject<HTMLElement>, hash: string) => {
    if (history.pushState) {
      history.pushState(null, '', hash);
    } else {
      location.hash = hash;
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className='flex fixed w-full h-20 justify-between bg-shark drop-shadow-md z-50'>
      <span className='flex py-4 pl-8'>
        <NavItem
          icon={<Java className='h-full w-full text-torch-red' />}
          href='/'
          iconSize='h-full'
          linkClassName='h-full'
        />
      </span>
      <div className='flex h-full items-center gap-4 pr-8 text-iron text-lg'>
        <button
          onClick={() => handleClick(aboutRef, '#about-me')}
          className='hover:text-torch-red'
        >
          About
        </button>
        <button
          onClick={() => handleClick(portfolioRef, '#portfolio')}
          className='hover:text-torch-red'
        >
          Portfolio
        </button>
        <button
          onClick={() => handleClick(contactRef, '#contact-me')}
          className='hover:text-torch-red'
        >
          Contact
        </button>
        <Link href='/components' className='hover:text-torch-red'>
          Component
        </Link>
      </div>
    </nav>
  );
};
