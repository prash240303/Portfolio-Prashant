"use client";
import CodeBlock from "@/components/ui/CodeBlock";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const codeSnippet = `
const getArrowStyles = (index: number) => {
  const baseStyles = {
    height: '2px',
    width: '2px',
    borderRadius: '2px',
    backgroundColor: '#000',
  };
  const positions = [
    { left: 0, top: 0 },
    { left: '3px', top: 0 },
    { left: '3px', top: '3px' },
    { left: '6px', top: '3px' },
    { left: '6px', top: '6px' },
    { left: '9px', top: '6px' },
    { left: '3px', top: '9px' },
    { left: '6px', top: '9px' },
    { left: 0, top: '12px' },
    { left: '3px', top: '12px' },
  ];
  return { ...baseStyles, ...positions[index] };
};
`;

const codeSnippetHover = `<div className='hero-button-arrows absolute flex items-center
  pointer-events-none overflow-hidden transition-all p-1
  duration-500 group-hover:w-full group-hover:h-full 
  group-hover:left-0 group-hover:top-0 justify-center
  h-full w-12 rounded-4 top-0 left-0 moving-arrows'> 
{/* Arrow content */}
</div>`;

const codeSnippetPulsating = `{Array(8).fill(null).map((_, idx) => (
  <div key={idx} className={\`moving-arrows-item relative w-3 h-3 \${idx === 0 ? 'block' : 'group-hover:block'}\`}>
    {Array(10).fill(null).map((_, i) => (
      <div key={i} style={{ ...getArrowStyles(i), position: 'absolute' }} className={\`wave wave-\${idx + 1}\`}></div>
    ))}
  </div>
))}`;

const codeSnippetPulsatingCSS = `
.wave {
  animation: wave 1.5s ease-in-out infinite;
}

@keyframes wave {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.2;
  }
}

.wave-1 {
  animation-delay: 0s;
}

.wave-2 {
  animation-delay: 0.1s; /* 0.2s delay for the second arrow */
}

.wave-3 {
  animation-delay: 0.2s; /* 0.4s delay for the third arrow */
}

.wave-4 {
  animation-delay: 0.3s; /* 0.6s delay for the fourth arrow */
}

.wave-5 {
  animation-delay: 0.4s; /* 0.8s delay for the fifth arrow */
}

.wave-6 {
  animation-delay: 0.5s; /* 1s delay for the sixth arrow */
}

.wave-7 {
  animation-delay: 0.6s; /* 1.2s delay for the seventh arrow */
}

.wave-8 {
  animation-delay: 0.7s; /* 1.4s delay for the eighth arrow */
}

.group:hover .moving-arrows-item:first-child {
  display: none;
}
`;

function CraftsButtonPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="view-container mt-12 md:mt-24 mb-12 md:mb-[100px] overflow-hidden">
      <section className="py-4 md:py-8 px-4 md:px-6 max-w-[600px] mx-auto ">
        <Link href="/crafts">
          <span className="text-sm mb-4 text-neutral-500">Back to Crafts</span>
        </Link>
        <h1 className="text-xl mb-1 font-semibold">
          Animated Button component
        </h1>
        <p>CTA button with animation using pure js.</p>

        <div className="mt-12 border border-neutral-300 shadow-lg w-fit rounded-lg overflow-hidden h-fit mx-auto">
          <Image
            src={"/crafts/button.gif"}
            width={1000}
            height={1000}
            alt="iamge"
            className="md:h-64 w-auto  aspect-auto h-24 "
          />
        </div>

        <div className="text-base mt-4 text-neutral-700">
          Recently I came across a tweet by very respected{" "}
          <span className="font-medium text-blue-500">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/mannupaaji"
            >
              @mannupaaji
            </a>
          </span>
          Here is the reference tweet
          <div>
            <blockquote
              className="twitter-tweet"
              dangerouslySetInnerHTML={{
                __html: `
                  <p lang="qme" dir="ltr">
                    👀 💬 <a href="https://t.co/8riLSj39l2">pic.twitter.com/8riLSj39l2</a>
                  </p>
                  &mdash; Manu Arora (@mannupaaji) 
                  <a href="https://twitter.com/mannupaaji/status/1791328854360870914?ref_src=twsrc%5Etfw">May 17, 2024</a>
                `,
              }}
            />
          </div>
          where he referenced the website for{" "}
          <span className="font-medium text-lime-500">
            <a target="_blank" href="https://antimetal.com/">
              Antimetal
            </a>
          </span>{" "}
          where the CTA button struck my mind and I also in motivated mind
          thought to recreate that button.
          <div className="mt-2">
            My Immeditate thought was to create the detailed Arrow SVG
            <Image
              className="mx-auto border rounded-md my-2"
              src={"/crafts/arrow.png"}
              width={100}
              height={100}
              alt="arrow"
            />
            While I knew I wont find any asset/SVG online, I had to make it
            myself from scratch where got the idea by GPT how to build it using
            CSS styles over divs by absolute positioning them.
            <div className="my-4 rounded-md">
              <CodeBlock language="javascript" code={codeSnippet} />
            </div>
            This function creates the arrow shape using small 2x2 pixel blocks.
            Each block is positioned precisely to form the arrow shape. The
            baseStyles define the size and appearance of each block, while the
            positions array determines the exact placement of each block to
            create the arrow shape.
          </div>
          <div>
            <h3 className="font-semibold mt-2 mb-1"> Hover Animation </h3>
            The hover animation is achieved through a combination of CSS
            transitions and React state changes. When the button is hovered, we
            trigger a series of class changes that reveal the full arrow
            container:
            <div className="my-4  rounded-md">
              <CodeBlock language="javascript" code={codeSnippetHover} />
            </div>
            <p>
              The group-hover classes from Tailwind CSS are used to control the
              expansion of the arrow container on hover. This creates the effect
              of the arrows filling the button.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mt-2 mb-1">Pulsating Effect</h3>
            <p>
              The pulsating effect is created by using multiple layers of arrows
              that appear to move. This is achieved by rendering multiple sets
              of arrows and animating them:
            </p>
            <CodeBlock language="javascript" code={codeSnippetPulsating} />
            <CodeBlock language="javascript" code={codeSnippetPulsatingCSS} />
            <p>
              Each set of arrows is given a different animation delay, creating
              the illusion of a continuous flow of arrows. The CSS animations
              (not shown in the provided code) would handle the actual movement
              of these arrow sets.
            </p>

            <p className="font-medium mt-4">
              {`Here's the source code, I hope you like it : )`}{" "}
            </p>
            <div>
              <iframe
                src="https://codesandbox.io/p/devbox/wptx23?embed=1"
                style={{
                  width: "100%",
                  height: "500px",
                  border: 0,
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
                title="button-animated"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>

              <p className="font-medium mt-4">
                {`Please do check out other crafts as well. Any feedback is well appreciated.🥰`}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CraftsButtonPage;
