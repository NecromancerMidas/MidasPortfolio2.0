/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a27',
        secondary: '#231437',
        tetrinary: '#161a53',
        quaternary: 'yellow',
        quinternary: '#210b3f',
        code: 'rgb(216, 0, 118)',
        outerBoxShadow: '#2a2a72',
        string: 'rgb(0, 204, 255)',
      },
    },
  },
  plugins: [],
}

