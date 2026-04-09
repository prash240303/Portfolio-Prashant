import { Marquee } from "../Marquee";
import Nextjs from "@/components/Icons/StackIcons/Nextjs";
import { Html } from "@/components/Icons/StackIcons/Html";
import { Css } from "@/components/Icons/StackIcons/css";
import { Figma } from "@/components/Icons/StackIcons/figma";
import { FramerMotion } from "@/components/Icons/StackIcons/FramerMotion";
import { Git } from "@/components/Icons/StackIcons/git";
import { Github } from "@/components/Icons/StackIcons/github";
import { JS } from "@/components/Icons/StackIcons/javascript";
import { Mongodb } from "@/components/Icons/StackIcons/mongodb";
import { Postgresql } from "@/components/Icons/StackIcons/postgresql";
import { Postman } from "@/components/Icons/StackIcons/postman";
import { ReactIcon } from "@/components/Icons/StackIcons/react";
import { Sass } from "@/components/Icons/StackIcons/sass";
import { Shadcn } from "@/components/Icons/StackIcons/Shadcn";
import { Tailwind } from "@/components/Icons/StackIcons/tailwindcss";
import { Typescript } from "@/components/Icons/StackIcons/typescript";
import { VsCode } from "@/components/Icons/StackIcons/VS";
import React from "react";
import { NodejsIcon } from "@/components/Icons/StackIcons/nodejsIcon";
import Stack from "@/components/Icons/Stack";
import Vite from "@/components/Icons/StackIcons/vite";
import { WebSocket } from "@/components/Icons/StackIcons/Websocket";
import { Express } from "@/components/Icons/StackIcons/express";
import BentoCard from "./BentoCard";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TechItem = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
};

const frontendTech: TechItem[] = [
  { Icon: Html, name: "HTML" },
  { Icon: Css, name: "CSS" },
  { Icon: JS, name: "JavaScript" },
  { Icon: Typescript, name: "TypeScript" },
  { Icon: ReactIcon, name: "React" },
  { Icon: Nextjs, name: "Next.js" },
  { Icon: Tailwind, name: "Tailwind CSS" },
  { Icon: Sass, name: "Sass" },
  { Icon: FramerMotion, name: "Framer Motion" },
  { Icon: Figma, name: "Figma" },
  { Icon: Shadcn, name: "shadcn/ui" },
  { Icon: Vite, name: "Vite" },
];

const backendAndTools: TechItem[] = [
  { Icon: NodejsIcon, name: "Node.js" },
  { Icon: Express, name: "Express" },
  { Icon: Postgresql, name: "PostgreSQL" },
  { Icon: Mongodb, name: "MongoDB" },
  { Icon: Postman, name: "Postman" },
  { Icon: WebSocket, name: "WebSocket" },
  { Icon: VsCode, name: "VS Code" },
  { Icon: Git, name: "Git" },
  { Icon: Github, name: "GitHub" },
];

const StacksCard = () => {
  return (
    <div className="w-full mt-4 md:mt-8">
      <div className="mb-3 flex items-center gap-2">
        <h1 className="text-3xl font-instrumentSerif font-medium tracking-tight">
          Stack I use
        </h1>
      </div>
      <BentoCard className="group/stack row-span-1 col-span-5  p-4 lg:p-6">
        <TooltipProvider>
          <Marquee gap="20px" className="py-4" fade pauseOnHover>
            {frontendTech.map(({ Icon, name }, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Icon
                    id={`${index}`}
                    className="size-10 cursor-pointer transition-all duration-100 ease-in-out hover:-translate-y-1"
                  />
                </TooltipTrigger>

                <TooltipContent
                  className="bg-black/5 dark:bg-white/5  rounded-sm! text-neutral-900 dark:text-white text-xs!"
                  side="top"
                >
                  <p className="text-sm">{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </Marquee>
        </TooltipProvider>
        <TooltipProvider>
          <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
            {backendAndTools.map(({ Icon, name }, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Icon
                    id={`${index}2`}
                    className="size-10 cursor-pointer transition-all duration-100 hover:-translate-y-1"
                  />
                </TooltipTrigger>

                <TooltipContent
                  className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300"
                  side="top"
                >
                  <p className="text-sm ">{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </Marquee>
        </TooltipProvider>
      </BentoCard>
    </div>
  );
};

export default StacksCard;
