/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101010',
        paper: '#f8f7f2',
        graphite: '#242424',
        muted: '#6f6d66',
        line: '#dedbd0',
        signal: '#ff5a3d',
        cobalt: '#315cff',
        moss: '#65724f',
        brass: '#c49b52',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 28px 80px rgba(16,16,16,0.14)',
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
