import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react'

const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/prashant2403/',
    translateX: '12px',
    rotate: '-10deg',
    zIndex: 1,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/prash240303',
    translateX: '-4px',
    rotate: '3deg',
    zIndex: 2,
  },
  {
    name: 'Twitter',
    link: 'https://x.com/prash2403',
    translateX: '4px',
    rotate: '-3deg',
    zIndex: 3,
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@Prashant-ql4zh',
    translateX: '-24px',
    rotate: '20deg',
    zIndex: 0,
  },
]

const SocialsCard = () => {
  return (
    <div className=" cursor-pointer col-span-5 h-28 flex items-center justify-center ">
      {' '}
      <h2 className="text-neutral-800 dark:text-neutral-300 text-sm font-medium">
        Socials
      </h2>
      <div className="flex size-full  items-center justify-center gap-[5px]">
        {socials.map((social) => (
          <SocialCard
            key={social.name}
            link={social.link}
            name={social.name}
          />
        ))}
      </div>
    </div>
  )
}

const SocialCard = ({
  link,
  className,
  style,
  name,
}: {
  link: string
  className?: string
  style?: React.CSSProperties
  name: string
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        ' group  flex h-fit hover:text-green-600 dark:hover:text-green-600 font-semibold hover:scale-105 transition-all duration-300 ease-in-out items-center justify-center gap-2 rounded-xl  py-3 px-2',
        className
      )}
      style={style}
    >
        {name}
        <ArrowRight className="size-4 hover:scale-105 rotate-0 group-[hover]:rotate-45 rounded-full border border-transparent stroke-1 transition-all duration-300 ease-linear group-hover:-rotate-45 group-hover:border-slate-50 group-hover:stroke-[2px] dark:group-hover:border-slate-950" />
    </Link>
  )
}

export default SocialsCard
