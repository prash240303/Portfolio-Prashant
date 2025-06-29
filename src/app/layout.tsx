import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { Providers } from "./Providers";
import { cath, lombok, neu } from "@/lib/font";
import { Analytics } from "@/components/shared/Analytics";
import ScrollToTopButton from "@/components/shared/ScrollToTop";
import Footer from "@/components/layout/Nav/Footer";
import Header from "@/components/layout/Nav/Header";
const inter = Inter({ subsets: ["latin"] });

const info = {
  name: "Prashant",
  twitter: "@prash2403",
  description:
    "Full-Stack Developer, Next.js Buff, Freelancer, Always Evolving. Crafting web apps to ignite ideas.",
  url: "https://rohitsinghrawat.tech",
  image: "/images/RohitSinghRawat.png",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${neu.variable} ${inter.className} ${cath.variable} ${lombok.variable}`}
      >
        <Providers>
          <div className="relative dark:bg-black">
            <Header />
            <div className="container mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-5 md:px-16">
              {children}
            </div>
            <ScrollToTopButton />
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
      <Analytics />
    </html>
  );
}
