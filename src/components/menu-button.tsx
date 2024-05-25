import React from 'react';
import { motion, SVGMotionProps, Variants } from 'framer-motion';

interface Props extends SVGMotionProps<SVGElement> {
  isOpen: boolean;
  color?: string;
  lineClassName?: string;
  strokeWidth?: string | number;
}

const svgViewBoxSize = 3;

const torchRed = '#ff014f';

export const topLine: Variants = {
  closed: {
    rotate: 0,
    translateY: 0,
    translateX: 0,
    stroke: torchRed,
    strokeWidth: 3,
  },
  opened: {
    rotate: 45,
    translateY: 1,
    translateX: 0,
    stroke: torchRed,
    strokeWidth: 3,
  },
};
export const middleLine: Variants = {
  closed: {
    opacity: 1,
    stroke: torchRed,
    strokeWidth: 3,
  },
  opened: {
    opacity: 0,
  },
};
export const bottomLine: Variants = {
  closed: {
    rotate: 0,
    translateY: 0,
    translateX: 0,
    stroke: torchRed,
    strokeWidth: 3,
  },
  opened: {
    rotate: -45,
    translateY: -1,
    translateX: 0,
    stroke: torchRed,
    strokeWidth: 3,
  },
};

function getVariant(isOpen: boolean) {
  if (isOpen) {
    return 'opened';
  }
  return 'closed';
}

const MenuButton = ({ isOpen, strokeWidth, color, ...props }: Props) => {
  const lineProps = {
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: getVariant(isOpen),
  };

  return (
    <motion.svg
      viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}
      overflow='visible'
      preserveAspectRatio='none'
      width={30}
      height={30}
      {...props}
    >
      <motion.line
        x1='0'
        x2={svgViewBoxSize}
        y1='0.8'
        y2='0.8'
        variants={topLine}
        {...lineProps}
      />
      <motion.line
        x1='0'
        x2={svgViewBoxSize}
        y1='1.8'
        y2='1.8'
        variants={middleLine}
        {...lineProps}
      />
      <motion.line
        x1='0'
        x2={svgViewBoxSize}
        y1='2.8'
        y2='2.8'
        variants={bottomLine}
        {...lineProps}
      />
    </motion.svg>
  );
};

export default MenuButton;
