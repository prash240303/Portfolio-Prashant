import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="32"
    width="32"
    viewBox="0 0 54 54"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <mask
        id="framer-mask"
        width="100%"
        height="100%"
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
      </mask>
    </defs>

    {/* Original colored version */}
    <g
      mask="url(#framer-mask)"
      className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"
    >
      <path
        d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
        fill="#59529d"
      />
      <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
      <path
        d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
        fill="#bb4b96"
      />
    </g>

    {/* Grayscale version */}
    <g
      mask="url(#framer-mask)"
      className="group-hover:opacity-0 opacity-100 transition-opacity duration-300"
    >
      <path
        d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
        fill="#888888"
      />
      <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#999999" />
      <path
        d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
        fill="#777777"
      />
    </g>
  </svg>
);

export { SvgComponent as FramerMotion };
