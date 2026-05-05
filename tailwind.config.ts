import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        buttons: ['"Buttons/Big"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        hero: ['58px', { lineHeight: '1.1' }],
        nav: ['16px', { lineHeight: '1.5' }],
      },
    },
  },
};

export default config;