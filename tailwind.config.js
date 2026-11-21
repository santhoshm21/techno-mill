/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tmt: {
          yellow: '#F5B800',
          'yellow-hover': '#E0A800',
          'yellow-light': '#FEF9E7',
          charcoal: '#1E2227',
          'charcoal-light': '#262B31',
          'charcoal-dark': '#15181C',
          dark: '#1F2937',
          muted: '#4B5563',
          subtle: '#F7F8FA',
          border: '#E5E7EB',
          'border-dark': '#374151',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
