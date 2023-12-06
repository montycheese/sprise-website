import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sprise-gradient': "url('~/static/img/sprise-gradient-desktop@2x.png')",
        'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",
        'gradient-conic':
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'cream': 'rgba(255, 236, 230, 1)',
        'dark-lavender': 'rgba(187, 141, 233, 1)',
        'lavender': 'rgba(210, 167, 252, 1)',
        'midnight': 'rgba(48, 37, 86, 1)',
        'peach': 'rgba(255, 206, 179, 1)',
        'purple': 'rgba(66, 46, 137, 1)',
        'volt': 'rgba(227, 255, 23, 1)',
      },
    },
  },
  plugins: [],
}
export default config
