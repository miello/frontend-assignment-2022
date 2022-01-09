import { createStitches } from '@stitches/react'

export const { theme, globalCss, css, styled, keyframes } = createStitches({
  theme: {
    colors: {
      primary: '#2D9CDB',
      secondary: '#8F8F8F',
      white: '#FFFFFF',
      black: '#000000',
    },
    fonts: {
      kanit: "'Kanit', sans-serif",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSizes: {
      1: '10px',
      2: '12px',
      3: '14px',
      4: '16px',
      5: '18px',
      6: '20px',
      7: '24px',
      8: '36px',
      9: '48px',
      10: '60px',
    },
  },

  media: {
    xs: '(max-width: 320px)',
    sm: '(max-width: 496px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 960px)',
    xl: '(max-width: 1280px)',
  },
})

globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap')",
  ],
})()
