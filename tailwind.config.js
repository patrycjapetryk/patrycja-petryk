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
      fontSize: {
        md: [
          '1.14rem',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.025em',
          },
        ],
        lg: [
          '1.22rem',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.025em',
          },
        ],
        xl: [
          '1.34rem',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.028em',
          },
        ],
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
