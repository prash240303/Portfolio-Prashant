"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "../../ui/separator";
import ThemeSwitch from "../../shared/ThemeSwitch";
import SocialsCard from "../../Home/BentoCards/SocialsCard";

const Footer = () => {
  const [visits, setVisits] = useState<number | string | null>(null);

  useEffect(() => {
    async function handleVisits() {
      try {
        const hasVisited = localStorage.getItem("hasVisited");

        if (!hasVisited) {
          // ✅ First visit → increment
          const res = await fetch("/api/visits", {
            method: "POST",
          });

          const data = await res.json();
          setVisits(data.count);

          // mark as visited
          localStorage.setItem("hasVisited", "true");
        } else {
          // ✅ Already visited → just fetch count (no increment)
          const res = await fetch("/api/visits", {
            method: "GET",
            cache: "no-store",
          });

          const data = await res.json();
          setVisits(data.count);
        }
      } catch (error) {
        console.error("Error handling visits:", error);
      }
    }

    handleVisits();
  }, []);

  const year = String(new Date().getFullYear());

  return (
    <footer className="bg-white px-4 dark:bg-darkBg mx-auto w-full flex-col max-w-3xl py-5 md:px-16 mb-8">
      <SocialsCard />

      <Separator className="h-[0.5px] bg-neutral-700/60" />
      <div className="flex font-instrumentSerif items-center w-full justify-between py-3 text-lg text-[#4B4B4B]">
        <time className="hidden sm:inline" dateTime={year}>
          {year}
        </time>

        <p>Prashant Prabhakar</p>

        <p>Visitors: {visits ?? "..."}</p>

        <ThemeSwitch />
      </div>
    </footer>
  );
};

export default Footer;
