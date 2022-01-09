import { styled } from 'config/stitches.config'

export const Alert = styled('div', {
  padding: '5px 15px',
  borderRadius: '20px',
  fontFamily: '$kanit',
  color: '$white',
  fontSize: '$4',
  variants: {
    type: {
      success: {
        backgroundColor: 'LimeGreen',
      },
      error: {
        backgroundColor: 'Red',
      },
    },
  },

  defaultVariants: {
    type: 'success',
  },
})
