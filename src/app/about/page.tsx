import PolaroidPhoto from '@/components/About/PolaroidPhoto'

import p1 from '../../../public/profile/pic1.jpeg'
import p2 from '../../../public/profile/pic2.webp'
import p3 from '../../../public/profile/pic3.jpeg'
import { SpacingWhale } from '@/components/Home/SpacingWhle'
import Logo from '@/components/Icons/Logo'
import CdBack from '@/components/shared/CdBack'
import { iconData, inspirationWebsites } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet me and my portfolio, Space.',
}

const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <div className="flex items-end gap-5">
        <h1 className="text-4xl font-bold tracking-tight">about me</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 py-20 md:gap-20">
        <PolaroidPhoto
          altText="image"
          imageSrc={p1}
          rotation={-7}
          text="11/04/2025"
        />
        <PolaroidPhoto
          altText="image"
          imageSrc={p2}
          rotation={5}
          text="24/05/2023"
        />
        <PolaroidPhoto
          altText="image"
          imageSrc={p3}
          rotation={2}
          text="19/11/2024"
        />
      </div>
      <div className="group space-y-5 leading-relaxed">
        <p>
          Hey there! I&apos;m Prashant Prabhakar, a{' '}
          {Math.floor(
            (new Date().getTime() - new Date(2003, 3, 24).getTime()) /
              (365.25 * 24 * 60 * 60 * 1000)
          )}
          -year-old Full-Stack developer from India who thrives on crafting
          intuitive and dynamic <span className="text-teal-500">UIs</span>,
          especially with{' '}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="wavvy under underline-offset-4"
          >
            Next.js
          </Link>
          .
        </p>
        <p>
          I began my tech journey at the end of 2022, and since then, I’ve
          developed a strong expertise in building responsive and secure web
          applications that offer a seamless user experience. Along with my love
          for animation and UI design, I find full-stack development incredibly
          fascinating.
        </p>
        <p>
          I enjoy building robust applications and exploring new technologies to
          enhance my skills.
        </p>
        <p>
          Currently, I&apos;m diving into Backend Developement, Python, and GenAI development, expanding my skills in these innovative areas.
        </p>
      </div>
      <div>
        <h1 className="mt-20 text-4xl font-bold tracking-tight">
          About this site
        </h1>
        <p className="my-7 text-lg"> Curious about this site? It features:</p>
        <div className="mt-10">
          <h1 className="text-2xl font-bold tracking-tight">Tech stack</h1>
          <p className="my-7">
            This site is crafted with Next.js, Tailwind CSS, and uses
            Umami for analytics, with Vercel handling the hosting. Check out the
            code on{' '}
            <Link
              href="https://github.com/prash240303/Portfolio-Prashant"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-500 decoration-2 underline-offset-2"
            >
              GitHub
            </Link>
          </p>
          <div className="grid grid-cols-4 grid-rows-2 content-center gap-10 p-3">
            {iconData.map(({ Component, href, className, label }) => (
              <div key={label} className="group relative w-fit pb-3">
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Component className={className} />
                </Link>
                <span className="absolute left-[-30%] mt-3 w-20 rounded px-2 py-1 text-center text-xs font-semibold opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-none dark:text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>{' '}
      <div className="mt-10">
        <h1 className="text-2xl font-bold tracking-tight">Inspiration</h1>
        <p className="my-7">
          I’m thankful to the fantastic websites listed below for sparking the
          inspiration behind this site.
        </p>
        <div>
          {' '}
          <ul className="list-disc space-y-1">
            {inspirationWebsites.map((site) => (
              <li key={site.url} className="ml-4">
                <Link
                  href={site.url}
                  className="transform-gpu bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 hover:bg-[length:100%_2px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-7">
            Uncover even more sources of inspiration in the{' '}
            <Link
              className="underline decoration-2"
              href="https://github.com/Rohit-Singh-Rawat/Space/#inspiration"
              target="_blank"
              rel="noopener noreferrer"
            >
              README
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold tracking-tight">Typography</h1>
        <p className="my-7">
          For typography, <span>Inter</span> sets the stage with body text,{' '}
          <span className="font-neu">Neue Montreal</span> emphasizes special
          words, <span className="font-lombok">Lombok</span> makes playground
          headings pop, and{' '}
          <span className="font-cath">Catholic School Girls BB</span> adds flair
          to Polaroid images. Each font is uniquely styled to highlight its
          role.
        </p>
        <div className="grid border-collapse grid-cols-1 place-items-center items-center border border-dashed border-emerald-900/60 md:grid-cols-2">
          <p className="w-full border border-dashed border-emerald-900/60 p-4 text-center font-normal">
            Inter
          </p>
          <p className="w-full border border-dashed border-emerald-900/60 p-4 text-center font-neu font-medium">
            Neue Monstreal
          </p>
          <p className="w-full border border-dashed border-emerald-900/60 p-4 text-center font-lombok">
            LOMBOK
          </p>
          <p className="w-full border border-dashed border-emerald-900/60 p-4 text-center font-cath">
            Catholic School Girls BB
          </p>
        </div>
      </div>
      <CdBack />
    </section>
  )
}
export default page
