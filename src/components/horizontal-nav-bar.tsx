import Link from 'next/link';
import { NavItem } from './nav-item';
import Java from '/public/java.svg';

export const HorizontalNavBar = () => {
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
        <button className='hover:text-torch-red'>About</button>
        <button className='hover:text-torch-red'>Portfolio</button>
        <button className='hover:text-torch-red'>Contact</button>
        <Link href='/components' className='hover:text-torch-red'>
          Component
        </Link>
      </div>
    </nav>
  );
};
