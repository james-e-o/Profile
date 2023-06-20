/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
  
      colors :{
        darkNavy: '#1f1724f5'
      },
      
      height : {
        vh92 : '92vh',
        vh95 : '95vh',
        variable:'calc(var(--hiet,1vh)*100)',
        over:'650px',
        fill: 'fill-available',
        svh: '100svh'
      },

      animation: {
        'bounce-slow2': 'bounce 1s linear 0.2s infinite',
        'bounce-slow3': 'bounce 1s linear 0.4s infinite',
        'bounce-slow4': 'bounce 1s linear 0.6s infinite',
      },
      
    },
  },
  plugins: [],
}

