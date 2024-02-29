/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    screens: {
      'xs':	'200px',
      'sm':	'640px',
      'md':	'768px',
      'lg':	'1024px',
      'xl':	'1280px',
      '2xl':	'1536px'
    },
    borderWidth: {
      t: '1px'
    },
    borderColor: {
      t: 'red'
    },
    backgroundImage: {
      'contact': "url('/public/SECCIONCONTACT.jpeg')"
    },
    colors: {
      app: {
        green: '#99BE01',
        white: '#EEEEEE',
        darkgreen: '#6A7400',
        blightgreen: '#575757',
        hlightgreen: '#94BB01'
      },
      black: '#000000',
      white: '#ffffff'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

