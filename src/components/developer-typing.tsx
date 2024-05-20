"use client";

import { Caret } from "@/components/caret";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export const DeveloperTyping = () => {
  const text = "Full-Stack Developer";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
    });
    return controls.stop;
  });

  return (
    <>
      <motion.span>{displayText}</motion.span>
      <Caret />
    </>
  );
};
