'use client';

import { Email } from '@/components/email';
import { HorizontalNavBar } from '@/components/horizontal-nav-bar';
import { MobileNavBar } from '@/components/mobile-nav-bar';
import { ContactMeSection } from '@/components/sections/contact-me-section';
import { ExperienceSection } from '@/components/sections/experience';
import { IntroSection } from '@/components/sections/intro-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { SocialMedia } from '@/components/social-media';
import { useRef } from 'react';

export default function Home() {
  const experienceRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  return (
    <>
      <HorizontalNavBar
        experienceRef={experienceRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <MobileNavBar
        experienceRef={experienceRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <SocialMedia />
      <Email />
      <div className='px-8 768:px-28'>
        <IntroSection />
        <ExperienceSection ref={experienceRef} />
        <PortfolioSection ref={portfolioRef} />
        <ContactMeSection ref={contactRef} />
      </div>
    </>
  );
}
