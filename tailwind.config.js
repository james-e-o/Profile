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
        deepSlate: '#1f1f1f',
        skyblue: "skyblue"
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
        vh92 : '93vh',
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
        'land_anime1':  "land_anime1 600ms ease-in-out -100ms forwards",
        'land_anime2':  "land_anime2 800ms ease-in-out 500ms forwards",
        'blink_anime':  "blink_anime 1.2s ease-in-out -50ms",
        'multi_color':  "multi_color 20s ease-in-out -50ms infinite alternate",
        'anime': "spin 10s linear infinite, multi_color 30s linear infinite alternate;",
        'jumper':  "jumper 4.5s linear -500ms normal",
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
          '0%' :{"opacity": "0", transform :"translateY(37px)"},
          '40%': {"opacity": "0"},
          '70%': {"opacity": "1"},
          'to': {"opacity": "1", transform : "translateY(0px)"}
        },

        land_anime2 : {
          '0%' :{"opacity": "0", transform :"translateY(37px)"},
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
        },
        multi_color : {
          '0%' :{"fill": "gray"},
          '60%': {"fill": "skyblue"},
          'to': {"fill": "white"}
        },
        jumper: { 
          '8% ':{'transform': 'translateY(480px);opacity: 0'},
          '13%': {opacity: '0','transform': 'translateY(-480px)'},
          '15%': {opacity: '1'},
          '22%': {opacity: '1','transform': 'translateY(0px)'},
          '35%': {opacity: '1','transform': 'translateY(-120px) rotate(-500deg)'},
          '38%': {opacity: '1','transform': 'translateY(-130px) rotate(-550deg)'},
          '43%': {opacity: '1','transform': 'translateY(-110px) rotate(-500deg)'},
          '55%': {opacity: '1','transform': 'translateY(0px)'},
          '65%': {opacity: '1','transform': 'translateY(-70px) rotate(-300deg)'},
          '68%': {opacity: '1','transform': 'translateY(-80px) rotate(-360deg)'},
          '71%': {opacity: '1','transform': 'translateY(-70px)rotate(-300deg)'},
          '79.5%': {opacity: '1','transform': 'translateY(0px)'},
          '86%': {opacity: '1','transform': 'translateY(-41px) rotate(50deg)'},
          '89%': {opacity: '1','transform': 'translateY(-45px) rotate(70deg)'},
          '95%': {opacity: '1','transform': 'translateY(0px)'},
          '98%': {opacity: '1','transform': 'translateY(-10px) rotate(-28deg)'},
          '100%': {opacity: '1','transform': 'translateY(0px)'}
         },

        //  rotateY :{
        //   '0%' :{transform: "gray"},
          
        //   'to': {"fill": "white"}
        //  }

      },

      backgroundImage:{
        conicGradient : "conic-gradient(from 0deg at 50% 50%, white, 45deg, green, 350deg, red)"
      },

      fontFamily: {
        'Six_Caps': ['Six_Caps', 'sans-serif'],
        'Russo_One': ['Russo_One', 'mono'],
        'Orbitron': ['Orbitron', 'mono'],
        'PlayBall': ['Playball','sans'],
        'Righteous': ['Righteous','mono']
      },
      
    },
  },
  plugins: [],
}