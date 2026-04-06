import React from "react";
import { Separator } from "../../ui/separator";
import ThemeSwitch from "../../shared/ThemeSwitch";
import SocialsCard from "../../Home/BentoCards/SocialsCard";
const Footer = () => {
  const year = String(new Date().getFullYear());
  return (
    <footer className="container bg-white dark:bg-darkBg mx-auto w-full flex-col max-w-3xl py-5 md:px-16 mb-16">
      <SocialsCard />

      <Separator className="h-[0.5px] bg-neutral-700/60" />
      <div className="flex   font-instrumentSerif items-center w-full justify-between py-3 text-lg text-[#4B4B4B]">
        <time className="hidden sm:inline" dateTime={String(year)}>
          {year}{" "}
        </time>{" "}
        <p> Prashant Prabhakar</p>
        <ThemeSwitch />
      </div>
    </footer>
  );
};

export default Footer;
