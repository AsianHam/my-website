import { DeveloperTyping } from '../developer-typing';

export const IntroSection = () => (
  <section className='w-full h-screen'>
    <div className='flex flex-col h-full gap-4 justify-center'>
      <h1 className='text-alabaster text-2xl'>Hi, my name is</h1>
      <h2 className='text-7xl text-torch-red'>Abraham Oh</h2>
      <h3 className='text-5xl text-alabaster'>
        I&apos;m a <DeveloperTyping />
      </h3>
      <h4 className='text-xl text-iron w-3/4'>
        I am a software engineer based in Charlotte, NC, dedicated to building
        first-class applications and user focused digital experiences.
      </h4>
    </div>
  </section>
);
