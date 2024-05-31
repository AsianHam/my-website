"use client";

import { HorizontalNavBar } from "@/components/horizontal-nav-bar";
import { MobileNavBar } from "@/components/mobile-nav-bar";
import { AnimationSection } from "@/components/sections/animation-section";
import { ColorSection } from "@/components/sections/color-section";
import { LinkSection } from "@/components/sections/link-section";
import { useRef } from "react";

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
        isHomePage={false}
      />
      <div className="">
        <section className="w-full h-screen px-5 768:px-30">
          <div className="flex w-full h-full flex-col justify-center">
            <h1 className="text-torch-red text-7xl font-semibold">
              Design System
            </h1>
            <h2 className="text-iron text-lg py-4 opacity-70">
              These are the components created to build this website
            </h2>
          </div>
        </section>
        <div className="w-full h-full">
          <ColorSection />
          <AnimationSection />
          <LinkSection />
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
