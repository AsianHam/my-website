import { DeveloperTyping } from '../developer-typing';

export const IntroPage = () => (
  <div className='w-full h-screen'>
    <div className='flex flex-col h-full gap-4 justify-center'>
      <h1 className='text-iron text-xl'>Hi, my name is</h1>
      <h2 className='text-7xl text-torch-red'>Abraham Oh.</h2>
      <h3 className='text-5xl text-iron'>
        I&apos;m a <DeveloperTyping />
      </h3>
    </div>
  </div>
);
