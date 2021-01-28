module.exports = {
  purge: [{
    mode:'layers',
    content:['./views/**/**.ejs']
  }],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        cwc:{
          red:'#E84977',
          blue:'#49AADE',
          gray:'#222222'
        }
      }
    },
    fontFamily: {
      'Hachi Maru Pop': ['"Hachi Maru Pop"', 'cursive'],
      'Nota Sans': ['"Noto Sans"', 'sans-serif'] ,
      'Open Sans': ['"Open Sans"', 'sans-serif'],
      'Poppins': ['"Poppins"', 'sans-serif'] ,
      'Potta One': ['"Potta One"', 'cursive'],
      'Roboto': ['"Roboto"', 'sans-serif'] ,
      'Yusei Magic': ['"Yusei Magic"', 'sans-serif'],
      'Lato': ['"Lato"', 'sans-serif'] ,
      'Noto Sans JP': ['"NotoSans JP"', 'sans-serif'],
      'Montserrat': ['"Montserrat"', 'sans-serif'] 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}