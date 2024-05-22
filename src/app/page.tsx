'use client';

import { Email } from '@/components/email';
import { HorizontalNavBar } from '@/components/horizontal-nav-bar';
import { AboutMeSection } from '@/components/sections/about-me-section';
import { IntroSection } from '@/components/sections/intro-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { SocialMedia } from '@/components/social-media';
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
      <SocialMedia />
      <Email />
      <div className='px-28'>
        <IntroSection />
        <AboutMeSection ref={aboutRef} />
        <PortfolioSection ref={portfolioRef} />
      </div>
    </>
  );
}
