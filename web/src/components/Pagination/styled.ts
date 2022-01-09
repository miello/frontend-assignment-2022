import { styled } from 'config/stitches.config'
import { ReactComponent as ChevronLeft } from 'assets/MdiLightChevronLeft.svg'
import { ReactComponent as ChevronRight } from 'assets/MdiLightChevronRight.svg'
import { Chip } from 'components/common/Chip'

export const PaginateChip = styled(Chip, {
  cursor: 'pointer',
  color: '$white',
  marginRight: '8px',
  fontFamily: '$kanit',
  variants: {
    isActive: {
      true: {
        backgroundColor: '$primary',
        cursor: 'default',
      },
      false: {
        backgroundColor: '$secondary',
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
})

export const PaginationContainer = styled('div', {
  display: 'flex',
  marginTop: '2rem',
})

export const CursorRight = styled(ChevronRight, {
  cursor: 'pointer',
})

export const CursorLeft = styled(ChevronLeft, {
  cursor: 'pointer',
})

export const GreyBullet = styled('span', {
  fontFamily: '$kanit',
  marginRight: '8px',
  fontSize: '$4',
})
