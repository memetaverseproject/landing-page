import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8E6FE7',
        'meme-olet': '#8E6FE7',
        'pearl-white': '#F9F9F1',
        'deep-purple': '#180827',
        highlight: '#923DE7'
      },
      fontSize: {
        'heading-1': ['28px', {
          fontWeight: 600,
        }],
        'heading-2': ['24px', {
          fontWeight: 600,
        }],
        'heading-3': ['20px', {
          fontWeight: 600,
        }],
        'heading-4': ['18px', {
          fontWeight: 600,
        }],
        'subtitle-1': ['16px', {
          fontWeight: 600,
        }],
        'subtitle-2': ['14px', {
          fontWeight: 600,
        }],
        'subtitle-3': ['12px', {
          fontWeight: 600,
        }]
      }
    },
    fontFamily: {
      atmospheric: ['aAtmospheric', 'sans'],
      chakra: ['ChakraPetch', 'sans'],
      svn: ['SVN-Gilroy', 'sans']
    }
  },
  plugins: [],
}
export default config
