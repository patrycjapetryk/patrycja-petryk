/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nimbus Sans D OT Bold', 'Helvetica', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        tighter: '1.2',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
