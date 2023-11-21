import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      height: {
        's-m-header-desktop': 'calc(100vh - 97px)',
        's-m-header-mobile': 'calc(100vh - 112px)'
      },
      margin: {
        'm-m-header-desktop': '97px',
        'm-m-header-mobile': '112px'
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    }
  },
  plugins: []
}
export default config
