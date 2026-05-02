/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071B33',
        paper: '#ffffff',
        graphite: '#102A44',
        muted: '#647482',
        line: '#D9E4EC',
        signal: '#8DD5F4',
        cobalt: '#1C5D99',
        moss: '#EEF3F6',
        brass: '#B9DDEF',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 28px 80px rgba(7,27,51,0.16)',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 650ms ease both',
      },
    },
  },
  plugins: [],
}
