/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F3F5F2',
        surface: '#FFFFFF',
        clinical: {
          primary: '#20332F',
          secondary: '#718078',
          muted: '#95A39C',
          border: '#E5EAE6',
          'border-light': '#F0F4F1',
          teal: {
            DEFAULT: '#267C70',
            hover: '#1E665C',
            light: '#DCEBE5',
            tint: '#F0F6F4',
          },
          success: {
            DEFAULT: '#27856A',
            bg: '#EAF3F0',
            border: '#D2E5DE',
          },
          warning: {
            DEFAULT: '#D69A43',
            bg: '#FBF5EB',
            border: '#F3E2C6',
          },
          critical: {
            DEFAULT: '#C75B5B',
            bg: '#F9EFEF',
            border: '#F0D5D5',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'monospace',
        ],
      },
      boxShadow: {
        'clinical-card': '0 1px 3px 0 rgba(32, 51, 47, 0.04), 0 1px 2px -1px rgba(32, 51, 47, 0.02)',
        'clinical-elevated': '0 4px 12px -2px rgba(32, 51, 47, 0.06), 0 2px 4px -2px rgba(32, 51, 47, 0.03)',
        'clinical-dropdown': '0 10px 25px -5px rgba(32, 51, 47, 0.08), 0 8px 10px -6px rgba(32, 51, 47, 0.04)',
      },
      borderRadius: {
        'clinical': '12px',
        'clinical-lg': '16px',
      },
    },
  },
  plugins: [],
};
