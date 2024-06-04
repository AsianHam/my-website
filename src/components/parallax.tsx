import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react';

type ParallaxProps = {
  children: React.ReactNode;
  className: string;
};

export const Parallax = ({ children, className }: ParallaxProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.09], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.09], [1, 0]);

  return (
    <motion.div className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
};
