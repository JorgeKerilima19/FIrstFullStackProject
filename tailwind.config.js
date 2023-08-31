/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight:{
        "vh":"calc(100vh - var(--header-height))"
      }
    },
  },
  plugins: [],
};
