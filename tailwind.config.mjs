/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "lg-xl": "1050px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat Variable", "sans-serif"],
        "fira-sans": ["Fira Sans", "sans-serif"],
      },
    },
    plugins: [],
  },
};
