import type { Metadata } from "next";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { Providers } from "./Providers";
import { cath, lombok, neu, instrumentSerif } from "@/lib/font";
import { Analytics } from "@/components/shared/Analytics";
import ScrollToTopButton from "@/components/shared/ScrollToTop";
import Footer from "@/components/layout/Nav/Footer";
import Header from "@/components/layout/Nav/Header";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Neko from "@/components/Neko";

const info = {
  name: "Prashant",
  twitter: "@prash2403",
  description:
    "Full-Stack Developer, Next.js Buff, Freelancer, Always Evolving. Crafting web apps to ignite ideas.",
  url: "https://portfolio-prash.vercel.app/",
  image: "/seo.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: { default: info.name, template: `%s - ${info.name}` },
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  openGraph: {
    type: "website",
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image,
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description,
    creator: info.twitter,
    images: info.image,
  },
};

interface ChildrenProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${neu.variable} ${cath.variable} ${lombok.variable} ${instrumentSerif.variable} "bg-white dark:bg-darkBg flex flex-col items-center min-h-screen overflow-x-hidden font-sans antialiased`}
      >
        <Providers>
          <Neko />

          <div>
            {/* Light mode background */}
            <div
              className="fixed border-x border-neutral-300 dark:border-neutral-800 max-w-4xl mx-auto inset-0 opacity-30 dark:hidden pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 7px,
      rgba(0, 0, 0, 0.2) 7px,
      rgba(0, 0, 0, 0.2) 8px
    )`,
              }}
            />
            {/* Dark mode background */}
            <div
              className="fixed border-x border-neutral-500 max-w-4xl mx-auto inset-0 opacity-30 hidden dark:block pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 7px,
      rgba(255, 255, 255, 0.2) 7px,
      rgba(255, 255, 255, 0.2) 8px
    )`,
              }}
            />
            <SmoothScroll>
              {/* Center content — solid bg masks the lines in the middle */}
              <div className="flex gap-0 p-0 bg-white dark:bg-darkBg container overflow-hidden mx-auto flex-col max-w-3xl border-x-[1px] border-neutral-200 dark:border-neutral-800 min-h-screen">
                <div className="flex flex-col">{children}</div>
                <Footer />
              </div>
            </SmoothScroll>
            <ScrollToTopButton />
            <Toaster />

            {/* gradual blur */}
            <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none">
              {[
                {
                  z: 1,
                  blur: "0.0703125px",
                  mask: "linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 25%, rgba(0,0,0,0) 37.5%)",
                },
                {
                  z: 2,
                  blur: "0.140625px",
                  mask: "linear-gradient(rgba(0,0,0,0) 12.5%, rgb(0,0,0) 25%, rgb(0,0,0) 37.5%, rgba(0,0,0,0) 50%)",
                },
                {
                  z: 3,
                  blur: "0.28125px",
                  mask: "linear-gradient(rgba(0,0,0,0) 25%, rgb(0,0,0) 37.5%, rgb(0,0,0) 50%, rgba(0,0,0,0) 62.5%)",
                },
                {
                  z: 4,
                  blur: "0.5625px",
                  mask: "linear-gradient(rgba(0,0,0,0) 37.5%, rgb(0,0,0) 50%, rgb(0,0,0) 62.5%, rgba(0,0,0,0) 75%)",
                },
                {
                  z: 5,
                  blur: "1.125px",
                  mask: "linear-gradient(rgba(0,0,0,0) 50%, rgb(0,0,0) 62.5%, rgb(0,0,0) 75%, rgba(0,0,0,0) 87.5%)",
                },
                {
                  z: 6,
                  blur: "2.25px",
                  mask: "linear-gradient(rgba(0,0,0,0) 62.5%, rgb(0,0,0) 75%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
                },
                {
                  z: 7,
                  blur: "4.5px",
                  mask: "linear-gradient(rgba(0,0,0,0) 75%, rgb(0,0,0) 87.5%, rgb(0,0,0) 100%)",
                },
                {
                  z: 8,
                  blur: "9px",
                  mask: "linear-gradient(rgba(0,0,0,0) 87.5%, rgb(0,0,0) 100%)",
                },
              ].map(({ z, blur, mask }) => (
                <div
                  key={z}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: z,
                    maskImage: mask,
                    WebkitMaskImage: mask,
                    backdropFilter: `blur(${blur})`,
                    WebkitBackdropFilter: `blur(${blur})`,
                    pointerEvents: "none",
                  }}
                />
              ))}
            </div>
          </div>
        </Providers>
      </body>
      <Analytics />
    </html>
  );
}
