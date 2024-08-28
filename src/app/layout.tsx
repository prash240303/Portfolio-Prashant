import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Prashant's Portfolio",
  description: "Hello, welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
