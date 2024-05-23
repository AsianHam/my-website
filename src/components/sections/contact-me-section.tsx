import { forwardRef } from 'react';

export const ContactMeSection = forwardRef<HTMLElement>((_props, ref) => (
  <section id='contact-me' className='flex flex-col w-full h-full' ref={ref}>
    <h2 className='text-4xl text-torch-red self-center'>Contact Me</h2>
    <h3 className='text-2xl mt-8 text-alabaster self-center'>
      Have a project in mind, or just want to say hi?
    </h3>
    <div className='self-center text-alabaster border-rounded rounded-lg border border-torch-red bg-gradient-to-br from-black to-shark text-xl mt-8 py-4 px-8'>
      abeoh1@gmail.com
    </div>
  </section>
));

ContactMeSection.displayName = 'ContactMeSection';
