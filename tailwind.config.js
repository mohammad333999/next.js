import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   // 👇 Add CSS variables
      //   sans: ["var(--font-opensans)"],
      //   mono: ["var(--font-roboto-mono)"],
      // },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,

      themes: {
        light: {
          colors: {
            background: '#d1fae5',
            onBackground: '#6ee7b7',
            success: '#000000',
            textCloudy: '#71717a',
            textBright: '#022c22',
            textPrice: '#fd7f57',
            tableBackround: '#f0fdf4',
            // textDescription: '',
            warning: '#ff9900',
            warning0: '#ff6c3d',

            boxInBackground: '#16a34a',
            inputField: '#f4f4f5',

            active: '#059669',
            paused: '#7dd3fc',
            vacation: '#ca8a04'
            
          },
        },
        dark: {
          colors: {
            background: '#022c22',
            onBackground: '#064e3b',
            success: '#ffffff',
            textCloudy: '#a1a1aa',
            textBright: '#f0fdf4',
            textPrice: '#fd7f57',
            tableBackround: '#022c22',
            // textDescription: '',
            warning0: '#9a3412',
            warning: '#b91c1c',

            boxInBackground: '#10b981',
            inputField: '#022c22',

            active: '#4ade80',
            paused: '#0ea5e9',
            vacation: '#f97316'
          },
        },
        // ... custom themes
      },
    }),
  ],
};

