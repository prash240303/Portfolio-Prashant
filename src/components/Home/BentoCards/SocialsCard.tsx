import { Discord } from '@/components/Icons/socials/Discord'
import { Linkedin } from '@/components/Icons/socials/Linkedin'
import { GitHub } from '@/components/Icons/socials/GitHub'
import { Spotify } from '@/components/Icons/socials/Spotify'
import { Twitter } from '@/components/Icons/socials/Twitter'
import BentoCard from './BentoCard'
import { YT } from '@/components/Icons/socials/YT'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const socials = [
  {
    name: 'Discord',
    icon: Discord,
    link: 'https://discord.com',
    translateX: '24px',
    rotate: '-20deg',
    zIndex: 0,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/prashant2403/',
    translateX: '12px',
    rotate: '-10deg',
    zIndex: 1,
  },
  {
    name: 'Twitter',
    icon: Twitter,
    link: 'https://x.com/prash2403',
    translateX: '4px',
    rotate: '-3deg',
    zIndex: 3,
  },
  {
    name: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/prash240303',
    translateX: '-4px',
    rotate: '3deg',
    zIndex: 2,
  },
  {
    name: 'Spotify',
    icon: Spotify,
    link: 'https://open.spotify.com/user/t88u10snq9q3n9lfnfyvv424n',
    translateX: '-12px',
    rotate: '10deg',
    zIndex: 1,
  },
  {
    name: 'YouTube',
    icon: YT,
    link: 'https://www.youtube.com/@Prashant-ql4zh',
    translateX: '-24px',
    rotate: '20deg',
    zIndex: 0,
  },
]

const SocialsCard = () => {
  return (
    <BentoCard className="group-social cursor-pointer row-span-1 col-span-5 h-56 p-4 lg:p-6">
      {' '}
      <h2 className="text-neutral-800 dark:text-neutral-300 font-neu text-sm font-medium text-transparent">
        Socials
      </h2>
      <div className="flex size-full items-center justify-center gap-[5px]">
        {socials.map((social) => (
          <SocialCard
            key={social.name}
            icon={social.icon}
            link={social.link}
            name={social.name}
            style={{
              transform: `translateX(${social.translateX}) rotate(${social.rotate})`,
              zIndex: social.zIndex,
              transformOrigin: 'top center',
            }}
          />
        ))}
      </div>
    </BentoCard>
  )
}

const SocialCard = ({
  icon: Icon,
  link,
  className,
  style,
  name,
}: {
  icon: React.ComponentType<{ className: string }>
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
        'p social flex h-fit min-w-[54px] max-w-[54px] flex-col items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white py-3 transition-all duration-500 dark:border-white/[0.1] dark:bg-black',
        '[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05),0_-20px_30px_-25px_#E8FFDB_inset] dark:[box-shadow:-20px_-15px_20px_-25px_#4b523d_inset]', // Ensure this class is correctly applied
        className
      )}
      style={style}
    >
      <Icon className="size-5" />
      <p className="text-[8px]"> {name}</p>
    </Link>
  )
}

export default SocialsCard
