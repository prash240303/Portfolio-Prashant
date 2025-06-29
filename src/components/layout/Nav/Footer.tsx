import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../../ui/separator";
import ThemeSwitch from "../../shared/ThemeSwitch";

const Footer = () => {
  const year = String(new Date().getFullYear());
  return (
    <footer className="container mx-auto w-full flex-col max-w-3xl py-5 md:px-16">
      <Separator className="h-[0.5px] bg-neutral-900/60" />
      <div className="flex  items-center w-full justify-between py-3 text-sm font-semibold text-[#4B4B4B]">
        <time className="hidden sm:inline" dateTime={String(year)}>
          {year}{" "}
        </time>{" "}
        <p> © Prashant Prabhakar</p>
        <ThemeSwitch />
      </div>
    </footer>
  );
};

export default Footer;
