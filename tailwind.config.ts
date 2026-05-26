import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        card: '#111827',
        muted: '#94a3b8',
        glow: '#38bdf8'
      }
    }
  },
  plugins: []
};
export default config;
