/* global require */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    animation: {
      aurora: "aurora 60s linear infinite",
    },
    keyframes: {
      aurora: {
        from: {
          backgroundPosition: "50% 50%, 50% 50%",
        },
        to: {
          backgroundPosition: "350% 50%, 350% 50%",
        },
      },
    },
  },
  gradientColorStops: {
    'hover-bg-start': 'var(--hover-bg-start)',
    'hover-bg-end': 'var(--hover-bg-end)',
    'bg-gradient-start': 'var(--bg-gradient-start)',
    'bg-gradient-end': 'var(--bg-gradient-end)',
  },
  linearGradientColors: {
    'hover-bg': ['var(--hover-bg-start)', 'var(--hover-bg-end)'],
    'bg-gradient': ['var(--bg-gradient-start)', 'var(--bg-gradient-end)'],
  },
};
export const plugins = [addVariablesForColors];

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

