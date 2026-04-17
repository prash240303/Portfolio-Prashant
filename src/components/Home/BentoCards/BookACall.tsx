"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const ROWS = 5;
const COLS_COLLAPSED = 5;
const COLS_EXPANDED = 13;

const ARROW_WIDTH = 5; // width of the arrow shape (cols 0–4)
const DOT_SIZE = 10;
const DOT_GAP = 4;
const GRID_PAD_X = 5;

const calcGridW = (cols: number) =>
  cols * DOT_SIZE + (cols - 1) * DOT_GAP + GRID_PAD_X;

const collapsedGridW = calcGridW(COLS_COLLAPSED);
const expandedGridW = 180;

// → shape: stick on row 2 (cols 0–4), arrowhead tip at rightmost col
// outer points of chevron are LEFT (col 2), tip is RIGHT (col 4)
const ARROW_SHAPE: [number, number][] = [
  [0, 2], // top-back of arrowhead
  [1, 3], // upper convergence
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4], // stick + tip (tip at col 4)
  [3, 3], // lower convergence
  [4, 2], // bottom-back of arrowhead
];

interface ArrowButtonProps {
  label?: string;
  href?: string;
  arrowCount?: number;
}

export default function BookACall({
  label = "Book a free call",
  href = "https://calendly.com/prash2402works/30min",
  arrowCount = 1, // 1 arrow so only one is visible at a time
}: ArrowButtonProps) {
  const [offsets, setOffsets] = useState<number[]>(() =>
    // start each arrow staggered, fully off the left edge
    Array.from({ length: arrowCount }, (_, i) => -(ARROW_WIDTH + 2) + i * 20),
  );
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cols = expanded ? COLS_EXPANDED : COLS_COLLAPSED;

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => {
        setOffsets((prev) =>
          prev.map((off) => {
            const next = off + 1;
            // wrap once the arrow has fully exited the right edge
            return next > cols + ARROW_WIDTH ? -(ARROW_WIDTH + 2) : next;
          }),
        );
      },
      hovered ? 100 : 150,
    );
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovered, cols]);

  const handleMouseEnter = () => {
    setHovered(true);
    setExpanded(true);
    // reset so arrow starts fresh from the left
    setOffsets(Array.from({ length: arrowCount }, () => -(ARROW_WIDTH + 2)));
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setExpanded(false);
  };

  const getCellClass = (r: number, c: number): string => {
    for (const off of offsets) {
      for (const [ar, ac] of ARROW_SHAPE) {
        if (ar === r && ac + off === c) return "active";
        if (ar === r && ac + off - 1 === c) return "trail";
        if (ar === r && ac + off - 2 === c) return "trail2";
      }
    }
    return "";
  };

  const dotClass = (cls: string) => {
    const base =
      "size-2 rounded-[1.5px] flex-shrink-0 transition-all duration-75 ease-in-out";
    if (cls === "active") return `${base} bg-black scale-[1.2]`;
    if (cls === "trail") return `${base} bg-black/30 scale-[1.05]`;
    if (cls === "trail2") return `${base} bg-black/[0.17]`;
    return `${base} bg-black/[0.13]`;
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-8 items-center justify-center">
      <div className="font-instrumentSerif italic text-xl">
        If you&apos;ve read this far, you might be interested in what I do.
      </div>
      <Link
        href={href}
        target="_blank"
        className="relative mt-2 mx-auto inline-flex items-center bg-black w-fit h-20 rounded-2xl p-2 cursor-pointer overflow-hidden border border-white/[0.06] no-underline shadow-md transition-[transform,box-shadow] duration-[180ms] ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute m-1 inset-0 bg-[#D6FF18] flex flex-col justify-center gap-1 rounded-xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_0_20px_rgba(255,255,255,0.2)] transition-[width] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ width: expanded ? expandedGridW : collapsedGridW }}
        >
          {Array.from({ length: ROWS }, (_, r) => (
            <div
              key={r}
              className="flex px-1 items-center justify-center gap-[5px]"
            >
              {Array.from({ length: COLS_EXPANDED }, (_, c) => (
                <div
                  key={c}
                  className={dotClass(getCellClass(r, c))}
                  style={{ display: c < cols ? undefined : "none" }}
                />
              ))}
            </div>
          ))}
        </div>

        <span
          className={`relative pl-[76px] pr-2 font-instrumentSerif font-bold text-base tracking-wide text-white whitespace-nowrap transition-opacity duration-[250ms] ease-in-out ${hovered ? "opacity-0" : "opacity-100"}`}
        >
          {label}
        </span>
      </Link>
    </div>
  );
}
