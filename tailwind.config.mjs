import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAFA',
        surface: '#FFFFFF',
        pill: '#F3F4F6',
        midnight: '#111215',
        gunmetal: '#6B7280',
        hairline: '#E5E7EB',
      },
      fontFamily: {
        heading: [
          "'Inter'",
          "'Plus Jakarta Sans'",
          "'Noto Sans JP'",
          'sans-serif',
        ],
        sans: [
          "'Inter'",
          "'Hiragino Kaku Gothic ProN'",
          "'Noto Sans JP'",
          'sans-serif',
        ],
      },
    },
  },
  plugins: [typography],
};

