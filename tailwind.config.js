/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91,0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91,0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'},
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
      },
      screens: {
        xs: '480px',
      }
    },
  },
  plugins: [],
};
