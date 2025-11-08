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
    imageSrc: "/projects/gradify.png",
    title: "Margdarshak AI-Chatbot",
    tags: ["Langchain","GPT-4o mini","ChromaDB","AWS S3", "React.js", "Python"],
    timeline: "2025",
    tagline: "Developed an AI chatbot for handling admission-related queries on the college website using RAG architecture.",
    sourceCodeHref: "https://github.com/prash240303/major-project", 
    liveDemoHref:"",
  },
  {
    videoSrc: "",
    imageSrc: "/projects/gradify.png",
    title: "Shh: Real-time Chatrooms App",
    tags: ["Django","Channels","Websocket","React", "React/TailwindCSS", "Axios"],
    timeline: "2025",
    tagline: "Built a Chatroom app with Typescript, ShadCN Components, custom themes & socket-based real-time messaging.",
    sourceCodeHref: "https://github.com/prash240303/shh-chatroom", 
    liveDemoHref:"",
  },
  {
    videoSrc: "",
    imageSrc: "/projects/wdmc.png",
    title: "WDMC NITJ Feature Contribution ",
    tags: ["MongoDB","Mongoose","Admin-Bro","Javascript", "HTML/CSS", "RBAC"],
    timeline: "2023",
    tagline: "Created a new Dynamic HTML template page using TailwindCSS and RESTful APIs for showcasing different NITJ Clubs.",
    sourceCodeHref: "http://github.com/wdmc-nitj/nitj-website-deploy/pull/721", 
    liveDemoHref:"https://www.nitj.ac.in/clubs/template.html?id=dance",
  },
  {
    videoSrc: "",
    imageSrc: "/projects/talkpdf.png",
    title: "TalkPDF",
    tags: ["Next.js", "OpenAI", "PineCone", "AWS S3"],
    timeline: "2023",
    tagline: "AI-SaaS product using RAG for knowledgebase training",
    sourceCodeHref: "", // Add GitHub link if available
    liveDemoHref: "https://talkpdf.tech/",
  },
  {
    videoSrc: "",
    imageSrc: "/projects/vro.png",
    title: "VRO: Vehicle Routing System",
    tags: ["Next.js", "MapBox", "Python"],
    timeline: "2024",
    tagline: "Routing management using Genetic Algorithm",
    sourceCodeHref: "", // Add GitHub link if available
    liveDemoHref: "https://walmart-hackathon-frontend.vercel.app/",
  },
  {
    videoSrc: "",
    imageSrc: "/projects/gradify.png",
    title: "Gradify Gradients Figma Plugin",
    tags: ["Figma", "Plugin"],
    timeline: "2022",
    tagline: "Generate beautiful linear and mesh gradients in Figma",
    sourceCodeHref: "", // Usually no source code for Figma plugins
    liveDemoHref:
      "https://www.figma.com/community/plugin/1187380125870182667/gradify",
  },
];
