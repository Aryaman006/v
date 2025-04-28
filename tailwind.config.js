/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", 
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-poppins)', 'sans-serif'],
        },
        colors: {
          'custom-gradient-from': '#19b3b1',
          'custom-gradient-to': '#0c1b2a',
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to right, #19b3b1, #0c1b2a)',
        },
      },
    },
    plugins: [],
  };
  