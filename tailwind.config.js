/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        'sword-swing': 'sword-swing 0.3s ease-in-out',
      },
      keyframes: {
        'scroll-indicator': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'translateY(8px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '0.6',
          },
        },
        'sword-swing': {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '25%': {
            transform: 'rotate(5deg) scale(1.1)',
          },
          '50%': {
            transform: 'rotate(-5deg) scale(1.05)',
          },
          '75%': {
            transform: 'rotate(3deg) scale(1.1)',
          },
          '100%': {
            transform: 'rotate(0deg) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
