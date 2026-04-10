/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        abyss:   '#060C1A',
        surface: '#0C1628',
        border:  '#1A2B48',
        teal:    '#00F0C0',
        blue:    '#4E8FFF',
        purple:  '#9B5CF5',
        'text-primary':   '#EDF2FF',
        'text-secondary': '#7A95C0',
        'text-muted':     '#3D5275',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
};
