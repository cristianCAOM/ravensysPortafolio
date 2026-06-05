
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#070a0f',
        surface: '#0f1520',
        primary: '#1e9fff',
        accent: '#8b7cff',
        muted: '#64748b',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(30, 159, 255, 0.4)',
        'glow-accent': '0 0 20px rgba(139, 124, 255, 0.4)',
        'glow-surface': '0 0 30px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
