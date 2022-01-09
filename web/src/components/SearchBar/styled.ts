import { Input } from 'components/common/Input'
import { styled } from 'config/stitches.config'
import { ReactComponent as MagnifyGlass } from 'assets/IcBaselineSearch.svg'

export const SearchBase = styled(Input, {
  outline: 'none',
  border: 'none',
  borderBottom: '$secondary 2px solid',
  padding: '8px',
  paddingRight: '2.5rem',
  boxSizing: 'border-box',
  '&:focus': {
    borderBottom: '$primary 2px solid',
  },
  '&::placeholder': {
    opacity: 0.5,
  },
})

export const SearchContainer = styled('form', {
  width: '100%',
  position: 'relative',
})

export const SearchIcon = styled(MagnifyGlass, {
  position: 'absolute',
  right: 5,
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
})
