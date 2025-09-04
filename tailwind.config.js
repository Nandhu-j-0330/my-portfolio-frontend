// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "bat-bg": "#0a0a0a", // custom bg
//       },
//     },
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bat-bg": "#0a0a0a", // custom bg
      },
      keyframes: {
        'bat-fly-in': {
          '0%': { transform: 'translateX(100vw) translateY(-50vh) scale(0.5)' },
          '100%': { transform: 'translateX(0) translateY(0) scale(1)' },
        },
        'bat-fly-out': {
          '0%': { transform: 'translateX(0) translateY(0) scale(1)' },
          '100%': { transform: 'translateX(-100vw) translateY(-50vh) scale(0.5)' },
        },
      },
      animation: {
        'bat-fly-in': 'bat-fly-in 2s ease-in-out forwards',
        'bat-fly-out': 'bat-fly-out 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}



// tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'bat-card-dark': "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/assets/bat-man.jpg')",
//       },
//       boxShadow: {
//         soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 10px rgba(255, 255, 255, 0.1)',
//       }
//     },
//   },
//   plugins: [],
// };