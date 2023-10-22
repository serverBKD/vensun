import type { Config } from 'tailwindcss'

const config: Config = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-vensun': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg': "url('/public/hero/pexels-david-sirila-12909094.jpg')",
        'footer-bg': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
  screens: {
    '3xl': '1600px', // Adds a new `3xl:` screen variant
  }    
}
export default config
