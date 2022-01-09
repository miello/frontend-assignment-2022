import { Loading } from 'components/common/Loading'
import { styled } from 'config/stitches.config'

export const Title = styled('h1', {
  fontFamily: '$kanit',
  color: '$primary',
  fontSize: '$9',
  margin: 0,
  marginBottom: '1rem',
  fontWeight: '$medium',
  '@md': {
    fontSize: '$8',
  },
})

export const NotFound = styled('h5', {
  fontFamily: '$kanit',
  color: '$primary',
  fontSize: '$6',
  margin: 0,
  marginTop: '2rem',
  fontWeight: '$medium',
  '@md': {
    fontSize: '$5',
  },
})

export const LoadingData = styled(Loading, {
  width: '50px',
  height: '50px',
  marginTop: '3rem',
})
