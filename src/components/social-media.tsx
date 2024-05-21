import { NavItem } from './nav-item';
import Github from '/public/github.svg';
import Linkedin from '/public/linkedin.svg';
import Codepen from '/public/codepen.svg';

export const SocialMedia = () => (
  <div className='fixed left-0 bottom-0 flex flex-col w-20 items-center gap-6 opacity-70'>
    <NavItem
      icon={<Github className='text-iron w-full h-full' />}
      href='https://github.com/AsianHam'
      newTab
      iconSize='h-6 w-6'
    />
    <NavItem
      icon={<Linkedin className='text-iron w-full h-full' />}
      href='https://linkedin/in/abrahamoh'
      newTab
      iconSize='h-5 w-5'
    />
    <NavItem
      icon={<Codepen className='text-iron w-full h-full' />}
      href='https://linkedin/in/abrahamoh'
      newTab
      iconSize='h-6 w-6'
    />
    <div className='bg-iron w-0.5 h-20' />
  </div>
);
