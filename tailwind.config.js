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
        darkNavy: '#1f1724f5',
        deepSlate: '#1f1f1f'
      },

      width : {
        w2px: '2px',
        w95 : '95%',
        w90 : '90%',
        w85 : '85%',
        w80 : '80%'
      },
      
      height : {
        h2px: '2px',
        h95 : '95%',
        h90 : '90%',
        h85 : '85%',
        h80 : '80%',
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
        'slow_blur':    "slow_blur 300ms ease-out -150ms",
        'border_anime_w': "border_anime_w 500ms ease-out -50ms",
        'border_anime_h': "border_anime_h 500ms ease-out -50ms",
        'link_anime':  "link_anime 500ms ease-in-out -350ms",
        'land_anime1':  "land_anime1 600ms ease-in-out -300ms",
        'land_anime2':  "land_anime2 600ms ease-in-out -50ms",
        'blink_anime':  "blink_anime 1.2s ease-in-out -50ms"
      },

      keyframes : {
        slow_blur : {
          'from' :{
              "backdropFilter": "blur(0) brightness(100%)"
          },
          'to': {
              "backdropFilter": 'blur(8) brightness(20%)'
          }
        },
        
        border_anime_w : {
          'from' :{
              "width": "0px"
          },
          '60%': {"width": "0px"},
          'to': {
            "width": "calc(100%+1px)"
          }
        },

        border_anime_h : {
          'from' :{"height": "0px"},
          '60%': {"height": "0px"},
          'to': {"height": "calc(100%+1px)"}
        },
        link_anime : {
          '0%' :{"opacity": "0", transform :"translateY(40px)"},
          '40%': {"opacity": "0"},
          '80%': {"opacity": "1"},
          'to': {"opacity": "1", transform : "translateY(0px)"}
        },

        land_anime1 : {
          '0%' :{"opacity": "0", transform :"translateY(22px)"},
          '40%': {"opacity": "0"},
          '70%': {"opacity": "1"},
          'to': {"opacity": "1", transform : "translateY(0px)"}
        },

        land_anime2 : {
          '0%' :{"opacity": "0", transform :"translateY(22px)"},
          '40%': {"opacity": "0"},
          '70%': {"opacity": "1"},
          'to': {"opacity": "1", transform : "translateY(0px)"}
        },

        blink_anime : {
          '0%' :{"opacity": "0"},
          '40%': {"opacity": "0"},
          '60%': {"opacity": "1"},
          '88%': {"opacity": "0"},
          'to': {"opacity": "1"}
        }

      },

      backgroundImage:{
        conicGradient : "conic-gradient(from 0deg at 50% 50%, white, 45deg, green, 350deg, red)"
      }
      
    },
  },
  plugins: [],
}