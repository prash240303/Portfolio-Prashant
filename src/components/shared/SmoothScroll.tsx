"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      // Create the smooth scroller
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    },
    { scope: main } // Scoped GSAP hooks
  );

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
