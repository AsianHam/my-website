import { NavItem } from './nav-item';
import Github from '/public/github.svg';
import Linkedin from '/public/linkedin.svg';
import Codepen from '/public/codepen.svg';

export const SocialMedia = () => (
  <div className='fixed hidden 768:flex left-0 bottom-0 flex flex-col w-20 items-center gap-6 opacity-70'>
    <NavItem
      icon={<Github className='text-iron w-full h-full' />}
      href='https://github.com/AsianHam'
      newTab
      iconSize='h-6 w-6'
      label='github'
    />
    <NavItem
      icon={<Linkedin className='text-iron w-full h-full' />}
      href='https://linkedin.com/in/abrahamoh'
      newTab
      iconSize='h-5 w-5'
      label='linkedin'
    />
    <NavItem
      icon={<Codepen className='text-iron w-full h-full' />}
      href='https://codepen.io/Abraham-Oh'
      newTab
      iconSize='h-6 w-6'
      label='codepen'
    />
    <div className='bg-iron/70 w-0.5 h-20' />
  </div>
);
