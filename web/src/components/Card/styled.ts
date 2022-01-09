import { styled } from 'config/stitches.config'

export const CardLeftImage = styled('img', {
  maxWidth: '200px',
  height: 'auto',
  borderRadius: '16px',
  marginRight: '2rem',
  objectFit: 'cover',
  '@md': {
    display: 'none',
  },
})

export const CardContainer = styled('div', {
  display: 'flex',
  marginTop: '3rem',
})

export const CardTitle = styled('a', {
  margin: 0,
  display: 'block',
  marginBottom: '10px',
  fontSize: '$6',
  fontWeight: '$bold',
  color: '$black',
  textDecoration: 'none',
  fontFamily: '$kanit',
})

export const CardContentImage = styled('img', {
  maxWidth: '120px',
  height: '120px',
  borderRadius: '16px',
  marginRight: '1rem',
  marginTop: '10px',
  objectFit: 'cover',
  '@sm': {
    maxWidth: '100px',
    height: '100px',
  },
  variants: {
    isFirst: {
      true: {
        display: 'none',
        '@md': {
          display: 'block',
        },
      },
      false: {
        display: 'block',
      },
    },
  },

  defaultVariants: {
    isFirst: false,
  },
})

export const CardContentImageContainer = styled('div', {
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  '@md': {
    justifyContent: 'center',
  },
})

export const CardDescription = styled('p', {
  fontFamily: '$kanit',
  color: '$secondary',
  width: '100%',
})

export const CardReadMore = styled('a', {
  fontFamily: '$kanit',
  textDecoration: 'underline',
  fontWeight: '$medium',
  color: '$primary',
  width: '100%',
})

export const CardCatagory = styled('span', {
  fontSize: '$3',
  fontWeight: '$medium',
  fontFamily: '$kanit',
  color: '$secondary',
  variants: {
    clickable: {
      true: {
        textDecoration: 'underline',
        cursor: 'pointer',
      },
      false: {
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    clickable: false,
  },
})
