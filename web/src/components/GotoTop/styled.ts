import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  backgroundColor: 'transparent',
  border: '$primary 2px solid',
  position: 'fixed',
  borderRadius: '100%',
  paddingLeft: '4px',
  paddingRight: '4px',
  bottom: 20,
  right: 20,
  transition: 'all 1s ease-in-out',
  cursor: 'pointer',
})
