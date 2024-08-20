import typo from "@tailwindcss/typography";
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme.js";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typo, daisyui],
  daisyui: {
    themes: ["lofi", "pastel", "winter", "bumble", "autumn", "night"],
  },
  // darkMode: ["class", '[data-theme="night"]'],
};
