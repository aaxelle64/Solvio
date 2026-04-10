/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        abyss:   '#080A12',
        surface: '#0D1120',
        border:  '#1C2238',
        teal:    '#00C8A0',
        blue:    '#4E7FFF',
        'text-primary':   '#EDF1FF',
        'text-secondary': '#7A8EA8',
        'text-muted':     '#3D4E6B',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderWidth: {
        DEFAULT: '0.5px',
      },
    },
  },
  plugins: [],
};
