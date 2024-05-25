import { DeveloperTyping } from '../developer-typing';
import Image from 'next/image';

export const IntroSection = () => (
  <section className='w-full h-auto 768:h-screen'>
    <div className='flex w-full h-full flex-col justify-center items-center 768:inline-flex 768:flex-row 768:py-0 1440:px-40 mb-28'>
      <div className='flex flex-col mt-28 768:mt-0 h-fit 768:h-full gap-4 justify-center w-full 768:w-2/3'>
        <h1 className='text-alabaster text-2xl'>Hi, my name is</h1>
        <h2 className='text-7xl 1440:text-8xl text-torch-red font-semibold'>
          Abraham Oh
        </h2>
        <h3 className='text-5xl 1440:text-6xl text-alabaster font-semibold leading-none h-44 768:h-auto'>
          I&apos;m a <br className='768:hidden' />
          <DeveloperTyping />
        </h3>
        <h4 className='text-xl text-iron w-full 768:w-3/4 768:mt-4'>
          I am a software engineer based in Charlotte, NC, dedicated to building
          first-class applications and user focused digital experiences.
        </h4>
      </div>
      <div className='flex mt-16 768:mt-0 768:ml-8 w-1/2 768:w-1/3 h-fit 768:h-full justify-center items-center'>
        <div className='flex aspect-square w-full max-w-72 bg-gradient-to-br from-black to-torch-red justify-center items-center'>
          <span className='flex w-[95%] aspect-square relative'>
            <Image src='/abraham.jpg' alt='abraham' fill />
          </span>
        </div>
      </div>
    </div>
  </section>
);
