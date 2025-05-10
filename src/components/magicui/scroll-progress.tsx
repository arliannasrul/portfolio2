"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion"; // perbaikan: "motion/react" harusnya "framer-motion"
import type { MotionProps } from "framer-motion";
import React from "react";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  containerRef?: React.RefObject<HTMLElement>;
}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, containerRef, ...props }, ref) => {
  const { scrollYProgress } = useScroll({
    container: containerRef, // ← gunakan ref scroll container di sini
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-[#6bc9f8] ",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
