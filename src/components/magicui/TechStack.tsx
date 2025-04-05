"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../magicui/animated-beam";
import Icons from "../../assets/data/Icons";
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 hover:scale-150 lg:size-20 transition duration-300 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="  relative flex lg:h-[600px] h-[500px] w-full items-center justify-center overflow-hidden p-16 "
      ref={containerRef}
    >
      <div className="flex size-full lg:h-[500px] h-[400px] max-h-[700px] max-w-3xl flex-col items-stretch justify-between gap-20">
        <div className="flex flex-row items-center justify-between ">
          <Circle ref={div1Ref}>
            <div className="grayscale-100 hover:grayscale-0 active:grayscale-0 flex flex-row ">
            <Icons.html />
            <Icons.css />
            </div>
          </Circle>
          <Circle ref={div10Ref}>
            <div className="grayscale-100 hover:grayscale-0 active:grayscale-0">
            <Icons.valorant />
            </div>
          </Circle>
          <Circle ref={div11Ref}>
            <div className="grayscale-100 hover:grayscale-0 active:grayscale-0">
            <Icons.python />
            </div>
          </Circle>
          <Circle ref={div5Ref}>
            <div className="grayscale-100 hover:grayscale-0 active:grayscale-0">
            <Icons.javascript />
            </div>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.tailwind />
          </Circle>
          <Circle ref={div4Ref} className="scale-150 rounded-xl">
            <h2 className="text-[7px] lg:text-[11px] font-semibold text-center">
              Website Development
            </h2>
          </Circle>
          <Circle ref={div6Ref}>
            <div className="grayscale-100 hover:grayscale-0 active:grayscale-0">
            <Icons.react />
            </div>
          </Circle>
        </div>
        <div className="flex flex-row  items-center justify-between">
          <Circle ref={div3Ref}>
            <div className="grayscale-100 hover:grayscale-0 active:grayscale-0">
            <Icons.astro />
            </div>
          </Circle>
          <Circle ref={div7Ref}>
            <div className="grayscale-100 hover:grayscale-0 active:grayscale-0">
            <Icons.vite />
            </div>
          </Circle>
          <Circle ref={div8Ref}>
            <div className="grayscale-100 hover:grayscale-0 active:grayscale-0">
            <Icons.git />
            </div>
          </Circle>
          <Circle ref={div9Ref}>
            <div className="  hover:text-[#000000] ">
            <Icons.github />
            </div>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
             <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
                   <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={10}
       
      />
                         <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={10}
        reverse
      />
      
    </div>
  );
}
