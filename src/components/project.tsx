import Link from 'next/link';
import Console from '/public/console.svg';

interface ProjectProps {
  href: string;
  title: string;
  description: string;
}

export const Project = ({ href, title, description }: ProjectProps) => (
  <Link
    href={href}
    className='flex group w-full shadow-md bg-gradient-to-br from-black to-shark duration-500 hover:-translate-y-4 relative'
    target='_blank'
  >
    <span className='flex flex-col w-full m-12'>
      <span className='flex w-12 h-12 justify-start mb-10'>
        <Console className='flex h-full text-torch-red' />
      </span>
      <span>
        <h3 className='text-2xl text-alabaster group-hover:text-torch-red'>
          {title}
        </h3>
        <p className='text-iron mt-4'>{description}</p>
      </span>
    </span>
  </Link>
);
