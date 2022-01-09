import { keyframes } from '@stitches/react'
import { styled } from 'config/stitches.config'

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const Loading = styled('div', {
  backgroundColor: 'transparent',
  borderRadius: '100%',
  border: '$primary 8px solid',
  borderTopColor: '$secondary',
  animation: `${spin} 2s ease-in-out infinite`,
})
