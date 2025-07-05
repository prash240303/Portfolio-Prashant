import MdxIcon from "@/components/Home/MdxIcon";
import VercelLogoIcon from "@/components/Home/VercelIcon";
import { FramerMotion } from "@/components/Icons/StackIcons/FramerMotion";
import Nextjs from "@/components/Icons/StackIcons/Nextjs";
import { Shadcn } from "@/components/Icons/StackIcons/Shadcn";
import { Github } from "@/components/Icons/StackIcons/github";
import { Tailwind } from "@/components/Icons/StackIcons/tailwindcss";
import Umami from "@/components/Icons/Umami";

import type React from "react";
type NavItems = {
  name: string;
  href: string;
}[];
export const navItems: NavItems = [
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Playground", href: "/playground" },
];

interface IconData {
  Component: React.FC<{ className?: string }>;
  href: string;
  className: string;
  label: string;
}
export const iconData: IconData[] = [
  {
    Component: Nextjs,
    href: "https://nextjs.org",
    className: "size-12 dark:invert",
    label: "Framework",
  },
  {
    Component: Tailwind,
    href: "https://tailwindcss.com",
    className: "size-12 grayscale invert dark:invert-0",
    label: "Utility",
  },
  {
    Component: Shadcn,
    href: "https://shadcn.dev",
    className: "size-12",
    label: "UI lib",
  },
  {
    Component: FramerMotion,
    href: "https://motion.dev/docs/animate",
    className: "size-12 dark:invert",
    label: "Animation",
  },
  {
    Component: Umami,
    href: "https://umami.is",
    className: "size-12 dark:invert",
    label: "Analytics",
  },
  {
    Component: Github,
    href: "https://github.com",
    className: "size-12 dark:invert",
    label: "Version",
  },
  {
    Component: VercelLogoIcon,
    href: "https://vercel.com",
    className: "size-12",
    label: "Deploy",
  },
];
export const inspirationWebsites = [
  { name: "manuarora.in", url: "https://manuarora.in/" },
  { name: "antfu.me", url: "https://antfu.me/" },
  { name: "beta.vimfn.in", url: "https://beta.vimfn.in" },
  { name: "honghong.me", url: "https://honghong.me" },
  { name: "leerob.io", url: "https://leerob.io" },
  { name: "canvas.hrcd.fr", url: "https://canvas.hrcd.fr/" },
];
export const topProjects = [
  {
    videoSrc: "",
    imageSrc: "/projects/talkpdf.png",
    title: "TalkPDF",
    tags: ["Next.js", "OpenAI", "PineCone", "AWS S3"],
    timeline: "2025",
    tagline: "AI-SaaS product using RAG for knowledgebase training",
    sourceCodeHref: "", // Add GitHub link if available
    liveDemoHref: "https://talkpdf.tech/",
  },
  {
    videoSrc: "",
    imageSrc: "/projects/vro.png",
    title: "VRO: Vehicle Routing System",
    tags: ["Next.js", "MapBox", "Python"],
    timeline: "2025",
    tagline: "Routing management using Genetic Algorithm",
    sourceCodeHref: "", // Add GitHub link if available
    liveDemoHref: "https://walmart-hackathon-frontend.vercel.app/",
  },
  {
    videoSrc: "",
    imageSrc: "/projects/sql-editor.png",
    title: "SQLHub: Online SQL editor",
    tags: ["Next.js", "Ace-Editor", "Typescript"],
    timeline: "2025",
    tagline: "Interactive SQL query simulator",
    sourceCodeHref: "", // Add GitHub link if available
    liveDemoHref: "https://sql-editor-nextjs.vercel.app/",
  },
  {
    videoSrc: "",
    imageSrc: "/projects/gradify.png",
    title: "Gradify Gradients Figma Plugin",
    tags: ["Figma", "Plugin"],
    timeline: "2025",
    tagline: "Generate beautiful linear and mesh gradients in Figma",
    sourceCodeHref: "", // Usually no source code for Figma plugins
    liveDemoHref:
      "https://www.figma.com/community/plugin/1187380125870182667/gradify",
  },
];
