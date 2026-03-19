/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0a0f',
          50: '#0e0e14',
          100: '#12121a',
          200: '#1a1a24',
          300: '#24242f',
        },
        accent: {
          DEFAULT: '#00e5c3',
          dim: '#00b89c',
          glow: '#00ffda',
        },
        amber: {
          DEFAULT: '#f5a623',
          dim: '#c4841c',
        },
      },
      fontFamily: {
        display: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
