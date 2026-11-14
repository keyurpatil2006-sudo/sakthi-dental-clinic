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
          DEFAULT: '#32263C', // Deep Velvet Charcoal Plum
          hover: '#201627',
          light: '#F3EFF9',
          accent: '#7452A6',
        },
        lavender: {
          50: '#FAF8FD',
          100: '#F3EFF9',
          200: '#EAE2F3',
          300: '#D5C5E6',
          400: '#A78BFA', // Primary Accent
          500: '#8E6FC0',
          600: '#7452A6',
          700: '#573B80',
          800: '#3F2A5D',
          900: '#2A1B3F',
        },
        canvas: {
          DEFAULT: '#FAF9F6', // Warm Alabaster
          warm: '#F4F1EA',   // Architectural Stone
          muted: '#ECE8DF',  // Linen tone
          card: '#FFFFFF',
          dark: '#17161B',   // Museum Charcoal
        },
        surface: {
          DEFAULT: '#FAF9F6',
          alt: '#F4F1EA',
          white: '#FFFFFF',
          card: '#FFFFFF',
        },
        ink: {
          primary: '#1E1D24',   // Deep editorial ink
          secondary: '#5F5D6B', // Slate body text
          muted: '#8E8C99',     // Metadata text
          border: '#EAE6E1',    // Architectural hairline border
          borderLight: '#F0ECE6',
          borderDark: '#2C2B33',
        },
      },
      fontFamily: {
        serif: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(30, 29, 36, 0.03), 0 1px 2px 0 rgba(30, 29, 36, 0.02)',
        'elevated': '0 12px 28px -6px rgba(30, 29, 36, 0.06), 0 4px 10px -2px rgba(30, 29, 36, 0.02)',
        'card': '0 0 0 1px #EAE6E1, 0 2px 6px -2px rgba(30, 29, 36, 0.03)',
        'card-hover': '0 0 0 1px #D5C5E6, 0 16px 32px -8px rgba(50, 38, 60, 0.09)',
      },
      borderRadius: {
        'arch': '0.875rem',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
