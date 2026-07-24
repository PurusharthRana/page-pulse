/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
          50: '#EFF6FF',
          100: '#DBEAFE',
        },
        ink: {
          900: '#0B1220',
          700: '#1F2937',
          500: '#6B7280',
          300: '#D1D5DB',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.08)',
        softHover: '0 4px 12px rgba(15, 23, 42, 0.06), 0 16px 40px -12px rgba(37, 99, 235, 0.18)',
        card: '0 1px 0 rgba(15,23,42,0.03), 0 1px 3px rgba(15,23,42,0.06)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spin: {
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.25)' },
          '100%': { boxShadow: '0 0 0 8px rgba(37, 99, 235, 0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.6s infinite',
        fadeUp: 'fadeUp 0.5s ease-out both',
        spinSlow: 'spin 0.8s linear infinite',
        pulseRing: 'pulseRing 1.6s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
