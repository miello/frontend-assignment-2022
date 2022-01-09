import { Alert } from 'components/common/Alert'
import { styled } from 'config/stitches.config'
import { ReactComponent as CloseIcon } from 'assets/MdiClose.svg'

export const AlertBox = styled(Alert, {
  position: 'absolute',
  left: '50%',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  transform: 'translateX(-50%)',
  transition: 'all 150ms ease-in-out',
  textAlign: 'center',
  variants: {
    open: {
      true: {
        top: '30px',
      },
      false: {
        top: '0',
        transform: 'translate(-50%, -100%)',
      },
    },
  },
  defaultVariants: {
    open: false,
  },
})

export const CloseButton = styled(CloseIcon, {
  marginLeft: '10px',
  cursor: 'pointer',
})
