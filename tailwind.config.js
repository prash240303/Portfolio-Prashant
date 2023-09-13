module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
  },
  plugins: [],
};
