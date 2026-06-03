module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for Yeled Plus
        'clay-purple': '#A855F7',
        'clay-pink': '#EC4899',
        'clay-cyan': '#22D3EE',
        'clay-blue': '#3B82F6',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-glow': 'bounce-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(168, 85, 247, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(168, 85, 247, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-glow': {
          '0%, 100%': { transform: 'scale(1)', 'box-shadow': '0 0 20px rgba(168, 85, 247, 0.3)' },
          '50%': { transform: 'scale(1.05)', 'box-shadow': '0 0 40px rgba(168, 85, 247, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        hebrew: ['Rubik', 'Heebo', 'Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
};