/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3', 
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899', // Main pregnancy pink
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd', 
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Soft blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // Warm yellow
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Soft green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'Lora', 'ui-serif', 'Georgia'],
      },
      backgroundImage: {
        'pregnancy-gradient': 'linear-gradient(135deg, #fdf2f8 0%, #f0f9ff 25%, #fefce8 50%, #f0fdf4 75%, #fdf2f8 100%)',
        'hero-gradient': 'linear-gradient(135deg, #ec4899 0%, #0ea5e9 50%, #eab308 100%)',
        'section-gradient': 'linear-gradient(to bottom right, #fdf2f8, #ffffff, #f0f9ff)',
        'gradient-hero': 'linear-gradient(135deg, #ec4899 0%, #0ea5e9 50%, #eab308 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient-x 15s ease infinite',
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
        'pregnancy-pulse': 'pregnancy-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pregnancy-pulse': {
          '0%, 100%': { 
            background: 'linear-gradient(135deg, #fdf2f8, #f0f9ff, #fefce8)',
            transform: 'scale(1)',
          },
          '50%': { 
            background: 'linear-gradient(135deg, #fbcfe8, #bae6fd, #fef08a)',
            transform: 'scale(1.02)',
          },
        },
      }
    },
  },
  plugins: [],
}
