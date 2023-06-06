/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1290px', // Extra-large screens
      '2xl': '1536px', // 2X extra-large screens
      // Add your custom breakpoints here
    },
  },
  plugins: [],
};
