/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color system
        background: {
          DEFAULT: '#ffffff', // light
        },
        surface: {
          DEFAULT: '#f9fafb', // light: gray-50
        },
        primary: {
          DEFAULT: '#2563eb', // blue-600
        },
        secondary: {
          DEFAULT: '#64748b', // gray-500
        },
        onPrimary: {
          DEFAULT: '#ffffff', // text on primary
        },
        onBackground: {
          DEFAULT: '#111827', // text on background
        },
        border: {
          DEFAULT: '#e5e7eb', // gray-200
        },
        muted: {
          DEFAULT: '#6b7280', // gray-600
        },
        accent: {
          DEFAULT: '#f59e42', // orange-400
        },
      },
    },
  },
  plugins: [],
}