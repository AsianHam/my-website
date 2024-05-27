'use client';

import { ColorDisplay } from '@/components/color-display';
import { HorizontalNavBar } from '@/components/horizontal-nav-bar';
import { MobileNavBar } from '@/components/mobile-nav-bar';
import { useRef } from 'react';

const ComponentsPage = () => {
  const experienceRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  return (
    <>
      <HorizontalNavBar
        experienceRef={experienceRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        isHomePage={false}
      />
      <MobileNavBar
        experienceRef={experienceRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        // isHomePage={false}
      />
      <div className=''>
        <section className='w-full h-screen px-30'>
          <div className='flex w-full h-full flex-col justify-center'>
            <h1 className='text-torch-red text-7xl font-semibold'>
              Design System
            </h1>
            <h2 className='text-iron text-lg py-4 opacity-70'>
              These are the components created to build this website
            </h2>
          </div>
        </section>
        <section className='w-full h-full'>
          <div className='w-full'>
            <span className='flex bg-neutral-800 py-16 border-t border-b border-iron border-opacity-60'>
              <h2 className='text-iron text-5xl px-30 font-semibold'>Colors</h2>
            </span>
            <div className='flex w-full px-30 py-16 flex-row justify-evenly'>
              <ColorDisplay
                colorClassName='bg-torch-red'
                colorName='Torch Red'
                colorHex='#FF014F'
              />
              <ColorDisplay
                colorClassName='bg-iron'
                colorName='Iron'
                colorHex='#DCDEDD'
              />
              <ColorDisplay
                colorClassName='bg-alabaster'
                colorName='Alabaster'
                colorHex='#F9F9F9'
              />
              <ColorDisplay
                colorClassName='bg-shark'
                colorName='Shark'
                colorHex='#212428'
              />
              <ColorDisplay
                colorClassName='bg-neutral-800'
                colorName='Neutral'
                colorHex='#262626'
                circleText='800'
              />
            </div>
          </div>
          <div className='w-full'>
            <span className='flex bg-neutral-800 py-16 border-t border-b border-iron border-opacity-60'>
              <h2 className='text-iron text-5xl px-30 font-semibold'>
                Animations
              </h2>
            </span>
          </div>
          <div className='w-full'>
            <span className='flex bg-neutral-800 py-16 border-t border-b border-iron border-opacity-60'>
              <h2 className='text-iron text-5xl px-30 font-semibold'>Link</h2>
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComponentsPage;
