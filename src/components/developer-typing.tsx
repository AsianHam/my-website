'use client';

import { Caret } from '@/components/caret';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const DeveloperTyping = () => {
  const text = [
    'Full-Stack Developer',
    'Software Engineer',
    'Front-End Architect',
    'UX Enthusiast',
    'Professional Programmer',
  ];
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const selectedText = useTransform(textIndex, (latest) => text[latest] || '');
  const displayText = useTransform(rounded, (latest) =>
    selectedText.get().slice(0, latest)
  );
  const updated = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      duration: 1.5,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updated.get() === true && latest > 0) {
          updated.set(false);
        } else if (updated.get() === false && latest === 0) {
          if (textIndex.get() === text.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updated.set(true);
        }
      },
    });
  });

  return (
    <span className='pt-2 768:pt-0'>
      <motion.span>{displayText}</motion.span>
      <Caret />
    </span>
  );
};
