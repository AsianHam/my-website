import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        iron: '#DCDEDD',
        alabaster: '#F9F9F9',
        shark: '#212428',
        'torch-red': '#ff014f',
      },
      spacing: {
        '30': '7.5rem',
      },
      screens: {
        '1440': '1440px',
        '1200': '1200px',
        '768': '768px',
        '900': '900px',
      },
    },
  },
  plugins: [],
};
export default config;
