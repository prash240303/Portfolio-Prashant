import CdBack from '@/components/shared/CdBack'
import { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'A space for my hobbies: music, anime, gym, and more!',
}

const componentList = [
  {
    title: "Animated Button component",
    description: "CTA button with animation using vanilla js.",
    slug: "button",
  },
  {
    title: "What's playing loading component",
    description:
      "Transition components for music site exploration → What's playing Beno!",
    slug: "whats-playing",
  },
  {
    title: "Reward claiming interaction",
    description: "A quick fun interaction built with Next & Framer Motion.",
    slug: "reward-claiming",
  },
  {
    title: "Amie calendar tab switch",
    description: "Recreating the Amie Calendar Tab Switch",
    slug: "amie-calendar",
  },
];

const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <h1 className="text-4xl font-bold tracking-tight">playground</h1>
      <div className="space-y-4 mt-6">
          {componentList.map((component, index) => (
            <Link
              href={`/playground/${component.slug}`}
              key={index}
              className="block hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 rounded-xl p-4 md:p-6 text-left transition-colors duration-200"
            >
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {component.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {component.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      <CdBack />
    </section>
  )
}
export default page
