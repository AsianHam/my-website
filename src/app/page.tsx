'use client';

import { HorizontalNavBar } from '@/components/horizontal-nav-bar';
import { AboutMeSection } from '@/components/pages/about-me-section';
import { IntroSection } from '@/components/pages/intro-section';
import { useRef } from 'react';

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  return (
    <>
      <HorizontalNavBar
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <div className='pl-20'>
        <IntroSection />
        <AboutMeSection ref={aboutRef} />
      </div>
    </>
  );
}
