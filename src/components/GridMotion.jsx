"use client";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

const GridMotion = ({ items = [], gradientColor = "white" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]); // Array of refs for each row
  const [mounted, setMounted] = useState(false);
  const mouseXRef = useRef(0);

  // Ensure the grid has 28 items (4 rows x 7 columns) by default
  const totalItems = 28;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`,
  );
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    setMounted(true);
    mouseXRef.current = window.innerWidth / 2;

    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8; // Base duration for inertia
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]; // Different inertia for each row, outer rows slower

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          // Apply inertia and staggered stop
          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden">
      <section
        className="w-full h-[70vh] lg:h-screen overflow-hidden relative flex items-center justify-center"
      >
        {/* Noise overlay */}
      
        <div className="gap-2 flex-none relative w-[1920px] h-[1080px] grid grid-rows-7 grid-cols-1 lg:-translate-y-[100px] translate-y-[160px] -rotate-12 origin-top z-[2] scale-130 lg:scale-220 ">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-2 grid-cols-7"
              style={{ willChange: "transform, filter" }}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="relative aspect-auto">
                    <div className="relative w-full h-full bg-cover bg-center top-0 left-0 bottom-0 overflow-hidden rounded-[10px] shadow-sm bg-[#111] flex items-center justify-center text-white text-[1.5rem]">
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                          style={{ backgroundImage: `url(${content})` }}
                        ></div>
                      ) : (
                        <div className=" text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default GridMotion;
