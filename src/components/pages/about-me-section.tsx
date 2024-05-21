import { forwardRef } from 'react';

export const AboutMeSection = forwardRef<HTMLElement>((_props, ref) => (
  <section
    id='about-me'
    className='flex flex-col justify-center w-full h-screen'
    ref={ref}
  >
    <h2 className='text-7xl text-iron'>This is the about me section</h2>
  </section>
));

AboutMeSection.displayName = 'AboutMeSection';
