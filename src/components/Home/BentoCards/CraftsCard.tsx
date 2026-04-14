"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Crafts = [
  {
    title: "Arrow Animation Button",
    path: "https://crafts-three.vercel.app/crafts/arrow-button",
    vid: "/craft-preview/arrowbutton.mp4",
    description: "A button with animated arrow icon.",
    type: "arrow-button",
    createdAt: "10-03-2026",
    height: "h-80",
  },

  {
    title: "Hero Section Image Animation",
    path: "https://crafts-three.vercel.app/crafts/hero",
    vid: "/craft-preview/hero.mp4",
    description: "Interactive hero-section image animation.",
    type: "hero",
    height: "h-80",
    createdAt: "15-03-2026",
  },
  {
    title: "Glass Shader",
    path: "https://crafts-three.vercel.app/magnifier",
    vid: "/craft-preview/glass-shader.mp4",
    description: "Glass Shader Based Magnifier.",
    type: "hero",
    height: "h-80",
    createdAt: "15-03-2026",
  },
];

type Craft = (typeof Crafts)[number];

// Lazy-loads and plays video only when it enters the viewport
const LazyVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.readyState === 0) video.load();
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      preload="none"
      loop
      muted
      playsInline
      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all ease-in duration-300"
    />
  );
};
const CraftCard = ({ craft }: { craft: Craft }) => (
  <Link
    href={craft.path}
    target="_blank"
    // Changed: Added 'h-full' to ensure cards in a grid match height
    className={`group bg-gray-50 dark:bg-zinc-800 rounded-xl border border-zinc-300 dark:border-zinc-600 p-1 hover:border-zinc-400 hover:scale-[101%] hover:shadow-2xl transition-all ease-in duration-300 cursor-pointer flex flex-col h-full ${craft.height}`}
  >
    {/* Media Container: Added aspect-video and overflow-hidden */}
    <div className="relative aspect-video overflow-hidden border rounded-lg border-neutral-300 dark:border-neutral-700 bg-zinc-100 dark:bg-zinc-900">
      {craft.vid && <LazyVideo src={craft.vid} />}
    </div>

    {/* Info overlay: Added flex-grow to push content to the same starting point */}
    <div className="flex-grow space-y-1 px-3 py-4">
      <div className="text-neutral-800 dark:text-neutral-100 text-lg font-medium leading-snug">
        {craft.title}
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
        {craft.description}
      </div>
    </div>
  </Link>
);

// 3-column masonry grid
const CraftsGrid = () => {
  const router = useRouter();

  const columns: Craft[][] = [[], [], []];
  Crafts.forEach((craft, i) => columns[i % 3].push(craft));

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-2">
          {col.map((craft) => (
            <CraftCard key={craft.path} craft={craft} />
          ))}
        </div>
      ))}
    </div>
  );
};

function CraftsSection() {
  return (
    <div className="w-full mt-4 md:mt-8">
      <div className="mb-3 flex items-center gap-2">
        <h1 className="text-3xl font-instrumentSerif font-medium tracking-tight">
          Crafts
        </h1>
      </div>
      <div className="row-span-1 bg-transparent col-span-5">
        <CraftsGrid />
      </div>

      <Link
        target="_blank"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.3), 0 4px 6px rgba(0,0,0,0.1)",
        }}
        href="https://crafts-three.vercel.app/crafts"
        className="text-md mt-4 font-instrumentSerif flex rounded-full items-center justify-center gap-2 w-fit mx-0.5 md:mx-1 border border-neutral-300/80 bg-gradient-to-b from-neutral-100 to-neutral-200 pl-3 pr-2 py-2 text-neutral-500 transition-colors hover:from-neutral-50 hover:to-neutral-100 dark:border-none dark:bg-[#2f2f2f] dark:bg-none dark:text-[#d4d4d4] dark:shadow-[0_6px_16px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] dark:hover:bg-[#333]"
      >
        <span>View All Crafts</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

export default CraftsSection;
