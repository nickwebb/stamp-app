import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: '#171717',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'waveform': 'waveform 1.5s ease-in-out infinite',
      },
      keyframes: {
        waveform: {
          '0%, 100%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  safelist: [
    'bg-purple-400',
    'bg-purple-500',
    'bg-purple-600',
    'text-purple-400',
    'text-purple-500',
    'text-purple-600',
    {
      pattern: /^(bg|text|border)-(purple)-(400|500|600)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
};

export default config; 