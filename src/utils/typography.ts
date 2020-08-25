import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
 
  googleFonts: [
      {
          name: 'Lato',
          styles: ["400"]
      },
      {
          name: 'Roberto',
          styles: ["600"]
      }


    ],
  headerFontFamily: ["Roberto", "sans-serif"],
  bodyFontFamily: ["Lato"]
})

export default typography