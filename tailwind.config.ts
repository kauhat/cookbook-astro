import defaultTheme from 'tailwindcss/defaultTheme.js'

import typo from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['League Spartan', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typo, daisyui],
  daisyui: {
    themes: ['winter', 'night']
  },
  darkMode: ['class', '[data-theme="night"]']
}
