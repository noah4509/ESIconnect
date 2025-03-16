/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        foreground: '#FFFFFF',
        card: '#1E1E1E',
        'card-foreground': '#FFFFFF',
        primary: '#3B82F6',
        'primary-foreground': '#FFFFFF',
        secondary: '#1E1E1E',
        'secondary-foreground': '#FFFFFF',
        warning: '#F97316',
        'warning-foreground': '#FFFFFF',
        gray: '#A0A0A0',
        'gray-light': '#2A2A2A',
        'gray-dark': '#181818',
      },
    },
  },
  plugins: [],
} 