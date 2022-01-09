import { styled } from 'config/stitches.config'

const RootContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
})

const MainContainer = styled('div', {
  height: 'fit-content',
  padding: '8px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: '4rem 2rem',
  marginBottom: '4rem',
  width: '100%',
  maxWidth: '650px',
  alignItems: 'center',
  '@md': {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
})

export { RootContainer, MainContainer }
